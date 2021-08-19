import { NavLink as Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
export default function nav(props){
    const {menu_bar}=props
    const pathname = window.location.pathname    
    return(
        <>
        <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous"
                />
        <Navbar collapseOnSelect expand="lg" class="navbar" variant="dark">
            <Container>
                <Navbar.Brand href="/"><div>{"ECE<-"}</div><div>{"->RCF"}</div></Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    {Object.keys(menu_bar).map((key,i)=>
                        <Nav.Link  
                            key={i}
                            className={(key===pathname)?"selected":null}
                            href={key}
                        >
                            {menu_bar[key]}
                        </Nav.Link>
                    )}
                </Nav>
                <button className="action-button">Contact Us</button>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}