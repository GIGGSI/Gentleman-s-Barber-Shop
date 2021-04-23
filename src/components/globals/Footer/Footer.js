import React from 'react'
import styled from 'styled-components'
import { media, setColor } from '../../../styles'

const Footer = () => {
    return <Section>
        <FooterContainer>
            <SingleDiv>
                <a href="#home">Начало</a>
            </SingleDiv>
            <SingleDiv>
                <a href="#about">За нас</a>
            </SingleDiv>
            <SingleDiv>
                <a href="#services">Услуги</a>
            </SingleDiv>
            <SingleDiv>
                <a href="#barbers">Майстори</a>
            </SingleDiv>

        </FooterContainer>
    </Section>
}

const Section = styled.div`
width:100%;
height:100%;
padding:1rem 2rem;
background: #313131;
`
const FooterContainer = styled.div`
height:10rem;
display:grid;
text-align:center;
justify-content:center;
align-items:center;
grid-template-columns:1fr 1fr;

${media.tablet`
grid-template-columns:1fr 1fr 1fr 1fr;

`}
`

const SingleDiv = styled.div`

a{
    text-decoration:none;
    color:#fff;
    font-size:1.3rem;
    transform: translateY(200px);
    text-transform:uppercase;

}
a:hover{
    color:${setColor.primaryColor};
   
}
`

export default Footer


