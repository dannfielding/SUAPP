//Modules
import React from "react";
import styled from "styled-components";

//Images
import University from "../Images/lecturer1.jpg";
import Librarian from "../Images/lib.png";

const Wrapper = styled.div`
position: absolute;
width: 100%;
z-index: -100;
right: 0;
@media (max-width: 640px) {
  margin-top: 100px;
}
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


function OtherContacts() {
  return (
    <Wrapper>
      <LeftDiv>
      <UniversityImage src={University} />
      <LibrarianImage src={Librarian} />
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
      </RightDiv>
    </Wrapper>
  );
}

export default OtherContacts;