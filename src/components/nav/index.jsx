import { NavLink as Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {ReactComponent as Logo} from "../../media/images/ECERCF-mini-logo.svg"
export default function nav(props){
    const {menu_bar}=props
    return(
        <>
        <Navbar collapseOnSelect expand="lg" class="navbar" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <Logo className="logo"/>
                    {/* <div>{"ECE<-"}</div><div>{"->RCF"}</div> */}
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    {Object.keys(menu_bar).map((key,i)=>
                        <Link  
                            key={i}
                            // className={(key===window.location.pathname)?"selected":null}
                            exact to={key}
                        >
                            {menu_bar[key]}
                        </Link>
                    )}
                </Nav>
                <button className="action-button">Contact Us</button>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}