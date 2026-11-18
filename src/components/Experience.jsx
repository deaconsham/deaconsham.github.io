const experiences = [
    {
        title: 'Software Engineering Intern - Ford Motor Company',
        url: 'https://www.ford.ca',
        date: 'September 2026 - Present',
        desc: 'Building on-device AI and LLM tooling for in-vehicle infotainment, including a log-analysis tool that cut root-cause analysis time by 60%.'
    },
    {
        title: 'Machine Learning Researcher - SEMI/U&AI Labs',
        url: 'https://ecreager.github.io',
        date: 'April 2026 - Present',
        desc: 'Building a retrieval-augmented LLM tool that helps policymakers navigate facial recognition regulation, presented at the 4S 2026 conference.'
    },
    {
        title: 'Electrical and Firmware Member - Midnight Sun',
        url: 'https://www.uwmidsun.com/',
        date: 'September 2025 - Present',
        desc: 'Writing STM32 firmware in C with FreeRTOS for the solar car\'s telemetry, lighting and battery systems, and laying out the telemetry board PCB.'
    },
    {
        title: 'Analog Design Member - UWASIC',
        url: 'https://uwasic.com',
        date: 'September 2026 - Present',
        desc: 'Designed a two-stage op-amp in SkyWater 130 nm and now co-designing the demux and DFE for the team\'s PAM4 SerDes chip.'
    },
    {
        title: 'Quantum Photonics Researcher - SQO Group',
        url: 'https://sqogroup.ca/',
        date: 'January 2024 - August 2024',
        desc: 'Fabricated voltage-tunable liquid crystal optics, built a polarization tomography testbed, and automated Stokes vector analysis in Python, cutting processing time by 90%.'
    }
];

function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <h2 className="section-label">
                EXPERIENCE
                <span className="ttc-badge" style={{ backgroundColor: '#00933c' }}>2</span>
            </h2>

            {experiences.map((exp, index) => (
                <div className="experience-block" key={index}>
                    <div className="experience-header">
                        <a href={exp.url} target="_blank" rel="noopener noreferrer">
                            {exp.title}
                        </a>
                        <span className="experience-date">{exp.date}</span>
                    </div>
                    <p className="experience-desc">
                        {exp.desc}
                    </p>
                </div>
            ))}
        </section>
    )
}

export default Experience