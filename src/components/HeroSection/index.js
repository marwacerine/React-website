import React,{useState} from 'react'
import { HeroContainer,HeroBg,VideoBg ,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward ,ArrowRight} from './HeroElements';
import Video from "../../videos/Video.mp4";
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover]= useState(false);

    const onHover =()=>{
        setHover(!hover);
    };
    
    
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
            </HeroBg>
            <HeroContent >
                <HeroH1>The Alchemist Store</HeroH1>
                <HeroP>Boutique D'articles Personnalisés</HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}  >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
