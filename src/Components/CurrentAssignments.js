//Modules
import React from "react";
import styled from "styled-components";

function CurrentAssignments() {

    const Wrapper = styled.div` //wrapper styling
    width: 80%;
    margin: auto;
    height: 320px;
    background-color: ${props => props.theme.colors.lightred};
    @media (max-width: 640px) {
        width:80%;
        border: 0;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 100px;
    }
  `;

    const ComponentHeading = styled.h3` //heading text styling
    text-align: center;
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        width:100%;
    }
    `;

    const ComponentParagraph = styled.p` //paragraph text styling
    text-align: center;
    padding-top: 25px;
    color: ${props => props.theme.colors.white};
            @media (max-width: 640px) {
            width:100%;
        }
    `;


    return (

        <Wrapper>
            <ComponentHeading>Previous Assignments</ComponentHeading>
            <ComponentParagraph>Computer Building AE1</ComponentParagraph>
            <ComponentParagraph>Computer Networking AE2</ComponentParagraph>
            <ComponentParagraph>Content Creation AE1</ComponentParagraph>
            <ComponentParagraph>Final Year Project AE1</ComponentParagraph>
        </Wrapper>

    );
}

export default CurrentAssignments;