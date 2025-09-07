function TimeLine() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-12">
                    <h4 style={{paddingBottom: 40, textAlign: 'center', fontSize: '2rem', fontWeight: '700', color: 'var(--secondary-text)', textShadow: '0 0 20px rgba(0, 255, 136, 0.5)'}}>
                        Timeline
                    </h4>
                    <div className="timeline">
                        {timelineItems.map((item, index) => (
                            <div className="timeline-item" key={index}>
                                <img src={item.image} alt={item.title} className="timeline-image"/>
                                <div className="timeline-content-container">
                                    <div className="timeline-dot"/>
                                    <div className="timeline-content">
                                        <h4>{item.title}</h4>
                                        <span className="second-text">{item.date}</span>
                                        <ul>
                                            {item.description.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const timelineItems = [
    {
        title: "Bank of America",
        date: "June 2025 – August 2025",
        description: ["Software Engineer Intern", "Developed Java platform using Apache Kafka, Spring, and Jenkins", "Applied saga orchestration patterns for fault-tolerant event processing", "Reduced module standup time by 82% through dependency injection"],
        image: "/assets/BofA.png"
    },
    {
        title: "Georgia Tech Physics Department",
        date: "January 2025 – Present",
        description: ["Machine Learning Researcher", "Training ML models using sparse regression for equation inference", "Utilizing NumPy and pandas for high-dimensional data analysis", "Reduced equation residuals by 700% through hyperparameter tuning"],
        image: "/assets/Georgia_Tech_Yellow_Jackets_logo.svg.png"
    },
    {
        title: "Georgia Institute of Technology",
        date: "2023 - December 2026",
        description: ["Computer Science Major, Math Minor", "Concentrations: Theory and Artificial Intelligence", "Relevant Coursework: Data Structures, AI, Algorithms, Computer Architecture"],
        image: "/assets/Georgia_Tech_Yellow_Jackets_logo.svg.png"
    }
]
export default TimeLine;