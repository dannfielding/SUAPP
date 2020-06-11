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

    const Expand = styled.div`
        display: none;
        overflow: hidden;
    `;

    const ExpandButton = styled.button`
    transition: 0.4s;
    `;



    return (

        <Wrapper>
            <AssignmentGrey>
                <E class="accordion"><AssignmentHeading>Example Assignment</AssignmentHeading></ExpandButton>
                <Expand>
                    <p>hello</p>
                </Expand>
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