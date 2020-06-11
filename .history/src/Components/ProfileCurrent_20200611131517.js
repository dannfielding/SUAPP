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

    const AssignmentHeading = styled.h3`
        color: black;
        padding-top: 50px;
        text-align: center;
    `;



    return (

        <Wrapper>
            <AssignmentGrey>
                <AssignmentHeading>SWD600 - AE1</AssignmentHeading>
            </AssignmentGrey>
            <AssignmentWhite>
                <AssignmentHeading></AssignmentHeading>
            </AssignmentWhite>
            <AssignmentGrey>
                <AssignmentHeading>Example Assignment</AssignmentHeading>
            </AssignmentGrey>
        </Wrapper>
    );
}



export default Current;