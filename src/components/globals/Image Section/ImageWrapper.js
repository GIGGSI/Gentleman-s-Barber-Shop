import React from 'react'
import SectionImage from './ImageSection'


const ImageSection = ({ title, subTitle, img }) => {
    return <SectionImage img={img}>
        <h2>{title}</h2>
        <p>{subTitle}</p>
    </SectionImage>

}

export default ImageSection
