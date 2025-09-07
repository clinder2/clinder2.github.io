import { Carousel } from 'react-bootstrap';

const projects = [
    {
        image: '/assets/BackTesterImage.png',
        title: "Event-Driven C++ Backtesting Environment",
        github: 'https://github.com/clinder2/CppBacktester',
        description: 'Implemented low-latency backtesting environment in C++ for validating trading strategies. Leveraged Boost C++ library and yfinance API to interface with Yahoo Finance historical stock data. Developed and tested custom mean reversion, genetic algorithm, and ML trading strategies. Achieved 33% higher cumulative returns with genetic algorithm over benchmark returns.',
    },
    {
        image: '/assets/Quantum.png',
        title: 'Quantum Engineering Framework',
        github: 'https://github.com/clinder2/Quantum-State-Preparation',
        description: 'Implemented custom variational quantum circuit in Qiskit for state preparation. Developed mean-squared error cost function to fine-tune circuit parameters. Created novel simulated annealing algorithm to optimize classical feedback loop by 75%. Utilized Qiskit, Python, pandas, and Monte Carlo simulation techniques.',
    },
    {
        image: '/assets/AFF.png',
        title: 'Atlanta Food Finder',
        github: 'https://github.com/stephenl99/AtlantaFoodFinder',
        description: 'Created a full-stack web application using Django integrated with Google Maps API. Utilized Google Maps API to perform geolocation of restaurants based on SQLite database. Practiced Agile software development methods and conducted daily scrums. Built with Python, Django, SQLite, JavaScript, HTML/CSS, and DOM manipulation.',
    },
];

const ProjectCarousel = () => {
    return (
        <div className="carousel-wrapper">
            <div className="carousel-container" onPointerDown={(e) => e.stopPropagation()}>
                <Carousel interval={null} fade indicators={false} nextIcon={<span className="custom-arrow">&rarr;</span> } touch={false}
                          prevIcon={<span className="custom-arrow">&larr;</span>}>
                    {projects.map((project, index) => (
                        <Carousel.Item key={index}>
                            <div className="carousel-slide">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-link"
                                    onPointerDown={(e) => e.stopPropagation()}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="github-icon"/>
                                </a>
                                <h3 className="carousel-title">{project.title}</h3>
                                <div className={"carousel-image-holder"}>
                                    <img
                                        src={project.image}
                                        alt={`Project ${index + 1}`}
                                        className="carousel-image"
                                    />
                                </div>
                                <div className="carousel-description">
                                    {project.description}
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ProjectCarousel;