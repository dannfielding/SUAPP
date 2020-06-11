//Modules
import React from "react";
import styled from "styled-components";

//Images
import AssignmentImage from "../Images/assignment_image.jpg";

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
max-height:600px;;
display: flex;
object-fit: contain;
`;

function Assignments() {
  return (
    <Wrapper>
            <MainImage src={AssignmentImage} />

    </Wrapper>
  );
}

export default Assignments;