import React, { useContext } from "react";
import {Link} from 'react-router-dom';
import '../css/Navbar.css'
import { ThemeContext } from "../context/ThemeContext";


const Navbar=()=>{
    const {theme,toggleTheme} = useContext(ThemeContext);
    return(
        <nav className="nav" style={{background:theme === 'dark'?'#333':'#f2f2f2'}}>
            <Link to='/' className="link" style={{color:theme === 'dark'?'#fff':'#333'}}>Home</Link>
            <Link to='/cart' className="link" style={{color:theme === 'dark'?'#fff':'#333'}}>Cart</Link>
            <button className="toggleBtn" onClick={toggleTheme}>{theme === 'light'?'dark':'light'}</button>
        </nav>
    )
    
}

export default Navbar