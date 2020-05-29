//Modules
import React from "react";
import styled from "styled-components";

//Components
import Assignment1 from "../Components/Assignment1";
import Assignment2 from "../Components/Assignment3";


const ViewHeading = styled.h2`
text-align: center;
color: ${props => props.theme.colors.black};
`;

const ViewSubHeading = styled.h3`
text-align: center;
color: ${props => props.theme.colors.black};
@media (max-width: 640px) {
  font-size: 20px;
}
`;

const Wrapper = styled.div`
position: absolute;
left: 0;
z-index: -100;
right: 0;
@media (max-width: 640px) {
  margin-top: 100px;
}
`;

function Assignments() {
  return (
    <Wrapper>
      <ViewHeading>Assignments</ViewHeading>
      <ViewSubHeading>Current Assignments</ViewSubHeading>
      <Assignment1 />
      <Assignment2 />
    </Wrapper>
  );
}

export default Assignments;