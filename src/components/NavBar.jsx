import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function Name() {
    return <h1 className={"logo"}>Clinder</h1>;
}

function NavBar() {
    return (
        <>
            <Navbar expand="sm" fixed="top" className="custom-navbar" bg="transparent">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <Name />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#resume">Resume</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/*<Navbar variant="dark" expand="sm" fixed="top">*/}
            {/*    <Container fluid>*/}
            {/*        <Navbar.Brand href="#home">*/}
            {/*        <Name />*/}
            {/*        </Navbar.Brand>*/}
            {/*        <Navbar.Toggle aria-controls="navbar-nav" />*/}
            {/*        <Navbar.Collapse id="navbar-nav">*/}
            {/*            <Nav className="ms-auto">*/}
            {/*                <Nav.Link href="#home">Home</Nav.Link>*/}
            {/*                <Nav.Link href="#about">About</Nav.Link>*/}
            {/*                <Nav.Link href="#projects">Projects</Nav.Link>*/}
            {/*                <Nav.Link href="#resume">Resume</Nav.Link>*/}
            {/*                <Nav.Link href="#contact">Contact</Nav.Link>*/}
            {/*            </Nav>*/}
            {/*        </Navbar.Collapse>*/}
            {/*    </Container>*/}
            {/*</Navbar>*/}
        </>
    );
}

export default NavBar;