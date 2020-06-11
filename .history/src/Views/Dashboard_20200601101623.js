//Modules
import React from 'react'
import styled from "styled-components";

//Images
import DashImage from "../Images/dash_image.jpg";

function Dashboard(props) {

    const HomeImage = styled.img` 
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
        height: 1000px; 
        width: 60%;
        float: left;
        background-color: yellow;
    `;

    const RightDiv = styled.div`
    height: 1000px; 
    width: 40%;
    float: right;
    background-color: green;
    `;

    const RightHeading = styled.h2`
    text-align: left;
    padding-left: 60px;
    height 110px;
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        width:100%;
        text-align: center;
        padding: 0;
    }
    `;


    return (
        <Wrapper>
            <HomeImage src={DashImage} />
            <ViewTitle>Dashboard</ViewTitle>
            <LeftDiv>
            <LeftHeading>Welcome Username</LeftHeading>
            <LeftSubHeading>We hope you’re having a good day!</LeftSubHeading>
            </LeftDiv>
            <RightDiv>
            <RightHeading>Welcome Username</RightHeading>
            </RightDiv>
        </Wrapper>
    )
}

export default Dashboard;