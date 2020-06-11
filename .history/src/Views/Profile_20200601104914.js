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

    const ViewHeading = styled.h3`
    text-align: center;
    color: ${props => props.theme.colors.black};
    `;

    const ViewParagraph = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.black};
    `;

    const ViewText = styled.img` 
    width: 300px;
    height: 300px;
    margin: 0 auto;
    display: block;
    @media (max-width: 640px) {
        width:150px;
        height: 150px;
    }
    `;

    const Line = styled.div`
    width: 60%;
    border: 1px solid;
    margin: 0 auto;
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



    const HiddenText = styled.p`
    color: ${props => props.theme.colors.black};
    text-align: center;
    width: 80%;
    margin: auto;
    background-color: ${props => props.theme.colors.white};
    align-items: center;
    @media (max-width: 640px) {
        width: 80%;
        text-align: center;
        color: ${props => props.theme.colors.black};
    }
    `;

    const HiddenTextHeading = styled.p`
    color: ${props => props.theme.colors.black};
    text-align: center;
    width: 80%;
    text-decoration: underline;
    margin: auto;
    background-color: ${props => props.theme.colors.white};
    align-items: center;
    @media (max-width: 640px) {
        width: 80%;
        text-align: center;
        color: ${props => props.theme.colors.black};
    }
    `;

    const ProfileImageDiv = styled.div`
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
    background-color: ${props => props.theme.colors.white};
    text-align: center;
    color: ${props => props.theme.colors.black};
    @media (max-width: 640px) {
        width: 80%;
        border: 1px solid ${props => props.theme.colors.white};
    }

    ${ProfileImageDiv}:hover & {
        display: block;
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
            <Footer>
                <FooterText>ask@solent.ac.uk | 023 8201 3000 | Solent University, East Park Terrace, Southampton, SO14 0YN</FooterText>
            </Footer>
        </Wrapper>
    )
}

Profile.propTypes = {

}

export default Profile;