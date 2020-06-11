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

  var accordions = document.querySelectorAll("button.accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

function closeAll() {
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("active");
    accordions[i].nextElementSibling.classList.remove("show");
  }
}


    return (

        <Wrapper>
<button class="accordion">
  Title
</button>
<div class="panel">
  Content sahfjgjhg fdj sgsjd 
  dfjg jd j dfj gdjfgd
</div>
        </Wrapper>
    );
}


export default Current;