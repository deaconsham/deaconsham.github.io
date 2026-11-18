const publications = [
    {
        title: 'Co-designing research tools for effective regulation: Using context-based LLMs to bridge policymaking knowledge gaps',
        authors: ['Kim, J. S.', 'Anat, A.', 'Huang, C.', 'Sham, D.', 'Creager, E.', 'Fan, L.-T.'],
        venue: 'Society for Social Studies of Science (4S) Annual Meeting, Toronto, ON, Canada',
        date: 'October 2026',
        url: null
    }
]

function formatAuthors(authors) {
    if (authors.length < 2) return authors.join('')
    return `${authors.slice(0, -1).join(', ')}, & ${authors[authors.length - 1]}`
}

function Publications() {
    return (
        <section id="publications" className="section experience-section">
            <h2 className="section-label">
                PUBLICATIONS
                <span className="ttc-badge" style={{ backgroundColor: '#f58025' }}>5</span>
            </h2>

            {publications.map((pub) => (
                <div className="experience-block" key={pub.title}>
                    <div className="experience-header">
                        {pub.url ? (
                            <a href={pub.url} target="_blank" rel="noopener noreferrer">
                                {pub.title}
                            </a>
                        ) : (
                            <span className="experience-title">{pub.title}</span>
                        )}
                        <span className="experience-date">{pub.date}</span>
                    </div>
                    <p className="experience-desc">
                        {formatAuthors(pub.authors)}
                        <br />
                        {pub.venue}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default Publications
