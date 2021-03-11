import React from 'react';
import style from './Header.module.css'
import logo from './../images/logo.png';


const Header = (props) => {

    return (
        <div className={style.header+ " " + style.padd}>
                <img src={logo} alt="" />
        </div>
    );
}
export default Header;