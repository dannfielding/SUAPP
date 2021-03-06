//Modules
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Logo from "../Images/logo.png";


const FormDiv = styled.div`
    width: 100%;
    @media (max-width: 640px) {
        width:100%;

    }
`;

const FormImage = styled.img` 
padding-top: 50px;
width: 200px;
height: 240px;
display: block;
margin: 0 auto;
@media (max-width: 640px) {
}
`;

const FormHeading = styled.h2`
    color: ${props => props.theme.colors.white};
    font-family: 'Merriweather Sans';
`;


const FormLabel = styled.label`
    color: ${props => props.theme.colors.white};
    float: left;
    margin-left: 22px;
    text-align: left;
    font-size: 20px;
    font-family: 'Merriweather Sans';
    @media (max-width: 640px) {
        margin: 0;
        width: 30%;
        text-align: center;
    }

`;

const FormInput = styled.input`
    width: 90%;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.black};
    @media (max-width: 640px) {
        width:80%;
        margin: 0;
    }
`;
const FormSubmit = styled.input` 
    width: 40%;
    height: 50px;
    margin-top: 40px;
    font-size: 18px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    border: 0;
    text-align: center;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    background-color: ${props => props.theme.colors.lightred};
    @media (max-width: 640px) {
        width: 60%;
        margin: 0;
        margin-top: 20px;
    }
`;

function LoginForm() {

    const history = useHistory();

    const onLogin = () => {
        let path = `dashboard`;
        history.push(path);
    }

    return (
        <FormDiv>
            <FormImage src={Logo} /> {/* Form Image. */}
            <FormHeading>Login</FormHeading>
            <FormLabel> Name: </FormLabel>
            <FormInput type="text"/>
            <FormLabel> Email: </FormLabel>
            <FormInput type="text" />
            <FormSubmit type="submit" onClick={onLogin} />
        </FormDiv>);
}

export default LoginForm;