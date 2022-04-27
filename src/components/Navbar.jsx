import React from 'react'
import styled from 'styled-components'
import Menu from './Menu';
import IconLogo from './icons/Logo';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    top: 0;
    z-index: 11;
    padding: 0px 50px;
    width: 100%;
    height: 100px;
    backdrop-filter: blur(10px);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.14);

    @media (max-width: 1080px) {
        padding: 0 40px;
    }

    @media (max-width: 768px) {
        padding: 0 25px;
    }
`;

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    z-index: 12;
    color: green;

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        a {
            color: #1B0825;
            width: 42px;
            height: 42px;

            svg {
                fill: none;
                transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                user-select: none;
            }

            h1 {
                color: #1B0825;
                font-size: 48px;
                margin-top: 5px;
                font-family: 'Calibre';
            }
        }   
    }
`;

const StyledLinks = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }

    ol {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
        line-height: 11.7px;
        font-family: 'SFMono';

        li {
            margin: 0 5px;
            position: relative;
            counter-increment: item 1;
            font-size: 18px;
            a {
                padding: 10px;
            }
        }
    } 
    
`;

const Navbar = ({totalItems}) => {

    const Logo = (
        <div className="logo" tabIndex="-1">
            <a href="/" aria-label="home">
              <IconLogo />
            </a>
        </div>
    );

    return (
        <StyledHeader>
            <StyledNav>
                { Logo }
                <StyledLinks>
                    <ol>
                        <li>
                            <a href = '/products'>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href = '/#login'>
                                Login
                            </a>
                        </li>
                        <li>
                            <a href = '/#projects'>
                                Sign up
                            </a>
                        </li>
                        <li>
                            <a href = "/cart">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCartOutlinedIcon />
                                </Badge>
                            </a>
                        </li>
                    </ol>
                </StyledLinks>
                {/* <Menu /> */}
            </StyledNav>
        </StyledHeader>
    )
}

export default Navbar;