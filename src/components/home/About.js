import React from 'react'
import Section from '../globals/Section'
import Title from '../globals/Title'
import aboutImg from '../../image/default.jpg'
import { setColor, media } from '../../styles'
import styled from 'styled-components'

const About = () => {
    return <Section>
        <AboutCenter>
            <div className="about__img">
                <img src={aboutImg} alt="about us" />
            </div>
            <div className="about__info">
                <Title title="Кой сме ние?" center > </Title>
                <p>
                    Готови ли сте да избягате от забързания си график?
                    Направете косата и брадата си от професионални бръснари
                    Смейте се страхотно, докато се наслаждавате на глътка уиски ... Или на кафе. Или и двете
                </p>
                <p>
                    Нашите експерти бръснари имат дългогодишен международен опит в бръснарството. \
                    Това преживяване означава, че ние знаем как точно да ви накараме да изглеждате (и да се чувствате) изключително красив. Различните типове коса изискват различни техники за подстригване и подстригване. Вие сте наистина уникални и нашите бръснари ще препоръчат стила, който подхожда точно на вас.
                </p>
            </div>


        </AboutCenter>
    </Section>

}

const AboutCenter = styled.div`
.about__img,.about__info{
    padding:1.8rem;
}
.about__img{
    img{
        width:100%;
        display:block;
        border:6px solid ${setColor.primaryColor}
    }
}
.about__info{
    p{
        letter-spacing:3;
    }  
}
width:90vw;
 margin:0 auto;

${media.large`
.about__img.
.about__info{
    padding:0;
}
width:100vw;
max-width:1170px;
display:grid;
grid-template-columns:1fr 1fr;
grid-column-gap:2rem;

.about__img,.about__info {
    align-self:center;
}
.about__infp {
    p{
        width:80%
    }
}
`};

`;

export default About
