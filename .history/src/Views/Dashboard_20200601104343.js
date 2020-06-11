//Modules
import React from 'react'
import styled from "styled-components";

//Images
import MainImage from "../Images/dash_image1.jpg";
import SectionImage from "../Images/dash_image2.jpg";

//Components
import Events from "../Components/Events";

function Dashboard(props) {

    const FirstImage = styled.img` 
    width: 100%;
    display: block;
    `;

    const SecondImage = styled.img` 
    width: 100%;
    display: block;
    `;

    const Wrapper = styled.div`
    position: absolute;
    left: 0;
    z-index: -100;
    background-color: ${props => props.theme.colors.white};
    right: 0;
    @media (max-width: 640px) {
        width:100%;
        margin-top: 100px;
    }
`;

    const ViewTitle = styled.h1`
    text-align: left;
    padding-left: 30px;
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        width:100%;
        text-align: center;
        padding: 0;
    }
    `;

    const LeftHeading = styled.h2`
    text-align: left;
    padding-left: 30px;
    height 50px;
    background-color: ${props => props.theme.colors.lightred};
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        width:100%;
        text-align: center;
        padding: 0;
    }
    `;

    const LeftSubHeading = styled.h3`
    text-align: left;
    padding-left: 30px;
    height 60px;
    background-color: ${props => props.theme.colors.lightred};
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        width:100%;
        text-align: center;
        padding: 0;
    }
    `;

    const LeftDiv = styled.div`
        height: 600px; 
        width: 60%;
        float: left;
        background-color: white;
    `;

    const RightDiv = styled.div`
    height: 600px; 
    width: 40%;
    float: right;
    background-color: ${props => props.theme.colors.red};
    `;

    const RightHeading = styled.h2`
    text-align: left;
    height 110px;
    text-align: center;
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        width:100%;
        text-align: center;
        padding: 0;
    }
    `;

    const Footer = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    height: 80px;
    width: 100%;
    background-color: red;
    color: white;
    text-align: center;
      background-color: ${props => props.theme.colors.red};
      @media (max-width: 640px) {
        text-align: center;
        margin-left: 0;
        margin-right: 0;
    }
      
    `;
  
    const FooterText = styled.p`
      padding-top: px;
      color: ${props => props.theme.colors.white};
      @media (max-width: 640px) {
        padding: 0;
        margin-top: 15px;
        font-size: 10px;
        text-align: center;
    }
    `;


    return (
        <Wrapper>
            <FirstImage src={MainImage} />
            <ViewTitle>Dashboard</ViewTitle>
            <LeftDiv>
            <LeftHeading>Welcome Username</LeftHeading>
            <LeftSubHeading>We hope you’re having a good day!</LeftSubHeading>
            <SecondImage src={SectionImage} />
            </LeftDiv>
            <RightDiv>
            <RightHeading>Upcoming Events</RightHeading>
            <Events/>
            </RightDiv>
            <Footer>
                <FooterText>ask@solent.ac.uk | 023 8201 3000 | Solent University, East Park Terrace, Southampton, SO14 0YN</FooterText>
            </Footer>
        </Wrapper>
    )
}

export default Dashboard;