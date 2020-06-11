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