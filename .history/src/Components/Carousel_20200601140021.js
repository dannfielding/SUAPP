//Modules
import React from "react";
import styled from "styled-components";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


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
            <Carousel infiniteLoop>
            <FirstImage src={MainImage} />
            <FirstImage src={MainImage} />
            <FirstImage src={MainImage} />
            </Carousel>
        </Wrapper>
    );
}

export default Movie;