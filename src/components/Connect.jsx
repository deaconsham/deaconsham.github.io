import LineBadge from './LineBadge'

function Connect() {
    return (
        <section id="connect" className="section connect-section">
            <h2 className="section-label">
                CONNECT
                <LineBadge section="connect" />
            </h2>
            <div className="connect-links">
                <a href="https://github.com/deaconsham" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://linkedin.com/in/deacon-sham" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a
                    href="https://drive.google.com/file/d/197gBnQ1InF8JcjICA3ipaPhwepgRXzaI/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Resume
                </a>
                <a href="mailto:deacon.sham@uwaterloo.ca">
                    deacon.sham@uwaterloo.ca
                </a>
            </div>
        </section>
    )
}

export default Connect 