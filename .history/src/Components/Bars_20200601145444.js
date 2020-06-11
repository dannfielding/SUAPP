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



    const Column = styled.div`
    width: 20%;
    height: 400px;
    display: inline-block;
    background-color: red;
    `;



    return (

        <Wrapper>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
        </Wrapper>

    );
}

export default Current;