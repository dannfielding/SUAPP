//Modules
import React from "react";
import styled from "styled-components";

//Components
import ProgressBar from './ProgressBar1';

function Assignment1() {

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
    margin-top: 40px;
    width: 80%;
    background-color: ${props => props.theme.colors.black};
    border: 1px solid;
    @media (max-width: 640px) {
        margin-right: auto;
        margin-left: auto;
        margin-top: 20px;
    }
    `;


    return (

        <Wrapper>
            <ComponentHeading>Computer Building - Assignment 1</ComponentHeading>
            <ProgressBar />
            <ComponentParagraph>This assignment is due on the 13th of June 2019.</ComponentParagraph>
            <ComponentParagraph>You have 10 days to submit.</ComponentParagraph>
            <ComponentHeading>Assignment Checklist:</ComponentHeading>
            <ComponentParagraph>A 5 minute video of you explaining what each computer component is and it’s function.  <input type="checkbox" id="scales" name="scales" checked></input></ComponentParagraph>
            <ComponentParagraph>2000 word report explaining why you chose these parts.  <input type="checkbox" id="scales" name="scales" unchecked></input></ComponentParagraph>
            <HR />
        </Wrapper>
    );
}

export default Assignment1;