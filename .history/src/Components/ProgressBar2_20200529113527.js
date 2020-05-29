//Modules
import React from "react";
import styled from "styled-components";


function ProgressBar2() {

    const BarWrapper = styled.div`
    width: 100%;
    margin-top: 100px;
    background-color: ${props => props.theme.colors.grey};
    height: 30px;
    border-radius: 10px;
    border: 1px solid;
    text-align: left;
    float: left;
  `;

    const Bar = styled.div`
    width: 100%;
    height: 30px;
    border-radius: 10px;
    background-color: ${props => props.theme.colors.lightred};
    `;

    const BarText = styled.p`
    color: ${props => props.theme.colors.white};
    text-align: center;
    background-color: ${props => props.theme.colors.lightred};
    align-items: center;
    `;

    const BarHeadingText = styled.p`
    color: ${props => props.theme.colors.white};
    text-align: center;
    text-decoration: underline;
    background-color: ${props => props.theme.colors.lightred};
    align-items: center;
    `;

    const BarTextDiv = styled.div`
    color: ${props => props.theme.colors.white};
    border-radius: 10px;
     text-align: center;
    `;

    const BarDiv = styled.div`
    display: none;
    position: fixed;
    border: 1px solid ${props => props.theme.colors.black};;
    width: 310px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.white};
    text-align: center;
    color: white;

    ${BarTextDiv}:hover & {
        display: block;
    }
    `;

    return (

        <BarWrapper>
            <Bar>
                <BarTextDiv>View More
                <BarDiv>
                        <BarText>100% of Assignment Completed.</BarText>
                        <BarHeadingText>Tasks Left</BarHeadingText>
                        <BarText>None</BarText>
                    </BarDiv>
                </BarTextDiv>
            </Bar>
        </BarWrapper>
    );
}

export default ProgressBar2;