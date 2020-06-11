//Modules
import React from "react";
import styled from "styled-components";

//Components
import Lecturers from "../Components/Lecturers";
import OtherContacts from "../Components/OtherContacts";

//Images
import ContactImage from "../Images/contact_image.png";

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


const MainImage = styled.img` 
width: 100%;
height: 400px;
display: block;
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
      <LecturerWrapper>
      <ViewHeading>Lectures</ViewHeading>
        <Lecturers/>
        /LecturerWrapper></LecturerWrapper>
        <ViewHeading>Other Contacts</ViewHeading>
        <OtherContacts/>
    </Wrapper>
  );
}

export default Contact;