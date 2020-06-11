//Modules
import React from 'react';
import styled from "styled-components";

function Feedback() {

    const ViewTitle = styled.h2`
        text-align: center;
        z-index: 1;
        color: ${props => props.theme.colors.white};
        @media (max-width: 640px) {
            width:100%;
            color: ${props => props.theme.colors.black};
        }
    `;

    const Wrapper = styled.div`
        position: absolute;
        left: 0;
        z-index: -100;
        background-color: ${props => props.theme.colors.white};
        right: 0;
        @media (max-width: 640px) {
            width:100%;
        }
    `;

    const Container = styled.div`
        width: 70%;
        background-color: ${props => props.theme.colors.lightred};
        margin: auto;
    @media (max-width: 640px) {
        width:100%;
        margin-top: 100px;
        background-color: ${props => props.theme.colors.white};
    }
`;

    return (
        <Wrapper>
            <Container>
            <ViewTitle>Grades and Feedback</ViewTitle>
            <Assignment1/>
            <br/>
            <Assignment2/>
            <br/>
            <Assignment3/>
            </Container>
            </Wrapper>

    )
}

export default Feedback;