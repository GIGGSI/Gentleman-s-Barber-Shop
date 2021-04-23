import React from 'react'
import styled from 'styled-components'
import { setColor, setFont } from '../../styles'

const Title = ({ className, title, center, subtitel }) => {
    return (
        <TitleWrapper>
            <h3>  {title}</h3>
            <p>{subtitel}</p>
        </TitleWrapper>

    )
}
const TitleWrapper = styled.div`
text-align:center;
h3{
    font-size:2.3rem;
 /* text-transform:uppercase; */
 letter-spacing:2px;
 ${setFont.slanted};
 /* text-align:${props => props.center ? "center" : "left"}; */
}
p{
    padding:0 3rem;
}
`
export default Title;


