//Modules
import React from "react";
import styled from "styled-components";

function Grades() {

    const Wrapper = styled.div` //wrapper styling
    width: 80%;
    margin: auto;
    height: 300px;
    margin-bottom: 100px;
    border: 1px solid;
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
    `;

    const ComponentParagraph = styled.p` //paragraph text styling
    text-align: center;
    padding-top: 20px;
    color: ${props => props.theme.colors.white};
    `;


    return (

        <Wrapper>
            <ComponentHeading>Grades</ComponentHeading>
            <ComponentParagraph>Computer Networking AE1- D</ComponentParagraph>
            <ComponentParagraph>Musical Computing AE1- C</ComponentParagraph>
            <ComponentParagraph>Musical Computing AE2 - B</ComponentParagraph>
            <ComponentParagraph>Movie Studies AE1 - A</ComponentParagraph>
        </Wrapper>

    );
}

export default Grades;