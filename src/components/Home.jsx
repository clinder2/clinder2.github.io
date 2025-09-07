import {Image} from "react-bootstrap";
import SelfImage from "/assets/SelfImage.jpeg";
import Typing from "./Typing.jsx";

function Home() {
    return (
        <div id="home" className="section container mt-5">
            <div className="row">
                <div className="col-md-6 w-50 text-center" style={{paddingTop: '90px'}}>
                    <h2 className="name"> Christopher Linder </h2>
                    <Typing/>
                </div>
                <div className="card-right w-50" style={{paddingTop: '90px'}}>
                    <Image src={SelfImage} style={{width: '300px'}} className="img-fluid float-end" roundedCircle
                           alt="Christopher Linder"/>
                </div>
                <span className="w-50" style={{paddingTop: '0px', textAlign: 'center', fontSize: '24px' }}>
                    Hello there, welcome to my website!
                </span>
            </div>
        </div>
    )
}

export default Home;