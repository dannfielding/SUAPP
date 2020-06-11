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
<button type="button" class="collapsible">Open Collapsible</button>
<div class="collap">
  <p>Lorem ipsum...</p>
</div>
        </Wrapper>
    );
}

export default Current;