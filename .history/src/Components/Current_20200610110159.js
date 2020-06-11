//Modules
import React from "react";
import styled from "styled-components";

function Current() {

    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

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