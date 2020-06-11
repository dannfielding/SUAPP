//Modules
import React from "react";
import styled from "styled-components";

//Components


//Images
import Lecturer1 from "../Images/lecturer1.jpg";
import Lecturer2 from "../Images/lecturer2.png";
import Lecturer3 from "../Images/lecturer3.png";

const Wrapper = styled.div`
position: absolute;
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


const MainImage = styled.img` 
width: 100%;
height: 400px;
display: block;
`;

const LeftDiv = styled.div`
height: 600px; 
width: 20%;
float: left;
background-color: white;
`;

const LecturerImage = styled.img` 
width: 250px;
height: 250px;
padding-top: 5px;
padding-bottom: 5px;
margin-right: auto;
margin-left: auto;
display: block;
`;

const RightDiv = styled.div`
height: 780px; 
width: 80%;
float: right;
background-color: ${props => props.theme.colors.red};
`;

const Section = styled.div`
    width: 100%;
    height: 260px;
    background-color: white;
`;

const SectionHeading = styled.h4`
    color: black;
    text-align: left;
`;

const SectionParagraph = styled.p`
    color: black;
    text-align: left;
`;


function Contact() {
  return (
    <Wrapper>
      <MainImage src={ContactImage} />
      <ViewTitle>Contact Information</ViewTitle>
      <ViewHeading>Lectures</ViewHeading>
      <LeftDiv>
      <LecturerImage src={Lecturer1} />
      <LecturerImage src={Lecturer2} />
      <LecturerImage src={Lecturer3} />
      </LeftDiv>
      <RightDiv>
        <Section>
            <SectionHeading>Lecturer Name</SectionHeading>
            <SectionParagraph>Example@solent.ac.uk</SectionParagraph>
            <SectionParagraph>070000000</SectionParagraph>
            <SectionHeading>Unit they teach you:</SectionHeading>
            <SectionParagraph>Example Unit</SectionParagraph>
            <SectionParagraph>Example Unit</SectionParagraph>
            <SectionParagraph>Example Unit</SectionParagraph>
        </Section>
        <Section>
            <SectionHeading>Lecturer Name</SectionHeading>
            <SectionParagraph>Example@solent.ac.uk</SectionParagraph>
            <SectionParagraph>070000000</SectionParagraph>
            <SectionHeading>Unit they teach you:</SectionHeading>
            <SectionParagraph>Example Unit</SectionParagraph>
            <SectionParagraph>Example Unit</SectionParagraph>
            <SectionParagraph>Example Unit</SectionParagraph>
        </Section>
        <Section>
            <SectionHeading>Lecturer Name</SectionHeading>
            <SectionParagraph>Example@solent.ac.uk</SectionParagraph>
            <SectionParagraph>070000000</SectionParagraph>
            <SectionHeading>Unit they teach you:</SectionHeading>
            <SectionParagraph>Example Unit</SectionParagraph>
            <SectionParagraph>Example Unit</SectionParagraph>
            <SectionParagraph>Example Unit</SectionParagraph>
        </Section>
      </RightDiv>
    </Wrapper>
  );
}

export default Lecturers;