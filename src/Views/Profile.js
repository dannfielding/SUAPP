//Modules
import React from 'react'
import styled from "styled-components";

//Components
import Current from "../Components/ProfileCurrent";
import Previous from "../Components/ProfilePrevious";

//Images
import ProfilePicture from "../Images/profile_picture.png";

function Profile(props) {

    const Wrapper = styled.div`
    position: absolute;
    left: 0;
    z-index: -100;
    right: 0;
    @media (max-width: 640px) {
        margin-top: 100px;
        padding: 0;
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

    const LeftWrapper = styled.div`
        height: 350px; 
        width: 50%;
        float: left;
        background-color: white;
        @media (max-width: 640px) {
            width: 100%;
            height: 150px;
        }
    `;

    const ProfileImage = styled.img` 
    width: 250px;
    height: 250px;
    margin-top: 150px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 640px) {
        width: 150px;
        height: 150px;
        margin-top: 0;
    }
    `;

    const RightDiv = styled.div`
    background-color: white;
    margin-top: 180px;
    width: 100%;
    height: 350px;
    @media (max-width: 640px) {
        marign-top: 0;
        height: 220px;
    }
    `;


    const RightHeading = styled.h3`
    text-align: center;
    color: ${props => props.theme.colors.black};
    @media (max-width: 640px) {
        width:100%;
        text-align: center;
    }
    `;

    const RightParagraph = styled.p`
        text-align: center;
        color: black;
    `;

    const Seperator = styled.hr`
        border: 1px solid black;
        width: 40%;
        margin-left: auto;
        margin-right: auto;
    `;


    const Footer = styled.div`
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
        font-size: 10px;
        text-align: center;
    }
    `;




    return (
        <Wrapper>
            <LeftWrapper>
                <ProfileImage src={ProfilePicture} />
            </LeftWrapper>
                <RightDiv>
                <RightHeading>John Doe</RightHeading>
                <RightParagraph>Third Year - Computing</RightParagraph>
                <RightParagraph>1jdoe05@solent.ac.uk</RightParagraph>
                <Seperator/>
                <RightHeading>Average Grade</RightHeading>
                <RightParagraph>B</RightParagraph>
                </RightDiv>
            <ViewTitle>Profile</ViewTitle>
            <ViewHeading>Current Assignments</ViewHeading>
            <Current/>
            <ViewHeading>Previous Assignments</ViewHeading>
            <Previous/>
            <Footer>
                <FooterText>ask@solent.ac.uk | 023 8201 3000 | Solent University, East Park Terrace, Southampton, SO14 0YN</FooterText>
            </Footer>
        </Wrapper>
    )
}

Profile.propTypes = {

}

export default Profile;