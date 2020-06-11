//Modules
import React from "react";
import styled from "styled-components";

function Current() {

    const Wrapper = styled.div`
    width: 100%;
    margin-top: 80px;
    text-align: left;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: 640px) {
        width:80%;
    }
  `;

    const Bar1 = styled.div`
  height: 140px;
  width: 60px;
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${props => props.theme.colors.lightred};
  `;

    const Bar2 = styled.div`
    height: 80px;
    width: 60px;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Bar3 = styled.div`
    height: 180px;
    width: 60px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Bar4 = styled.div`
    height: 180px;
    width: 60px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Bar5 = styled.div`
    height: 0px;
    width: 60px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Bar6 = styled.div`
    height: 100px;
    width: 60px;
    margin-top: 80px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const Bar7 = styled.div`
    height: 140px;
    width: 60px;
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const BarWrapper = styled.div`
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    height: 180px;
    width: 60px;
    border: 1px solid;
    `;

    const Column = styled.div`
    width: 14.2857143%;
    margin-right: auto;
    margin-left: auto;
    height: 300px;
    display: inline-block;
    `;


    const Paragraph = styled.p`
    color: ${props => props.theme.colors.black};
    text-align: center;
    margin: auto;
    background-color: ${props => props.theme.colors.white};
    align-items: center;
    @media (max-width: 640px) {
        width: 80%;
        text-align: center;
        color: ${props => props.theme.colors.white};
    }
    `;

    const HiddenTextDiv = styled.div`
    margin: auto;
    text-align: center;
    @media (max-width: 640px) {
    width: 100%;
    }
    `;

    const HiddenDiv = styled.div`
    display: none;
    border: 1px solid ${props => props.theme.colors.white};
    margin: auto;
    background-color: ${props => props.theme.colors.white};
    text-align: center;
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        width: 80%;
        border: 1px solid ${props => props.theme.colors.white};
    }
    ${HiddenTextDiv}:hover & {
        display: block;
    }
    `;

    const HiddenText = styled.p`
    color: ${props => props.theme.colors.black};
    text-align: center;
    position: absolute;
    margin: auto;
    background-color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        width: 80%;
        text-align: center;
        color: ${props => props.theme.colors.white};
    }
    `;


    return (

        <Wrapper>
            <Column>

                <BarWrapper><Bar1></Bar1></BarWrapper>
                <HiddenTextDiv>
                <Paragraph>B</Paragraph>
                    <HiddenDiv>
                        <HiddenText>Example Assignment</HiddenText>
                    </HiddenDiv>
                </HiddenTextDiv>
            </Column>
            <Column>
                <BarWrapper><Bar2></Bar2></BarWrapper>
                <Paragraph>D</Paragraph>
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
                <Paragraph>F</Paragraph>
            </Column>
            <Column>
                <BarWrapper><Bar6></Bar6></BarWrapper>
                <Paragraph>C</Paragraph>
            </Column>
            <Column>
                <BarWrapper><Bar7></Bar7></BarWrapper>
                <Paragraph>B</Paragraph>
            </Column>
        </Wrapper >

    );
}

export default Current;