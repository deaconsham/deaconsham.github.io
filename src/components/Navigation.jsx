import { useState, useEffect, useCallback, useRef } from 'react'

const stations = [
    { id: 'bio', label: 'BIO', short: 'BIO' },
    { id: 'experience', label: 'EXPERIENCE', short: 'EXP' },
    { id: 'activities', label: 'ACTIVITIES', short: 'ACT' },
    { id: 'projects', label: 'PROJECTS', short: 'PROJ' },
    { id: 'publications', label: 'PUBLICATIONS', short: 'PUBS' },
]

const DEFAULT_WIDTH = 620
const COMPACT_BREAKPOINT = 480
// Approximate rendered width of a label: 9px font + 0.25em letter-spacing
const CHAR_WIDTH = 9 * (0.65 + 0.25)
const labelWidth = (text) => text.length * CHAR_WIDTH

const LINE_COLOUR = '#fccc0a'
const COLOUR_PASSED = '#00933c'
const COLOUR_UPCOMING = '#ee352e'

function Navigation() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [svgWidth, setSvgWidth] = useState(DEFAULT_WIDTH)
    const innerRef = useRef(null)

    // Keep viewBox units equal to CSS pixels so labels never shrink on small screens
    useEffect(() => {
        const el = innerRef.current
        if (!el || typeof ResizeObserver === 'undefined') return
        const observer = new ResizeObserver(([entry]) => {
            const width = Math.round(entry.contentRect.width)
            if (width > 0) setSvgWidth(width)
        })
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    const updateActiveStation = useCallback(() => {
        const scrollY = window.scrollY + window.innerHeight * 0.2
        const atBottom = (window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 20
        let currentIndex = 0

        if (atBottom) {
            currentIndex = stations.length - 1
        } else {
            for (let i = stations.length - 1; i >= 0; i--) {
                const el = document.getElementById(stations[i].id)
                if (el && el.offsetTop <= scrollY) {
                    currentIndex = i
                    break
                }
            }
        }

        setActiveIndex(currentIndex)
    }, [])

    useEffect(() => {
        updateActiveStation()
        window.addEventListener('scroll', updateActiveStation, { passive: true })
        return () => window.removeEventListener('scroll', updateActiveStation)
    }, [updateActiveStation])

    const handleClick = (id) => {
        if (id === 'bio') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            const el = document.getElementById(id)
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
        }
    }

    const compact = svgWidth < COMPACT_BREAKPOINT
    const getLabel = (station) => (compact ? station.short : station.label)
    const lineY = 22
    // Inset the line just enough for the first/last labels to stay inside the bar
    const padding = Math.max(
        15,
        Math.ceil(Math.max(labelWidth(getLabel(stations[0])), labelWidth(getLabel(stations[stations.length - 1]))) / 2) + 4
    )
    const spacing = (svgWidth - padding * 2) / (stations.length - 1)
    const getStationX = (i) => padding + i * spacing

    // Only real mouse pointers get hover; touch taps would otherwise leave a stuck highlight
    const handlePointerEnter = (e, i) => {
        if (e.pointerType === 'mouse') setHoveredIndex(i)
    }

    return (
        <nav className="subway-nav" aria-label="Section navigation">
            <div className="subway-nav-inner" ref={innerRef}>
                <svg
                    className="subway-nav-svg"
                    viewBox={`0 0 ${svgWidth} 52`}
                    preserveAspectRatio="xMidYMid meet"
                >
                    {/*Yellow main line*/}
                    <line
                        x1={getStationX(0)} y1={lineY}
                        x2={getStationX(stations.length - 1)} y2={lineY}
                        stroke={LINE_COLOUR}
                        strokeWidth={6}
                    />

                    {/*Station dots and labels*/}
                    {stations.map((station, i) => {
                        const cx = getStationX(i)
                        const isPassed = i <= activeIndex
                        const isHovered = hoveredIndex === i
                        const isActive = isPassed || isHovered

                        const stationColour = isHovered ? COLOUR_PASSED : (isPassed ? COLOUR_PASSED : COLOUR_UPCOMING)
                        const labelColour = isActive ? '#ffffff' : '#7a7c7f'

                        return (
                            <g
                                key={station.id}
                                className="subway-station-group"
                                onClick={() => handleClick(station.id)}
                                onPointerEnter={(e) => handlePointerEnter(e, i)}
                                onPointerLeave={() => setHoveredIndex(null)}
                                style={{ cursor: 'pointer' }}
                            >
                                {/*Invisible hit area so the whole slot is tappable*/}
                                <rect
                                    x={cx - spacing / 2} y={0}
                                    width={spacing} height={52}
                                    fill="transparent"
                                />
                                {/*Big station — outer ring*/}
                                <circle
                                    cx={cx} cy={lineY}
                                    r={isHovered ? 10 : 8}
                                    fill="#0a0a0a"
                                    stroke={stationColour}
                                    strokeWidth={3}
                                    className="subway-station-dot"
                                />
                                {/*Big station — inner dot*/}
                                <circle
                                    cx={cx} cy={lineY}
                                    r={isHovered ? 4 : 3}
                                    fill="#ffffff"
                                    className="subway-station-dot"
                                />

                                {/*Station label*/}
                                <text
                                    x={cx}
                                    y={lineY + 20}
                                    textAnchor="middle"
                                    className="subway-station-label"
                                    fill={labelColour}
                                >
                                    {getLabel(station)}
                                </text>
                            </g>
                        )
                    })}
                </svg>
            </div>
        </nav>
    )
}

export default Navigation