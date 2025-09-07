import TimeLine from "./TimeLine.jsx"
import TechStack from "./TechStack.jsx";

function About() {
    return (
        <div id="about" className={"section"}>
            <h1 align={"center"}>About</h1>
            <div className="row">
                <div className="tbcontainer col-6 w-40" style={{paddingTop: "3%", paddingLeft: "5%"}}>
                <span>
                    My name is Christopher Linder, and I'm a senior Computer Science major with a Mathematics minor at Georgia Institute of Technology, graduating December 2026. I'm currently working as a Machine Learning Researcher at Georgia Tech's Physics Department, where I'm training ML models using sparse regression for equation inference and have reduced equation residuals by 700% through hyperparameter tuning. I previously interned as a Software Engineer at Bank of America during Summer 2025. My expertise spans Python, C++, Java, and various ML frameworks including PyTorch and Qiskit. I'm passionate about machine learning, algorithms, quantum computing, and quantitative finance. Please reach out if you're interested in collaborating on a project!
                </span>
                <TechStack />
                </div>
                <div className="col md-6">
                    <TimeLine/>
                </div>
            </div>
        </div>
    )
}

export default About;