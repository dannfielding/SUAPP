//Modules
import React from "react";
import styled from "styled-components";

function Current() {

    const Wrapper = styled.div`
    width: 100%;
    text-align: left;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:100%;
    }
  `;
  

const Collapsible = styled.button`
background-color: #777;
color: white;
cursor: pointer;
padding: 18px;
width: 100%;
border: none;
text-align: left;
outline: none;
font-size: 15px;
`;

const Content = styled.div`
padding: 0 18px;
display: none;
overflow: hidden;
background-color: #f1f1f1;
`;

  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


    return (

        <Wrapper>

<Collapsible class="collapsible">Open Section 1</Collapsible>
<Content>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</Content>

        </Wrapper>
    );
}

export default Current;