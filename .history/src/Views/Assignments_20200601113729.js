//Modules
import React from "react";
import styled from "styled-components";



const Wrapper = styled.div`
position: absolute;
left: 0;
z-index: -100;
right: 0;
@media (max-width: 640px) {
  margin-top: 100px;
}
`;

const FirstImage = styled.img` 
width: 100%;
display: block;
`;

function Assignments() {
  return (
    <Wrapper>


    </Wrapper>
  );
}

export default Assignments;