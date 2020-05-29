//Modules
import React from "react";
import styled from "styled-components";

function Grades() {

    const Wrapper = styled.div` //wrapper styling
width: 100%;
height: 300px;
width: 80%;
margin: auto;
border: 1px solid;
background-color: ${props => props.theme.colors.lightred};
@media (max-width: 640px) {
    width:80%;
    border: 0;
    margin-left: auto;
    margin-right: auto;
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
padding-top: 20px;
color: ${props => props.theme.colors.white};
@media (max-width: 640px) {
    width:100%;
    }
`;


    return (

        <Wrapper>
            <ComponentHeading>Upcoming Deadlines</ComponentHeading>
            <ComponentParagraph>Computer Building AE1 - 13/06/19</ComponentParagraph>
            <ComponentParagraph>Computer Networking AE2  - 14/06/19</ComponentParagraph>
            <ComponentParagraph>Content Creation AE1 - 13/07/19</ComponentParagraph>
            <ComponentParagraph>Final Year Project- 13/08/19</ComponentParagraph>
        </Wrapper>

    );
}

export default Grades;