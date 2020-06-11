//Modules
import React from "react";
import styled from "styled-components";

function Current() {

    const Wrapper = styled.div`
    width: 100%;
    margin-top: 80px;
    text-align: left;
    @media (max-width: 640px) {
        margin-top: 0;
    }
  `;

    const Bar1 = styled.div`
  height: 140px;
  width: 60px;
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${props => props.theme.colors.lightred};
  @media (max-width: 640px) {
    width:30px;
}
  `;

    const Bar2 = styled.div`
    height: 80px;
    width: 60px;
    margin-top: 100px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    @media (max-width: 640px) {
        width:30px;
    }
    `;

    const Bar3 = styled.div`
    height: 180px;
    width: 60px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    @media (max-width: 640px) {
        width:30px;
    }
    `;

    const Bar4 = styled.div`
    height: 180px;
    width: 60px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    @media (max-width: 640px) {
        width:30px;
    }
    `;

    const Bar5 = styled.div`
    height: 0px;
    width: 60px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    @media (max-width: 640px) {
        width:30px;
    }
    `;

    const Bar6 = styled.div`
    height: 100px;
    width: 60px;
    margin-top: 80px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
    @media (max-width: 640px) {
        width:30px;
    }
    `;

    const Bar7 = styled.div`
    height: 140px;
    width: 60px;
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    background-color: ${props => props.theme.colors.lightred};
      @media (max-width: 640px) {
    width:30px;
}
    `;

    const BarWrapper = styled.div`
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    height: 180px;
    width: 60px;
    border: 1px solid;
    @media (max-width: 640px) {
        width:30px;
    }
    `;

    const Column = styled.div`
    width: 14.2857143%;
    margin-right: auto;
    margin-left: auto;
    height: 350px;
    display: inline-block;
    @media (max-width: 640px) {
        height: 200px;
        width: 14%;
    }
    `;


    const Paragraph = styled.p`
    color: ${props => props.theme.colors.black};
    text-align: center;  
    @media (max-width: 640px) {
        width: 50%;
    }
    `;

    const HiddenTextDiv = styled.div`
    width: 100px;
    margin: auto;
    @media (max-width: 640px) {
        width: 12%;
    }
    `;

    const HiddenDiv = styled.div`
    display: none;
    position: absolute;
    border: 1px solid ${props => props.theme.colors.black};
    width: 500px;
    margin-left: -250px;
    left: 50%;
    background-color: ${props => props.theme.colors.lightred};
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        width: 10%;
        border: 1px solid ${props => props.theme.colors.white};
    }
    ${HiddenTextDiv}:hover & {
        display: block;
    }
    `;

    const HiddenText = styled.h3`
    color: ${props => props.theme.colors.white};
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    background-color: ${props => props.theme.colors.lightred};
    @media (max-width: 640px) {
        width: 80%;
        text-align: center;
        color: ${props => props.theme.colors.white};
    }
    `;

    const HiddenTextP = styled.p`
    color: ${props => props.theme.colors.white};
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    background-color: ${props => props.theme.colors.lightred};
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
                        <HiddenTextP>You recieved a B grade on this assignment with a percentage of 67%.</HiddenTextP>
                    </HiddenDiv>
                </HiddenTextDiv>
            </Column>
            <Column>
                <BarWrapper><Bar2></Bar2></BarWrapper>
                <HiddenTextDiv>
                <Paragraph>D</Paragraph>
                    <HiddenDiv>
                        <HiddenText>Example Assignment</HiddenText>
                        <HiddenTextP>You recieved a D grade on this assignment with a percentage of 39%.</HiddenTextP>
                    </HiddenDiv>
                </HiddenTextDiv>
            </Column>
            <Column>
                <BarWrapper><Bar3></Bar3></BarWrapper>
                <HiddenTextDiv>
                <Paragraph>C</Paragraph>
                    <HiddenDiv>
                        <HiddenText>Example Assignment</HiddenText>
                        <HiddenTextP>You recieved a C grade on this assignment with a percentage of 45%.</HiddenTextP>
                    </HiddenDiv>
                </HiddenTextDiv>
            </Column>
            <Column>
                <BarWrapper><Bar4></Bar4></BarWrapper>
                <HiddenTextDiv>
                <Paragraph>A</Paragraph>
                    <HiddenDiv>
                        <HiddenText>Example Assignment</HiddenText>
                        <HiddenTextP>You recieved a A grade on this assignment with a percentage of 80%.</HiddenTextP>
                    </HiddenDiv>
                </HiddenTextDiv>
            </Column>
            <Column>
                <BarWrapper><Bar5></Bar5></BarWrapper>
                <HiddenTextDiv>
                <Paragraph>F</Paragraph>
                    <HiddenDiv>
                        <HiddenText>Example Assignment</HiddenText>
                        <HiddenTextP>You recieved a F grade on this assignment with a percentage of 11%.</HiddenTextP>
                    </HiddenDiv>
                </HiddenTextDiv>
            </Column>
            <Column>
                <BarWrapper><Bar6></Bar6></BarWrapper>
                <HiddenTextDiv>
                <Paragraph>C</Paragraph>
                    <HiddenDiv>
                        <HiddenText>Example Assignment</HiddenText>
                        <HiddenTextP>You recieved a C grade on this assignment with a percentage of 50%.</HiddenTextP>
                    </HiddenDiv>
                </HiddenTextDiv>
            </Column>
            <Column>
                <BarWrapper><Bar7></Bar7></BarWrapper>
                <HiddenTextDiv>
                <Paragraph>B</Paragraph>
                    <HiddenDiv>
                        <HiddenText>Example Assignment</HiddenText>
                        <HiddenTextP>You recieved a B grade on this assignment with a percentage of 64%.</HiddenTextP>
                    </HiddenDiv>
                </HiddenTextDiv>
            </Column>
        </Wrapper >

    );
}

export default Current;