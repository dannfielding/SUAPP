//Modules
import React from 'react'
import styled from "styled-components";

//Components
import UpcomingDeadlines from "../Components/UpcomingDeadlines";
import Grades from "../Components/Grades";

//Images
import DashImage from "../Images/dash_image.jpg";

function Dashboard(props) {


    const ViewHeading = styled.h3`
    text-align: left;
    padding-left: 30px;
    background-color: ${props => props.theme.colors.lightred};
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
            <ViewTitle>Dashboard</ViewHeading>
            <ViewParagraph><strong>Announcements</strong></ViewParagraph>
            <ViewParagraph>The university would like to remind students that the library is open 24 hours 7 days a week starting from next Monday.</ViewParagraph>
            <ViewParagraph>Summerball tickets nearly sold out, if you’d like to go please purchase a ticket within the next 3 days otherwise tickets may nolonger be avaliable.</ViewParagraph>
            <ViewParagraph>We have guest speaker Randal Fredricks delivering a talk about his brand new book “The ins and outs of University study” his speech will be in the main lecturer theater on Tuesday next week at 9am.</ViewParagraph>
            <br/>
            <UpcomingDeadlines/>
            <br/>
            <Grades />
        </Wrapper>
    )
}

export default Dashboard;