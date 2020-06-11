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

    const Section = styled.div`
    width: 100%;
    margin: auto;
    background: yellow;
    `;

    const SectionText = styled.p`
        overflow: hidden;
        max-height: 0;
        padding: 0;
        margin: 0;
        text-align: justify;
        &:target {
            padding: 10px;
            max-height: 20em;
        }
    `;

    const SectionLink = styled.a`
        text-decoration: none;
        display: block;
        text-align: left;
        padding: 10px;
        background: green;
        border-bottom: 2px black;

    `;


    return (

        <Wrapper>
<button type="button" class="collapsible">Open Collapsible</button>
<div class="content">
  <p>Lorem ipsum...</p>
</div>
        </Wrapper>
    );
}

export default Current;