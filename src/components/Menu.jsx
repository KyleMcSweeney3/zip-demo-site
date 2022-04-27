import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const StyledMenu = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`

const StyledHamburgerButton = styled.button`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 10;
        margin-right: -15px;
        padding: 15px;
        border: 0;
        background-color: transparent;
        color: inherit;
        text-transform: none;
        transition-timing-function: linear;
        transition-duration: 0.15s;
        transition-property: opacity, filter;
    }
    .ham-box {
        display: inline-block;
        position: relative;
        width: 30px;
        height: 24px;
    }
    .ham-box-inner {
        position: absolute;
        top: 50%;
        right: 0;
        width: 30px;
        height: 2px;
        border-radius: 4px;
        background-color: #1B0825;
        transition-duration: 0.22s;
        transition-property: transform;
        transition-delay: ${props => (props.menuOpen ? `0.12s` : `0s`)};
        transform: rotate(${props => (props.menuOpen ? `225deg` : `0deg`)});
        transition-timing-function: cubic-bezier(
            ${props => (props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`)}
        );
        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            left: auto;
            right: 0;
            width: 30px;
            height: 2px;
            border-radius: 4px;
            background-color: #1B0825;
            transition-timing-function: ease;
            transition-duration: 0.15s;
            transition-property: transform;
        }
        &:before {
            width: ${props => (props.menuOpen ? `100%` : `120%`)};
            top: ${props => (props.menuOpen ? `0` : `-10px`)};
            opacity: ${props => (props.menuOpen ? 0 : 1)};
            transition: ${({ menuOpen }) =>
            menuOpen ? 'top 0.1s ease-out, opacity 0.1s ease-out 0.12s' : 'top 0.1s ease-in 0.25s, opacity 0.1s ease-in'};
        }
        &:after {
            width: ${props => (props.menuOpen ? `100%` : `80%`)};
            bottom: ${props => (props.menuOpen ? `0` : `-10px`)};
            transform: rotate(${props => (props.menuOpen ? `-90deg` : `0`)});
            transition: ${({ menuOpen }) => (menuOpen ? 'bottom 0.1s ease-out' : 'bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)')};
        }
    }
`;

const StyledSidebar = styled.aside`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        padding: 50px 10px;
        width: min(75vw, 400px);
        height: 100vh;
        outline: 0;
        background-color: white;
        box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
        z-index: 9px;
        transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
        visibility: ${props => (props.menuOpen ? 'visible' : 'hidden')};
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        flex-direction: column;
        color: white;
        /* font-family: 'SFMono'; */
        text-align: center;
    }
    ol {
        padding: 0;
        margin: 0;
        list-style: none;
        width: 100%; 
        li {
            position: relative;
            margin: 0 auto 20px;
            counter-increment: item 1;
            font-size: clamp(18px, 4vw, 22px);
            @media (max-width: 600px) {
                margin: 0 auto 10px;
            }
            
        }
        a {
            display: inline-block;
            text-decoration: none;
            text-decoration-skip-ink: auto;
            color: inherit;
            position: relative;
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            &:hover,
            &:active,
            &:focus {
                color: blue;
                outline: 0;
            }
            width: 100%;
            padding: 3px 20px 20px;
        }
    }
`;

const Menu = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const buttonRef = useRef(null);
    const navRef = useRef(null);

    return (
        <StyledMenu>
            <div>
                <StyledHamburgerButton
                    onClick={toggleMenu}
                    menuOpen={menuOpen}
                    ref={buttonRef}
                    aria-label="Menu">
                    <div className="ham-box">
                        <div className="ham-box-inner" />
                    </div>
                </StyledHamburgerButton>
                <StyledSidebar menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1}>
                    <nav ref = {navRef}>
                        <ol>
                            <li>
                                <a href = "/products" onClick={() => setMenuOpen(false)}>
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href = "/login" onClick={() => setMenuOpen(false)}>
                                    Login
                                </a>
                            </li>
                            <li>
                                <a href = "/signup" onClick={() => setMenuOpen(false)}>
                                    Sign up
                                </a>
                            </li>
                            <li>
                                <a href = "/cart" onClick={() => setMenuOpen(false)}>
                                    <ShoppingCartOutlinedIcon />
                                </a>
                            </li>
                        </ol>
                    </nav>
                </StyledSidebar>
            </div>
        </StyledMenu>
    )
}

export default Menu