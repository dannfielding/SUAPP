//Modules
import React from "react";
import styled from "styled-components";

function Current() {

    const Wrapper = styled.div`
    width: 100%;
    text-align: left;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:100%;
    }
  `;

    const AssignmentGrey = styled.div`
    width: 100%;
    height 130px;
    background-color: ${props => props.theme.colors.lightgrey};
    `;

    const AssignmentWhite = styled.div`
    width: 100%;
    height 130px;
    background-color: ${props => props.theme.colors.white};
    `;

    const AssignmentHeading = styled.h4`
    color: black;
    padding-top: 50px;
    text-align: center;
    `;

    const Collapsible = styled.div`
        width: 100%;
        margin: auto;
        background: yellow;
    `;

    const Section = styled.div`

    `;

    const SectionText = styled.p`
        overflow: hidden;
        max-height: 0;
        padding: 0;
        margin: 0;
        text-align: justify;
    `;

    const SectionLink = styled.a`
        text-decoration: none;
        display: block;
        text-align: left;
        padding: 10px;
        background: green;
        
    `;


    return (

        <Wrapper>
            <Collapsible>
                <Section>
                    <SectionLink href="Assignment1">Example Assignment</SectionLink>
                    <SectionText>Example Text</SectionText>
                </Section>
            </Collapsible>
        </Wrapper>
    );
}

export default Current;