import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { media, setColor, } from '../../styles'

const Banner = ({ title }) => {
    return <BannerWrapper>
        <h1>{title}</h1>
    </BannerWrapper>
}
const animations = keyframes`
0%{
    opacity:0;
    transform:translateY(100%);
}
50%{
    opacity:0.5;
    transform:translateY(-20%);

}
100%{
    opacity:1;
    transform:translateY(0%);
};

`;

const BannerWrapper = styled.div`
text-align:center;
letter-spacing:3px;
color:${setColor.mainWhite};

h1{
    text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4); 
  padding-top:10rem;
  animation:${animations} 3s ease-in-out;
}


${media.tablet`
width:70vw;
`}

`

export default Banner
