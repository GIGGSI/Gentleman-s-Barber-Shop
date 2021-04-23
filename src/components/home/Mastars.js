import React, { useState } from 'react'
import styled from 'styled-components';
import Title from '../globals/Title'
import Section from '../globals/Section';
import { BarbersData } from '../data/BarbersData';
import { media, setColor, setShadow } from '../../styles'

const Mastars = () => {
    const [services, setSerices] = useState(BarbersData)


    return (
        <Section >
            <Title
                title="Нашите майстори"
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
background:#edeff0;
margin:2rem 0;
border-radius: 0 0 10px 10px;
.img-cintainer {
    overflow: hidden; 
     height:11rem;
    position:relative;
    background:black;
    
    img{
       opacity:0.8;
        width:100%;
        height:100%;
        /* display:block; */
        transition: all .2s ease-in-out;
        
       

    }
    /* &:hover {
        opacity:1;
    } */
  
    
}
.service-info{
        padding:1rem;
    h4{
        text-transform:capitalize;
        letter-spacing:2px;
        transition:0.3s ease-in-out;
    }
    p{
        color:#5d5b5b;
        letter-spacing:2px;
    }
}

    ${setShadow.light};
    transition:0.3s ease-in-out;
&:hover {
    img{
    transform: scale(1.1);  
    transform-origin: 50% 50%;
    opacity:1;

  }
    background:#CFD2D4;
    ${setShadow.dark};
    h4{
        transform: scale(1.1);  

    }
}
`;

export default Mastars
