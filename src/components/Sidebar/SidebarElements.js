import styled from 'styled-components'
import {FaTimes} from "react-icons/fa";
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const SidebarContainer = styled.aside`

@media screen and (max-width: 768px){
    position:fixed;
    z-index:99;
    width:100%;
    height:100%;
    background:#0B1320;
    display:grid;
    align-items:center;
    top:0;
    left:0;
    transition:0.3s ease-in-out;
    opacity:${({isOpen })=> (isOpen ? '100%' : '0%')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    top: 0;
}
    

`

export const CloseIcon =styled(FaTimes)`
    color:#fff;

`
export const Icon =styled.div`
    position: absolute;
    top:1.2rem;
    right:1.5rem;
    background: transparent;
    font-size:2rem;
    cursor:pointer;
    outline:none;
`
export const SidebarWrapper=styled.div`
    color=#fff;

`
export const SidebarMenu=styled.ul`
    display:${({isOpen })=> (isOpen ? 'grid' : 'none')};
    grid-template-columns: 1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center;
    
    @media screen and (max-width:480px){
        grid-template-rows:repeat(6,60px);
    }
`
export const SidebarLink=styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    list-style:none;
    transition: 0.2s ease-in-out;
    color:#fff;
    cursor:pointer;

    &:hover{
        color:#1C3F60;
        transition:0.2s ease-in-out;
    }
`
export const SideBtnWrap=styled.div`
    justify-content:center;
    display:${({isOpen })=> (isOpen ? 'flex' : 'none')};
`
export const SidebarRoute= styled(LinkR)`
    border-radius:50px;
    background:#1C3F60;
    white-space:nowrap;
    padding:16px 64px;
    color:#AFC1D0;
    font-size:16px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#1C3F6099;;
    }
`
