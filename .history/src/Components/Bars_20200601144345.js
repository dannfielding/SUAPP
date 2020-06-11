//Modules
import React from "react";
import styled from "styled-components";

function Current() {

    const Wrapper = styled.div`
    width: 100%;
    text-align: left;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: 640px) {
        width:80%;
    }
  `;

    const Bar = styled.div`
    height: 180px;
    margin-top: 20px;
    width: 60px;
    background-color: red;
    `;

    const BarWrapper = styled.div`
    height: 200px;
    width: 60px;
    background-color: white;
    border: 1px solid black;
    `;



    return (

        <Wrapper>
            <BarWrapper><Bar></Bar></BarWrapper>
            <BarWrapper><Bar></Bar></BarWrapper>
            <BarWrapper><Bar></Bar></BarWrapper>
            
        </Wrapper>
    );
}

export default Current;