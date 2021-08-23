import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia,SocialMediaWrap,WebsiteRights,SocialIcons,SocialIconLink,SocialLogo} from './FooterElements' ;
import {FaFacebook, FaInstagram,FaYoutube,FaTwitter} from "react-icons/fa"
import { animateScroll as scroll } from 'react-scroll';


const Footer = () => {
    
const toggleHome=()=>{
    scroll.scrollToTop(); 
}
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">three</FooterLink>
                            <FooterLink to="/signin">four</FooterLink>
                            <FooterLink to="/signin">five </FooterLink>
                            <FooterLink to="/signin">six</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>contact us</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">three</FooterLink>
                            <FooterLink to="/signin">four</FooterLink>
                            <FooterLink to="/signin">five </FooterLink>
                            <FooterLink to="/signin">six</FooterLink>
                        </FooterLinkItems>
                    
                        
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>social media</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">three</FooterLink>
                            <FooterLink to="/signin">four</FooterLink>
                            <FooterLink to="/signin">five </FooterLink>
                            <FooterLink to="/signin">six</FooterLink>
                        </FooterLinkItems>
                         <FooterLinkItems>
                            <FooterLinkTitle>yeyoo</FooterLinkTitle>
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">three</FooterLink>
                            <FooterLink to="/signin">four</FooterLink>
                            <FooterLink to="/signin">five </FooterLink>
                            <FooterLink to="/signin">six</FooterLink>
                        </FooterLinkItems>
                    
                       
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}> LOGO</SocialLogo>
                        <WebsiteRights>LOGO © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
