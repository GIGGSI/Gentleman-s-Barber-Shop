import React from 'react'
import styled from 'styled-components'
import { setColor } from '../../../styles'

const Footer = () => {
    return <Section>
        <FooterContainer>
            <SingleDiv>
            <a href="#home">Home</a>
            </SingleDiv>
            <SingleDiv>
            <a href="#about">About us</a>
            </SingleDiv>
            <SingleDiv>
            <a href="#services">Services</a>
            </SingleDiv>
            <SingleDiv>
                <a href="#masters">Masters</a>
            </SingleDiv>

        </FooterContainer>
    </Section>
}

const Section = styled.div`
width:100%;
height:100%;
padding:1rem 2rem;
background:#222;
`
const FooterContainer = styled.div`
height:10rem;
display:grid;
text-align:center;
justify-content:center;
align-items:center;
grid-template-columns:1fr 1fr 1fr 1fr;
`

const SingleDiv = styled.div`

a{
    text-decoration:none;
    color:#fff;
    font-size:1.6rem;
    transform: translateY(200px);

}
a:hover{
    color:${setColor.primaryColor};
   
}
`

export default Footer


