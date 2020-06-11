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

    const Bar1 = styled.div`
    height: 180px;
    width: 60px;
    float: left;
    background-color: white;
    `;

    const Bar2 = styled.div`
    height: 180px;
    width: 60px;
    float: left;
    background-color: white;
    `;


    const Column = styled.div`
    width: 14.2857143%;
    margin-right: auto;
    margin-left: auto;
    height: 400px;
    display: inline-block;
    background-color: red;
    `;



    return (

        <Wrapper>
            <Column><Bar1></Bar1></Column>
            <Column><Bar2></Bar2></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
        </Wrapper>

    );
}

export default Current;