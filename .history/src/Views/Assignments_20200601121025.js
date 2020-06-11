//Modules
import React from "react";
import styled from "styled-components";

//Components
import Current from "../Components/Current";

//Images
import AssignmentImage from "../Images/assignment_image.png";

const Wrapper = styled.div`
position: absolute;
left: 0;
z-index: -100;
right: 0;
@media (max-width: 640px) {
  margin-top: 100px;
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
}
`;

const ViewSubHeading = styled.h3`
text-align: center;
padding-left: 30px;
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
padding-left: 30px;
background-color: ${props => props.theme.colors.lightred};
color: ${props => props.theme.colors.white};
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
`;

const Grades = styled.div`
width: 100%;
height: 300px;
`;

function Assignments() {
  return (
    <Wrapper>
      <MainImage src={AssignmentImage} />
      <ViewTitle>Assignments</ViewTitle>
      <ViewHeading>Current Assignments</ViewHeading>
      <Current/>
      <ViewHeading>Grades and Feedback</ViewHeading>
      <Grades></Grades>
      <ViewSubHeading>Grades</ViewSubHeading>
      <ViewParagraph>(For past the 7 assignments)</ViewParagraph>
    </Wrapper>
  );
}

export default Assignments;