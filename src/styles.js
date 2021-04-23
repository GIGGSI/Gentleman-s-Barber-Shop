import { css } from 'styled-components'

import homeImg from './image/default.jpg'


export const setColor = {
    primaryColor: '#f6921e',
    secondPrymary: '#162344',
    mainWhite: '#fff',
    offWhite: '#e6e7e8',
    mainBlack: '#222',
    whiteGray: '#e6e7e8',
    darkGray: '#afafaf'
}

export const setFont = {
    main: "font-family: 'Rubik', sans-serif",
    slanted: "font-family: 'Playfair Display'"
}

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
    return `display:flex;align-items:${y};justify-content:${x}`
}

export const setBackground = ({ img = `${homeImg}`, color = "rgba(0,0,0,0)" } = {}) => {
    return `
    background:linear-gradient(${color},${color}),
    url(${img})center/cover fixed no-repeat;
    `
}

export const setRem = (number = 16) => {
    return `${number / 16}rem`
}

const sizes = {
    large: 1200,
    desktop: 992,
    tablet: 768,
    phone: 576,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em){
        ${css(...args)}
    }
    `
    return acc;
}, {})


export const setShadow = {
    light: 'box-shadow:3px 3px 5px 0px rgba(0,0,0,0.75)',
    dark: 'box-shadow:6px 6px 5px 0px rgba(0,0,0,0.75)',
    darknest: 'box-shadow:10px 10px 5px 0px rgba(0,0,0,0.75)'
}