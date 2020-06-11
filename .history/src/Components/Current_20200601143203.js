//Modules
import React from "react";
import styled from "styled-components";

function Current() {

    const Wrapper = styled.div`
    width: 100%;
    text-align: left;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:80%;
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
        padding-top: 5px;
        text-align: center;
    `;

    const Panel = styled.div`
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
    `;


    const Expand = styled.div`
    padding: 0 18px;
    display: none;
    background-color: white;
    overflow: hidden;
    `;

    const Accordion = styled.button`
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
    `;

    return (

        <Wrapper>
            <AssignmentGrey>
            <AssignmentHeading>Example Assignment</AssignmentHeading>
            </AssignmentGrey>
            <AssignmentWhite>
            <AssignmentHeading>Example Assignment</AssignmentHeading>
            </AssignmentWhite>
            <AssignmentGrey>
            <AssignmentHeading>Example Assignment</AssignmentHeading>
            </AssignmentGrey>
        </Wrapper>
    );
}

export default Current;