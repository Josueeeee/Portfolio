import React, { useState } from 'react';
import logo from "../imgs/ROGRAMADOR-LOGO.png"


const Navbar = () => {
    const [show, setShow] = useState(false);
    const togglemenu = () => {
        setShow(!show)
    }
    return (
        <header className='conteinerNav'>
            {/* <nav className="menu" >
                <button onClick={togglemenu}> <img src="../imgs/menu 1.svg" alt="" /></button>
                <ul id="nav" style={{ display: show ? "block" : "none" }}>
                    <li><a href="#" >Home</a></li>
                    <li><a href="#" >Servicios</a></li>
                    <li><a href="#acerca-de-mi" >Acerca de mí</a></li>
                    <li><a href="#" >Mis habilidades</a></li>
                    <li><a href="#" >Mi protafolio</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav> */}
            <div className='conteiner-logo'>
                <img src={logo} alt="" width="100%" className='logo' />
            </div>
            <nav className="navMenu">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">Work</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <div className="dot"></div>
            </nav>

        </header >
    );
};

export default Navbar;