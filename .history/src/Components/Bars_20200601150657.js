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

    const BarWrapper = styled.div`
        height: 180px;
        width: 60px;
    `;

    const Column = styled.div`
    width: 14.2857143%;
    margin-right: auto;
    margin-left: auto;
    height: 400px;
    display: inline-block;
    `;

    const Paragraph = styled.p`
        text-align: center;
    `;


    return (

        <Wrapper>
            <Column>
            <BarWrapper><Bar1></Bar1></BarWrapper>
            <Paragraph>A</Paragraph>
            </Column>
            <Column>
            <BarWrapper><Bar2></Bar2></BarWrapper>
            <Paragraph>A</Paragraph>
            </Column>
            <Column>
            <BarWrapper><Bar3></Bar3></BarWrapper>
            <Paragraph>A</Paragraph>
            </Column>
            <Column>
            <BarWrapper><Bar4></Bar4></BarWrapper>
            <Paragraph>A</Paragraph>
            </Column>
            <Column>
            <BarWrapper><Bar5></Bar5></BarWrapper>
            <Paragraph>A</Paragraph>
            </Column>
            <Column>
            <BarWrapper><Bar6></Bar6></BarWrapper>
            <Paragraph>A</Paragraph>
            </Column>
            <Column>
            <BarWrapper><Bar1></Bar1></BarWrapper>
            <Paragraph>A</Paragraph>
            </Column>
        </Wrapper>

    );
}

export default Current;