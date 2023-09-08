import React, { useRef, useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "./nav.css";
import ArrowDown from "../../images/arrow_down.png";

const Nav = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleClick = (e) => {
        const jsNavBtn = document.getElementById("js-nav-btn")
        const jsNav = document.getElementById("js-nav")
        const navbarWrapper = document.getElementById("navbar").firstChild;
 
        jsNavBtn.classList.toggle('active');
        jsNav.classList.toggle('active');
        navbarWrapper.classList.toggle('active');
    }

    return (
        <>
            <div id="navbar">
                <div className="container mx-auto py-2.5 lg:flex items-center justify-between max-w-[1170px] px-5">
                    <div className="flex items-center justify-between w-full">
                        <AnchorLink to="/" title="Dr. Kaszó Éva">
                            <h1 className="h1">Dr. Kaszó Éva</h1>
                        </AnchorLink>

                        <button className="btn-nav" id="js-nav-btn" onClick={handleClick}>
                            <span></span>
                        </button>
                    </div>

                    <div className="header-menu relative" id="js-nav">
                        <ul>
                            <li className="relative nav-link">
                                <div className="flex justify-between items-center">
                                    <a href="#">Mediáció</a>
                                    <img src={ArrowDown} className="navbar-arrow block lg:hidden" />
                                </div>
                                
                                <div className="dropdown relative lg:absolute">
                                    <ul>
                                        <li><AnchorLink to="#mi-a-mediacio" title="Mi a mediáció?" /></li>
                                        <li><AnchorLink to="#milyen-esetekben-segit" title="Milyen esetekben segít a Mediátor?" /></li>
                                        <li><AnchorLink to="#mediacio-menete" title="A mediáció menete" /></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="relative nav-link">
                                <div>
                                    <a href="#valasi-mediacio">Válási mediáció</a>
                                </div>
                            </li>

                            <li className="relative nav-link">
                                <div className="flex justify-between items-center">
                                    <a href="#">További területek</a>
                                    <img src={ArrowDown} className="navbar-arrow block lg:hidden" />
                                </div>
                                
                                <div className="dropdown relative lg:absolute">
                                    <ul>
                                        <li><AnchorLink to="#csaladi-vitak" title="Családi viták" /></li>
                                        <li><AnchorLink to="#oroklesi-vitak" title="Öröklési viták" /></li>
                                        <li><AnchorLink to="#gazdasagi-vitak" title="Gazdasági viták" /></li>
                                        <li><AnchorLink to="#munkaugyi-vitak" title="Munkaügyi viták" /></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="relative nav-link">
                                <div>
                                    <AnchorLink to="#contact" title="Kontakt" />
                                </div>
                            </li>

                            <li className="relative nav-link">
                                <div>
                                    <AnchorLink to="#blog" title="Blog" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    )
    
}

export default Nav;