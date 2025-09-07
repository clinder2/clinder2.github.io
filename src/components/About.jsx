import TimeLine from "./TimeLine.jsx"
import TechStack from "./TechStack.jsx";

function About() {
    return (
        <div id="about" className={"section"}>
            <h1 align={"center"}>About</h1>
            <div className="row">
                <div className="tbcontainer col-6 w-40" style={{paddingTop: "3%", paddingLeft: "5%"}}>
                <span>
                    My name is Christopher, and I'm studying computer science and math at Georgia Tech. My main interests are in machine learning, algorithms, and optimization techniques, so my best languages are Python and C++. PLease reach out to me if you're interested in working on a project together!
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