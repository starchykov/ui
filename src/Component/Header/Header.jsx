import React from 'react'
import s from './Header.module.css'
import Logo from "../Common/Logo/Logo";
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <header className={s.header}>
            <h1>Subscribe</h1>
            <Logo/>
            <h1><NavLink to={'/login'} activeClassName={s.active} className={s.menuItem}>Login</NavLink></h1>
        </header>
    )
};

export default Header;