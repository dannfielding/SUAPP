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

function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }


    return (

        <Wrapper>
<button onclick="myFunction('Demo1')" class="w3-btn w3-block w3-black w3-left-align">Open Section 1</button>
<div id="Demo1" class="w3-container w3-hide">
  <h4>Section 1</h4>
  <p>Some text..</p>
</div>
        </Wrapper>
    );
}

export default Current;