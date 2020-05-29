//Modules
import React from "react";
import styled from "styled-components";

//Components
import ProgressBar from './ProgressBar2';

function Assignment2() {

    const Wrapper = styled.div`
    width: 80%;
    height: 300x;
    text-align: left;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:80%;
    }
  `;

    const ComponentHeading = styled.h3`
    text-align: center;
    color: ${props => props.theme.colors.black};
    text-align: left;
    @media (max-width: 640px) {
        font-size: 20px;
        text-align: center;
    }
    `;

    const ComponentParagraph = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.black};
    text-align: left;
    @media (max-width: 640px) {
        font-size: 14px;
        text-align: center;
    }
    `;

    const HR = styled.hr`
    width: 80%;
    background-color: ${props => props.theme.colors.black};
    border: 1px solid;
    @media (max-width: 640px) {
        margin-right: auto;
        margin-left: auto;
        margin-top: 100px;
    }
    `;


    return (

        <Wrapper>
            <ComponentHeading>Computer Networking - Assignment 2</ComponentHeading>
            <ProgressBar />
            <ComponentParagraph>This assignment is due on the 14th of June 2019.</ComponentParagraph>
            <ComponentParagraph>You have 11 days to submit.</ComponentParagraph>
            <ComponentHeading>Assignment Checklist:</ComponentHeading>
            <ComponentParagraph>- Fully functional network using the methods taught in lectures.  <input type="checkbox" checked></input></ComponentParagraph>
            <ComponentParagraph>- 1500 word report explaining how you’ve applied your learning to this assignment.  <input type="checkbox" checked></input></ComponentParagraph>
            <HR />
        </Wrapper>
    );
}

export default Assignment2;