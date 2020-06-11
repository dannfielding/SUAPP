//Modules
import React from "react";
import styled from "styled-components";

//Components
import Current from "../Components/AssignmentCurrent";
import Previous from "../Components/AssignmentPrevious";
import Bars from "../Components/Bars";

//Images
import AssignmentImage from "../Images/assignment_image.png";

const Wrapper = styled.div`
position: absolute;
z-index: -100;
right: 0;
@media (max-width: 640px) {
  margin-top: 0;
}
`;

const ViewTitle = styled.h1`
text-align: left;
padding-left: 30px;
background-color: ${props => props.theme.colors.red};
color: ${props => props.theme.colors.white};
@media (max-width: 640px) {
    width:100%;
    text-align: center;
    padding: 0;
    font-size: 30px;
}
`;

const ViewHeading = styled.h2`
text-align: left;
padding-left: 30px;
background-color: ${props => props.theme.colors.lightred};
color: ${props => props.theme.colors.white};
@media (max-width: 640px) {
    width:100%;
    text-align: center;
    padding: 0;
    font-size: 24px;
}
`;

const ViewSubHeading = styled.h3`
text-align: center;
background-color: ${props => props.theme.colors.lightred};
color: ${props => props.theme.colors.white};
@media (max-width: 640px) {
    width:100%;
    text-align: center;
    padding: 0;
}
`;

const ViewParagraph = styled.p`
text-align: center;
background-color: ${props => props.theme.colors.lightred};
color: ${props => props.theme.colors.white};
border-bottom: 1px solid black; 
@media (max-width: 640px) {
    width:100%;
    text-align: center;
    padding: 0;
}
`;

const MainImage = styled.img` 
width: 100%;
height: 400px;
display: block;
@media (max-width: 640px) {
  width:100%;
  padding: 0;
  height: 200px;
}
`;

const Footer = styled.div`
left: 0;
bottom: 0;
position: absolute;
height: 80px;
width: 100%;
clear: both;
background-color: red;
color: white;
text-align: center;
  background-color: ${props => props.theme.colors.red};
  @media (max-width: 640px) {
    text-align: center;
    margin-left: 0;
    margin-right: 0;
}
  
`;

const FooterText = styled.p`
  padding-top: 25px;
  color: ${props => props.theme.colors.white};
  @media (max-width: 640px) {
    padding: 0;
    margin-top: 15px;
    font-size: 10px;
    text-align: center;
}
`;




function Assignments() {
  return (
    <Wrapper>
      <MainImage src={AssignmentImage} />
      <ViewTitle>Assignments</ViewTitle>
      <ViewHeading>Current Assignments</ViewHeading>
      <Current />
      <ViewHeading>Grades and Feedback</ViewHeading>
      <Bars/>
      <ViewSubHeading>Grades</ViewSubHeading>
      <ViewParagraph>(For past the 7 assignments)</ViewParagraph>
      <ViewHeading>Previous Assignments</ViewHeading>
      <Previous />
    </Wrapper>
    <Wrapper</Wrapper>
  );
}

export default Assignments;