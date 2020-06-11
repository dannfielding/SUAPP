//Modules
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Logo from "../Images/logo.png";


const FormDiv = styled.div`
    width: 100%;
`;

const FormLabel = styled.label`
    color: ${props => props.theme.colors.white};
    float: left;
    margin-left: 22px;
    text-align: left;
    font-size: 20px;
    font-family: 'Merriweather Sans',
    @media (max-width: 640px) {
        margin-right: 280px;
    }

`;

const FormInput = styled.input`
    width: 90%;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.black};
    @media (max-width: 640px) {
        width:80%;
    }
`;

const FormImage = styled.img` 
padding-top: 50px;
width: 200px;
height: 240px;
display: block;
margin: 0 auto;
@media (max-width: 640px) {
    width:50%;
    margin-bottom: 20px;
}
`;

const FormSubmit = styled.input` 
    width: 40%;
    height: 40px;
    margin-top: 40px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    border: 1px solid ${props => props.theme.colors.white};
    text-align: center;
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    background-color: ${props => props.theme.colors.lightred};
    @media (max-width: 640px) {
        width: 60%;
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
            <FormLabel> Name: </FormLabel>
            <FormInput type="text"/>
            <FormLabel> Email: </FormLabel>
            <FormInput type="text" />
            <FormSubmit type="submit" onClick={onLogin} />
        </FormDiv>);
}

export default LoginForm;