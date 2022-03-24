import React from "react";
import logo from "../img/logo.png"
import google__play from "../img/google_play.png"
import "../style/Header.css"

const Header = () => (
    <>
        <header>
            <div className="header__top">
                <div className="logo">
                    <img src={logo} alt="Flaby" className="logo__img" />
                </div>   
                <nav className="menu">
                    <ul className="menu__ul">
                        <li className="menu__li"><a href="#" className="menu__link link__first">home</a></li>
                        <li className="menu__li"><a href="#" className="menu__link link__mid">services</a></li>
                        <li className="menu__li"><a href="#" className="menu__link link__mid">portfolio</a></li>
                        <li className="menu__li"><a href="#" className="menu__link link__mid">blog</a></li>
                        <li className="menu__li"><a href="#" className="menu__link link__lust">contac us</a></li>
                    </ul>                    
                </nav>
                <div className="button__top">
                    <button name="button" className="button__login">
                        login
                    </button>
                </div>                
            </div>
            <div className="demarcation"></div>
            <div className="header__content">
                <div className="header__text">
                    <h1 className="header__title">flat + free = flaby</h1>
                    <p className="description__text">A Modern Flat design corporate template<br /> for free download with all great features and <br /> trendy look.</p>
                </div>
                <div className="inform__btn">
                    <button name="button" className="btn__google">
                        <img src={google__play} alt="GooglePlay" className="googleplay__logo" />
                        Google Store
                    </button>
                    <button name="button" className="btn__more__information">
                        Learn More
                    </button>
                </div>
            </div>
        </header>
    </>
);

export default Header;