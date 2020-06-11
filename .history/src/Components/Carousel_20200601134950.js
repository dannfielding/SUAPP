//Modules
import React from "react";
import styled from "styled-components";
import Carousel from 'react-elastic-carousel'

//Images
import MainImage from "../Images/dash_image1.jpg";

function Movie() {

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
            <Carousel items
            <FirstImage src={MainImage} />
        </Wrapper>
    );
}

export default Movie;