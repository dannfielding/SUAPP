//Modules
import React from "react";
import styled from "styled-components";

//Images
import UniMap from "../Images/map.png";

function Map() {

    const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:80%;
    }
  `;

  const MapImage = styled.img` 
width: 100%;
padding-top: 5px;
padding-bottom: 5px;
margin-right: auto;
margin-left: auto;
display: block;
`;

    return (

        <Wrapper>
      <MapImage src={UniMap} />
        </Wrapper>
    );
}

export default Map;