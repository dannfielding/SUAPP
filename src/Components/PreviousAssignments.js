//Modules
import React from "react";
import styled from "styled-components";

function PreviousAssignments() {


    const ComponentHeading = styled.h3`
    text-align: center;
    color: ${props => props.theme.colors.white};
    `;

    const ComponentParagraph = styled.p`
    text-align: center;
    padding-top: 25px;
    color: ${props => props.theme.colors.white};
    `;

    const Wrapper = styled.div` //wrapper styling
    width: 80%;
    margin: auto;
    height: 320px;
    margin-bottom: 100px;
    background-color: ${props => props.theme.colors.lightred};
    @media (max-width: 640px) {
        width:80%;
        border: 0;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 100px;
    }
  `;


    return (

        <Wrapper>
            <ComponentHeading>Current Assignments</ComponentHeading>
            <ComponentParagraph>Computer Building AE1</ComponentParagraph>
            <ComponentParagraph>Computer Networking AE2</ComponentParagraph>
            <ComponentParagraph>Content Creation AE1</ComponentParagraph>
            <ComponentParagraph>Final Year Project AE2</ComponentParagraph>
        </Wrapper>
    );
}

export default PreviousAssignments;