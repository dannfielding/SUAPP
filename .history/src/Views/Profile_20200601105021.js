//Modules
import React from 'react'
import styled from "styled-components";

//Components
import CurrentAssignments from "../Components/CurrentAssignments";
import PreviousAssignments from "../Components/PreviousAssignments";

//Images
import LogoSrc from "../Images/profile_picture.png";

function Profile(props) {

    const ViewTitle = styled.h2`
        text-align: center;
        color: ${props => props.theme.colors.black};
    `;




    const Wrapper = styled.div`
    position: absolute;
    left: 0;
    padding-bottom: 50px;
    z-index: -100;
    right: 0;
    @media (max-width: 640px) {
        margin-top: 100px;
    }
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

    return (
        <Wrapper>
            <LeftDiv>
            <LeftHeading>Welcome Username</LeftHeading>
            <LeftSubHeading>We hope you’re having a good day!</LeftSubHeading>
            <SecondImage src={SectionImage} />
            </LeftDiv>
            <RightDiv>
            <RightHeading>Upcoming Events</RightHeading>
            <Events/>
            </RightDiv>
            <ViewTitle>Profile</ViewTitle>
            <Footer>
                <FooterText>ask@solent.ac.uk | 023 8201 3000 | Solent University, East Park Terrace, Southampton, SO14 0YN</FooterText>
            </Footer>
        </Wrapper>
    )
}

Profile.propTypes = {

}

export default Profile;