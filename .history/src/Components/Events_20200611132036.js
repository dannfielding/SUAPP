//Modules
import React from "react";
import styled from "styled-components";

function Events() {

    const Wrapper = styled.div`
    width: 80%;
    height: 400px;
    text-align: left;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:100%;
        height: 450px;
    }
  `;

    const EventGrey = styled.div`
    width: 100%;
    height 80px;
    background-color: ${props => props.theme.colors.lightgrey};
    @media (max-width: 640px) {
        width:100%;
    }
    `;

    const EventWhite = styled.div`
    width: 100%;
    height 80px;
    background-color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        width:100%;
    }
    `;

    const EventHeading = styled.h4`
        color: black;
        text-align: center;
        
    `;

    const EventParagraph = styled.p`
    color: black;
    text-align: center;
`;



    return (

        <Wrapper>
            <EventGrey>
                <EventHeading>Assignment Deadline</EventHeading>
                <EventParagraph>28th of November 2020</EventParagraph>
            </EventGrey>
            <EventWhite>
                <EventHeading>Assignment Deadline</EventHeading>
                <EventParagraph>20th of December 2020</EventParagraph>
            </EventWhite>
            <EventGrey>
                <EventHeading>New Assignment Released</EventHeading>
                <EventParagraph>1st of Janurary 2019</EventParagraph>
            </EventGrey>
            <EventWhite>
                <EventHeading>Lecturer on Assignment</EventHeading>
                <EventParagraph>12th of Janurary 2020</EventParagraph>
            </EventWhite>
            <EventGrey>
                <EventHeading>Grades Released</EventHeading>
                <EventParagraph>16th of Janurary 2020</EventParagraph>
            </EventGrey>
        </Wrapper>
    );
}

export default Events;