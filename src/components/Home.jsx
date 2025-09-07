import {Image} from "react-bootstrap";
import SelfImage from "/assets/IMG_0567.jpeg";
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
                    <div className="neural-profile-image float-end">
                        <Image src={SelfImage} style={{width: '300px'}} className="img-fluid" roundedCircle
                               alt="Christopher Linder"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;