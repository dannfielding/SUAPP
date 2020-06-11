//Modules
import React from "react";
import styled from "styled-components";


//Images
import MainImage from "../Images/dash_image1.jpg";

function Movie() {

    const Wrapper = styled.div`
    width: 100%;
    height: 400px;
    @media (max-width: 640px) {
        width:100%;
    }
  `;

  const FirstImage = styled.img` 
  width: 100%;
  height: 400px;
  display: block;
  @media (max-width: 640px) {
    width:100%;
    padding: 0;
    height: 200px;
    text-align: center;
}
  `;



    return (

        <Wrapper>
            <FirstImage src={MainImage} />
        </Wrapper>
    );
}

export default Movie;