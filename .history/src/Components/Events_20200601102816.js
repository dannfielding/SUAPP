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
    background-color: grey;
    `;

    const EventWhite = styled.div`
    width: 100%;
    height 80px;
    background-color: grey;
    `;



    return (

        <Wrapper>
            <EventGrey></EventGrey>
            <EventGrey></EventGrey>
            <EventGrey></EventGrey>
        </Wrapper>
    );
}

export default Events;