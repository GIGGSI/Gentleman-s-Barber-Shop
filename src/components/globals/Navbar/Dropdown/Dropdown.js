import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { menuData } from '../../../data/menuData'
import { setColor, media } from '../../../../styles';

const DropdownContainer = styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#cd853f;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity:${({ isOpen }) => isOpen ? '1' : '0'};

top:${({ isOpen }) => isOpen ? '0' : '100%'};

`

const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`

const CloseIcon = styled(FaTimes)`
color:#000d1a;
`

const DropdownWrapper = styled.div`

`

const DropdownMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(14,40px);
text-align:center;
padding-top:10rem;

text-transform:uppercase;
    font-size:2rem;
a {
    text-decoration:none;
    color:${setColor.mainWhite}
}

${media.tablet`
display:flex;
justify-content:center;
align-items:center;


`}
@media screen and (max-width:480px) {
    /* grid-template-rows:repeat(7,45px); */
    

}
`

const Dropdown = ({ isOpen, toggle }) => {
    return <DropdownContainer
        isOpen={isOpen}
        onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <DropdownWrapper>
            <DropdownMenu>
                {menuData.map((item) => {
                    return <a href={item.link} key={item.id}>{item.title}</a>
                })}
            </DropdownMenu>


        </DropdownWrapper>
    </DropdownContainer>
}

export default Dropdown
