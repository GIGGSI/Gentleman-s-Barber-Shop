import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'
import { imgData } from '../data/imgData'

const ImgWrapper = () => {
    const [data, setData] = React.useState(imgData)
   
    return <ImgSection>
        <ImgContainer>
            {data.map((item) => {
                return <SingleImg key={item.id}>
                    <img src={item.imgUrl} alt="img" />
                </SingleImg>
            })}
        </ImgContainer>
    </ImgSection>
}

const ImgSection = styled.div`
width:100%;
height:100%;
background:#222;;
`

const ImgContainer = styled.div`
display:grid;
grid-template-columns:1fr;
${media.phone`
grid-template-columns:1fr 1fr;;
`}

${media.tablet`
grid-template-columns:1fr 1fr 1fr 1fr;;
`}


`
const SingleImg = styled.div`
/* display:grid;   
background:blue;
grid-template-columns:1fr 1fr 1fr 1fr; */
img {
    width:100%;
    height:35rem;
}
&:hover{
opacity:0.5
}



`

export default ImgWrapper;
