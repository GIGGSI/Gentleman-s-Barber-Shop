import React, { useState } from 'react'
import styled from 'styled-components';
import Title from '../globals/Title'
import Section from '../globals/Section';
import { ServiceData } from '../data/ServiceData';
import { media, setColor, setShadow } from '../../styles'

const Services = () => {
    const [services, setSerices] = useState(ServiceData)


    return (
        <Section >
            <Title
                title="Услугите, който предламе"
                center
                subtitel="Предлагаме широк спектър от класически и съвременни методи за поддръжка на мъжко лице и коса."
            />
            <SectionCenter>
                {services.map((item) => {

                    return <SingleService key={item.id}>
                        <div className="img-cintainer">
                            <img src={item.imgUrl} alt={item.title} />
                        </div>
                        <div className="service-info">
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </div>
                    </SingleService>
                })}
            </SectionCenter>
        </Section>
    )
}
const SectionCenter = styled.div`
width:90vw;
margin:0 auto;
text-align:center;

${media.large`
width:100vw;
max-width:1170px;
`}
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
grid-column-gap:1.5rem;

`
const SingleService = styled.article`
background:${setColor.mainWhite};
margin:2rem 0;
transition: .5s ease;
  border-radius: 0;
  transform: perspective(0em) rotateX(0deg) rotateY(0deg) rotateZ(0deg);

.img-cintainer {
   
  
    background:${setColor.mainBlack};
     
    position:relative;
    img{
        width:100%;
        height:12rem;
        display:block;
        transition:0.3s ease-in-out
    }
    &:hover img {
        opacity:0.5
    }
}
.service-info{
        padding:1rem;
    h4{
        /* text-transform:uppercase; */
        letter-spacing:2px;
    }
    p{
        color:#5d5b5b;

        letter-spacing:2px;
    }
}

    ${setShadow.light};
    transition:0.3s ease-in-out;
&:hover {
    transform: perspective(3em) rotateX(0deg) rotateY(-1.175deg) rotateZ(-1deg);
    ${setShadow.dark};
    background:#dedfe0;
}
`;

export default Services
