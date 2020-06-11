//Modules
import React from "react";
import styled from "styled-components";

//Images
import AssignmentImage from "../Images/grade_image.jpg";


function Assignment3() {

    const Wrapper = styled.div`
    width: 80%;
    height: 400px;
    margin: auto;
    text-align: center;
    @media (max-width: 640px) {
        width:80%;
        text-align: center;
        height: 550px;
    }
  `;

    const ComponentHeading = styled.h3`
    text-align: center;
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
        font-size: 20px;
        text-align: center;
        color: ${props => props.theme.colors.black};
    }
    `;

    const ComponentParagraph = styled.p`
    text-align: center;
    margin: auto;
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
    font-size: 14px;
    text-align: center;
        width: 100%;
        color: ${props => props.theme.colors.black};
    }
    `;

    const ViewText = styled.p`
    color: ${props => props.theme.colors.white};
    text-align: center;
    border: 1px solid ${props => props.theme.colors.white};
    margin: auto;
    background-color: ${props => props.theme.colors.red};
    @media (max-width: 640px) {
        width: 80%;
        color: ${props => props.theme.colors.white};
        border: 1px solid ${props => props.theme.colors.black};
    }
    `;

    const HiddenText = styled.p`
    color: ${props => props.theme.colors.white};
    text-align: center;
    width: 80%;
    margin: auto;
    background-color: ${props => props.theme.colors.lightred};
    align-items: center;
    @media (max-width: 640px) {
        width: 80%;
        text-align: center;
        color: ${props => props.theme.colors.white};
    }
    `;

    const HiddenTextDiv = styled.div`
    width: 30%;
    margin: auto;
    @media (max-width: 640px) {
    width: 100%;
    }
    `;

    const HiddenDiv = styled.div`
    display: none;
    border: 1px solid ${props => props.theme.colors.white};
    width: 100%;
    margin: auto;
    position: relative;
    background-color: ${props => props.theme.colors.lightred};
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

    const ImageStyling = styled.img` 
    width: 60%;
    border-radius: 20px;
    `;

    return (

        <Wrapper>
            <ImageStyling src={AssignmentImage} /> {/* Logo Image. */}
            <ComponentHeading>Musical Computing - Assignment 2</ComponentHeading>
            <ComponentParagraph>This assignment was handed in on the 10th of December 2018.</ComponentParagraph>
            <ComponentParagraph>Grade and feedback were released 1st of January 2019.</ComponentParagraph>
            <HiddenTextDiv>
                <ViewText>View Grade and Feedback</ViewText>
                <HiddenDiv>
                    <HiddenText>Grade: A</HiddenText>
                    <HiddenText>Feedback:</HiddenText>
                    <HiddenText>You met all the required critera to achieve an A grade well done, your work was enjoyable to read.</HiddenText>
                </HiddenDiv>
            </HiddenTextDiv>
        </Wrapper>
    );
}

export default Assignment3;