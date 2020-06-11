//Modules
import React from "react";
import styled from "styled-components";

function Current() {

    const Wrapper = styled.div`
    width: 14%;
    text-align: left;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: 640px) {
        width:80%;
    }
  `;

    const Bar1 = styled.div`
    height: 180px;
    width: 60px;
    float: left;
    background-color: red;
    `;

    const Bar2 = styled.div`
    height: 180px;
    margin-top: 20px;
    width: 60px;
    background-color: red;
    `;
    const Bar3 = styled.div`
    height: 180px;
    float: right
    margin-top: 20px;
    width: 60px;
    background-color: red;
    `;


    const BarWrapper = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid black;
    `;



    return (

        <Wrapper>
            <Column1></Column1>
            <Column2></Column2>
            <Column3></Column3>
            <Column4></Column4>
            <Column5></Column5>
            <Column6></Column6>
            <Column7></Column7>
            <BarWrapper><Bar1></Bar1></BarWrapper>
            <BarWrapper><Bar2></Bar2></BarWrapper>
            <BarWrapper><Bar3></Bar3></BarWrapper>

        </Wrapper>

    );
}

export default Current;