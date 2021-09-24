import {useState,useEffect } from "react"
import {NavLink as Link } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import NavBootstrap from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import {ReactComponent as Logo} from "../../media/images/ECERCF-mini-logo.svg"
import { useLocation } from 'react-router'
export default function Nav(props){
    const {menu_bar}=props
    const [active,setActive]=useState(props?.menu_bar?.[0])
    const location = useLocation()
    useEffect(_=>{
        if(location.hash)
            document.querySelector?.(location.hash)?.scrollIntoView({
                behavior:'smooth'
            });
    },[location])
    // TODO remove Bootstrap & create functioning active navbar choices
    return(
        <>
        <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">
                    <Logo className="logo"/>
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <NavBootstrap >
                    {Object.keys(menu_bar).map((key,i)=>
                        <a  
                            key={i}
                            // className={(key===window.location.pathname)?"selected":null}
                            exact to={key}
                            href={key}
                        >
                            {menu_bar[key]}
                        </a>
                    )}
                </NavBootstrap>
                <button className="action-button">Contact Us</button>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}