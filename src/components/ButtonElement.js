import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button=styled(Link)`
    border-radius:50px;
    background: ${({primary})=>(primary ? '#B1D4E0' : '#1C3F60')};
    white-space:nowrap;
    padding : ${({big}) =>(big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#1C3F60' : '#AFC1D0')};
    font-size: ${({fontbig})=>(fontbig ? '20px' : '16px')};
    outline:none;
    border:none;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=>(primary ? '#B1D4E099' : '#1C3F6099')};
    }

`