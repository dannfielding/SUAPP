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

    const ViewTitle = styled.h2`
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

    const LeftDiv = styled.div`
        height: 100px; 
        width: 60%;
        float: left;
        background-color: 
    `;

    const RightDiv = styled.div`
    height: 100px; 
    width: 40%;
    float: right;
    `;


    return (
        <Wrapper>
            <HomeImage src={DashImage} />
            <ViewTitle>Dashboard</ViewTitle>
            <LeftDiv>
            <p>left</p>
            </LeftDiv>
            <RightDiv>
            <p>right</p>
            </RightDiv>
        </Wrapper>
    )
}

export default Dashboard;