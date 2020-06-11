//Modules
import React from "react";
import styled from "styled-components";

function Events() {

    const Wrapper = styled.div`
    width: 80%;
    height: 400px;
    text-align: left;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:80%;
    }
  `;

    const EventGrey = styled.div`
    width: 100%;
    height 80px;
    background-color: ${props => props.theme.colors.lightgrey};
    `;

    const EventWhite = styled.div`
    width: 100%;
    height 80px;
    background-color: ${props => props.theme.colors.white};
    `;

    const EventHeading = styled.h4`
        color: black;
        text-align: center;
    `;

    const EventParagraph = styled.p`
    color: black;
    text-align: center;
`;



    return (

        <Wrapper>
            <AssignmentGrey>
                <AssignmentHeading></AssignmentHeading>
                <AssignmentParagraph></AssignmentParagraph>
            </AssigmentGrey>
            <AssignmentGrey>
                <AssignmentHeading></AssignmentHeading>
                <AssignmentParagraph></AssignmentParagraph>
            </AssigmentGrey>
            <AssignmentGrey>
                <AssignmentHeading></AssignmentHeading>
                <AssignmentParagraph></AssignmentParagraph>
            </AssigmentGrey>
        </Wrapper>
    );
}

export default Events;