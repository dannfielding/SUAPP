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
        width:100%;
    }
  `;

  const MapImage = styled.img` 
width: 100%;
margin-right: auto;
margin-left: auto;
height: 1400px;
display: block;
@media (max-width: 640px) {
  width:100%;
  height: 200px;
}
`;

    return (

        <Wrapper>
      <MapImage src={UniMap} />
        </Wrapper>
    );
}

export default Map;