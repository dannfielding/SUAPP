//Modules
import React from 'react';
import styled from "styled-components";

function Error() {

  const ErrorText = styled.h1`
  color: ${props => props.theme.colors.black};
  text-align: center;
  border: 1px solid;
  float: right;
  margin-top: 100px;
  @media (max-width: 640px) {
    font-size: 30px;
    margin-top: 100px;
    text-align: center;
}
  `;

 return (

  <ErrorText>404 Error - This page doesn't exist.</ErrorText>

 );
}

export default Error;