import React, { useState } from 'react'
import styled from 'styled-components';
import Title from '../globals/Title'
import Section from '../globals/Section';
import { ServiceData } from '../data/ServiceData';
import { media, setColor, setShadow } from '../../styles'

const Mastars = () => {
    const [services, setSerices] = useState(ServiceData)


    return (
        <Section >
            <Title
                title="нашите майстори"
                center
                subtitel="Безпрецедентни умения за бръснарство и много таланти, вие оставяте косата си в ръцете на нашите  професионални бръснари. От подстригването на косата до горещите бръснения."
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
.img-cintainer {
  
    background:${setColor.mainBlack};
     
    position:relative;
    img{
        width:100%;
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
        text-transform:capitalize;
        letter-spacing:2px;
    }
    p{
        letter-spacing:2px;
    }
}

    ${setShadow.light};
    transition:0.3s ease-in-out;
&:hover {
    ${setShadow.dark}
}
`;

export default Mastars
