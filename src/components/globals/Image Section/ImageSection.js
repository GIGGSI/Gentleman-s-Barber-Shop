import styled from 'styled-components'
import { setBackground, setColor } from '../../../styles';

const SectionImage = styled.header`
/* min-height:100vh; */
${props => setBackground({ img: props.img, color: "rgba(0,0,0,0.5)" })}
background-size: cover;
  padding: 6rem 0;
  background-attachment: fixed;
  background-position: center center;
  position: relative;
  text-align:center;
  width:100%; 


  
  h2 {
    color:${setColor.mainWhite};
  }
  p{
    color:${setColor.mainWhite};
    font-size:1.2rem;
    padding:1rem;
  }

`

export default SectionImage;