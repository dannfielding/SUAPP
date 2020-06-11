//Modules
import React from 'react'
import styled from "styled-components";

//Components
import LoginForm from "../Components/LoginForm";

const Wrapper = styled.div`
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 700px;
    background-color: ${props => props.theme.colors.red};
    @media (max-width: 640px) {
        width:100%;
        margin-top: 0;
        height: 667px;
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