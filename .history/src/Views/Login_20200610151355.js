//Modules
import React from 'react'
import styled from "styled-components";

//Components
import LoginForm from "../Components/LoginForm";

const Wrapper = styled.div`
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    width: 30%;
    height: 680px;
    background-color: ${props => props.theme.colors.red};
    @media (max-width: 640px) {
        width: 100%;
        height: 1000p;
    }
`;

function Login() {



    return (
        <div>
            <Wrapper>
            <LoginForm/>
            </Wrapper>
        </div>
    )
}

export default Login;