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
    margin-top 100px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Bar2 = styled.div`
    height: 180px;
    width: 60px;
    margin-top 100px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Bar3 = styled.div`
    height: 180px;
    width: 60px;
    margin-top 100px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Bar4 = styled.div`
    height: 180px;
    width: 60px;
    margin-top 100px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;
    
    const Bar5 = styled.div`
    height: 180px;
    width: 60px;
    margin-top 100px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Bar6 = styled.div`
    height: 180px;
    width: 60px;
    margin-top 100px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Bar7 = styled.div`
    height: 180px;
    width: 60px;
    margin-top 100px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Column = styled.div`
    width: 14.2857143%;
    margin-right: auto;
    margin-left: auto;
    height: 400px;
    display: inline-block;
    `;



    return (

        <Wrapper>
            <Column>
            <Bar1></Bar1>
            </Column>
            <Column><Bar2></Bar2></Column>
            <Column><Bar3></Bar3></Column>
            <Column><Bar4></Bar4></Column>
            <Column><Bar5></Bar5></Column>
            <Column><Bar6></Bar6></Column>
            <Column><Bar7></Bar7></Column>
        </Wrapper>

    );
}

export default Current;