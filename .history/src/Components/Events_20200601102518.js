//Modules
import React from "react";
import styled from "styled-components";

//Components
import ProgressBar from './ProgressBar2';

function Assignment2() {

    const Wrapper = styled.div`
    width: 80%;
    height: 400px;
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
    margin-top: 40px;
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

        </Wrapper>
    );
}

export default Events;