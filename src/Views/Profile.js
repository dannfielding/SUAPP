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

    const Image = styled.img` 
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
    margin-top: 30px;
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

    return (
        <Wrapper>
            <ViewTitle>Profile</ViewTitle>
            <Image src={LogoSrc} />
            <ViewHeading>John Doe</ViewHeading>
            <ViewParagraph>Third Year - Computing Student</ViewParagraph>
            <ViewParagraph>1doej5@solent.ac.uk</ViewParagraph>
            <Line /> <br />
            <ViewHeading>Average Grade</ViewHeading>
            <ViewParagraph>Low B</ViewParagraph>
            <br/>
            <PreviousAssignments />
            <CurrentAssignments />
            <br/>

        </Wrapper>
    )
}

Profile.propTypes = {

}

export default Profile;