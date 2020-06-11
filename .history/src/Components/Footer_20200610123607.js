//Modules
import React from "react";
import styled from "styled-components";

function Footer() {

  const Footer = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  height: 80px;
    background-color: ${props => props.theme.colors.red};
    @media (max-width: 640px) {
      text-align: center;
      margin-left: 0;
      margin-right: 0;
  }
    
  `;

  const FooterText = styled.p`
    padding-top: 15px;
    color: ${props => props.theme.colors.white};
    @media (max-width: 640px) {
      padding: 0;
      margin-top: 15px;
      font-size: 10px;
      text-align: center;
  }
  `;

  return (

    <Footer><FooterText>ask@solent.ac.uk | 023 8201 3000 | Solent University, East Park Terrace, Southampton, SO14 0YN</FooterText></Footer>

  );
}

export default Footer;