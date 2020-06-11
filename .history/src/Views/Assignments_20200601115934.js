//Modules
import React from "react";
import styled from "styled-components";

//Images
import AssignmentImage from "../Images/assignment_image.png";

const Wrapper = styled.div`
position: absolute;
left: 0;
z-index: -100;
right: 0;
@media (max-width: 640px) {
  margin-top: 100px;
}
`;

const MainImage = styled.img` 
width:100%;
display: block;
`;

function Assignments() {
  return (
    <Wrapper>
      <MainImage src={AssignmentImage} />
      <ViewTitle>Profile</ViewTitle>
    </Wrapper>
  );
}

export default Assignments;