//Modules
import React from "react";
import styled from "styled-components";

//Images
import MainImage from "../Images/dash_image1.jpg";

function Carousel() {

    const Wrapper = styled.div`
    width: 100%;
    text-align: left;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:80%;
    }
  `;

  const FirstImage = styled.img` 
  width: 100%;
  height: 400px;
  display: block;
  `;



    return (

        <Wrapper>
            <FirstImage src={MainImage} />
        </Wrapper>
    );
}

export default Carousel;