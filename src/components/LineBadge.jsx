import { getSection } from '../sections'

// Decorative TTC line roundel; hidden from screen readers so headings read cleanly
function LineBadge({ section }) {
    const { line, colour, textColour } = getSection(section)
    return (
        <span
            className="ttc-badge"
            style={{ backgroundColor: colour, color: textColour }}
            aria-hidden="true"
        >
            {line}
        </span>
    )
}

export default LineBadge
