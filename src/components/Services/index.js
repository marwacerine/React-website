import React from 'react'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'
import Icon1 from '../../images/Icon1.jpg'
import Icon2 from '../../images/Icon2.jpg'
import Icon3 from '../../images/Icon3.jpg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>one</ServicesH2>
                    <ServicesP>we help you</ServicesP>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>two</ServicesH2>
                    <ServicesP>we help youfffffffff 
                        ffffffffffdddd </ServicesP>
                    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>three</ServicesH2>
                    <ServicesP>we help you</ServicesP>
                    
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
