// TTC line colours, keyed by line number
const LINE_COLOURS = {
    1: { colour: '#fccc0a', textColour: '#0a0a0a' }, // Yonge-University
    2: { colour: '#00933c' }, // Bloor-Danforth
    3: { colour: '#0085cd' }, // Scarborough
    4: { colour: '#b933ad' }, // Sheppard
    5: { colour: '#f58220' }, // Eglinton
    6: { colour: '#8a999a' }, // Finch West
}

// Page sections in display order. Each section's line number (and so its
// badge colour) comes from its position, so reordering renumbers automatically.
export const sections = [
    { id: 'bio', label: 'BIO', short: 'BIO', inNav: true },
    { id: 'experience', label: 'EXPERIENCE', short: 'EXP', inNav: true },
    { id: 'activities', label: 'ACTIVITIES', short: 'ACT', inNav: true },
    { id: 'projects', label: 'PROJECTS', short: 'PROJ', inNav: true },
    { id: 'publications', label: 'PUBLICATIONS', short: 'PUBS', inNav: true },
    { id: 'connect', label: 'CONNECT', short: 'CONNECT', inNav: false },
].map((section, i) => ({ ...section, line: i + 1, ...LINE_COLOURS[i + 1] }))

export const getSection = (id) => sections.find((section) => section.id === id)
