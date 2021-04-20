import React from 'react'
import styled, { css } from 'styled-components/macro'
import logo from '../../../image/GB_logo.svg'

import { FaBars } from 'react-icons/fa'
import Dropdown from './Dropdown/Dropdown';
import './Navbar.css'


const NavLink = css`
color:#fff;
display:flex;
align-items:center;
padding: 0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;

`
const Logo = styled.div`
${NavLink}
font-style:italic;
color:white;
img {
    width:100%;
    height:5rem;
}

`

const MenuBars = styled(FaBars)`
display:none;

@media screen and (max-width:768px){
display:block;
color:white;
font-size:2.5rem;
margin-top:1rem;
cursor:pointer;
position:absolute;
top:0;
right:0;
transform:translate(-50%,25%)
}
`;

const NavMenu = styled.div`
display:flex;
align-items:center;

a {
    list-style:none;
    text-decoration:none;
    color:white;
    margin-right:1rem;
}
@media screen and (max-width:768px) {
    display:none;
}
`;


const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:24px;

@media screen and (max-width:768px) {
    display:none;
}
`


const Navbar = ({ toggle, className }) => {
    const [dropdown, setDropdown] = React.useState(false);
    const [navbar, setNavbar] = React.useState(false);


    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 64,
        })
    }
    const changeBackground = () => {
        if (window.scrollY >= 530) {
            setNavbar(true)

        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return <nav className={navbar ? 'active' : 'null'}>
        <Logo>
            <a href="#home" ><img src={logo} alt="logo" />  </a>
        </Logo>

        <MenuBars onClick={toggle} />
        <NavMenu >
            <a href="#home" onClick={handleClick}>Home</a>
            <a href="#about" onClick={handleClick}>About us</a>
            <a href="#services" onClick={handleClick}>Sections</a>

        </NavMenu>

    </nav >
}

export default Navbar
