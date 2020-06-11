//Modules
import React from "react";
import styled from "styled-components";

//Components


//Images
import ContactImage from "../Images/contact_image.png";
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

const Footer = styled.div`
position: absolute;
left: 0;
bottom: 0;
height: 80px;
width: 100%;
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
            <Heading></Heading>
        </Section>
      </RightDiv>
    </Wrapper>
  );
}

export default Contact;