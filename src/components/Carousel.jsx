import { Carousel } from 'react-bootstrap';

const projects = [
    {
        image: '/assets/BackTesterImage.png',
        title: "Backtester",
        github: 'https://github.com/clinder2/CppBacktester',
        description: 'This is a backtester written in C++. It supports numerous trading strategies and analyzes historic stock data. Future work involves support for live data analysis and exploration of machine learning trading strategies.',
    },
    {
        image: '/assets/Quantum.png',
        title: 'Quantum State Preparation',
        github: 'https://github.com/clinder2/Quantum-State-Preparation',
        description: 'A collection of quantum frameworks to understand and perform quantum pruning. Included are ansatz pruning tools and genetic algorithms to optimize ansatz layer generation',
    },
    {
        image: '/assets/AFF.png',
        title: 'Atlanta Food Finder',
        github: 'https://github.com/stephenl99/AtlantaFoodFinder',
        description: 'Atlanta Food Finder is an interactive web app to help users find restaurants in the Atlanta area. Created with Django framework and utilizing the Google Maps API.',
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
                                    <img src="/assets/GitHub.png" alt="GitHub" className="github-icon"/>
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