//Modules
import React from 'react'
import styled from "styled-components";

//Components
import UpcomingDeadlines from "../Components/UpcomingDeadlines";
import Grades from "../Components/Grades";

//Images
import DashImage from "../Images/dash_image.jpg";

function Dashboard(props) {


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


    const ViewParagraph = styled.p`
    text-align: left;
    margin-left: 30px;
    width: 100%;
    color: ${props => props.theme.colors.black};
    @media (max-width: 640px) {
        width:80%;
        text-align: center;
    }
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

    const HomeImage = styled.img` 
    width: 100%;
    display: block;
    `;

    return (
        <Wrapper>
            <HomeImage src={DashImage} />
            <ViewTitle>Dashboard</ViewTitle>
            <
        </Wrapper>
    )
}

export default Dashboard;