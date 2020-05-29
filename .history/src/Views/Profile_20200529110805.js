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
        color: ${props => props.theme.colors.white};
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
        color: ${props => props.theme.colors.white};
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
            <ViewTitle>Profile</ViewTitle>
            <ProfileImageDiv>
                <ViewText src={LogoSrc} />
                <ViewHeading>John Doe</ViewHeading>
                <HiddenDiv>
                    <HiddenTextHeading>University Information</HiddenTextHeading>
                    <HiddenText>Third Year - Computing Student</HiddenText>
                    <HiddenText>1doej5@solent.ac.uk</HiddenText>
                    <HiddenTextHeading>Term Address</HiddenTextHeading>
                    <HiddenText>1 Trello Drive</HiddenText>
                    <HiddenText>Locksbridge</HiddenText>
                    <HiddenText>LO16 0QU</HiddenText>
                </HiddenDiv>
            </ProfileImageDiv>
            <Line /><br />
            <ViewHeading>Average Grade</ViewHeading>
            <ViewParagraph>Low B</ViewParagraph>
            <br />
            <PreviousAssignments />
            <CurrentAssignments />
            <br />
        </Wrapper>
    )
}

Profile.propTypes = {

}

export default Profile;