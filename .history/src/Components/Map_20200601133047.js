//Modules
import React from "react";
import styled from "styled-components";

//Images
import Map from "../Images/map.png";

function Map() {

    const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:80%;
    }
  `;

    return (

        <Wrapper>
      <UniversityImage src={Map} />
        </Wrapper>
    );
}

export default Map;