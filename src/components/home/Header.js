import React from 'react'
import Hero from '../globals/Hero'
import homeImg from '../../image/cta.jpg'
import Banner from '../globals/Banner'

const Header = () => {
    return <>
        <Hero img={homeImg} >
            <Banner title="Повече от мъжки фризьорски салон!" />
        </Hero>
    </>
}

export default Header
