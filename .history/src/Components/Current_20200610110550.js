//Modules
import React from "react";
import styled from "styled-components";

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
<div class="text_container">
	<h3>This is a third title...</h3>
	<div>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, eros id adipiscing congue, lorem ante sagittis elit, id malesuada nibh est sed orci</p>
	</div>
</div>
        </Wrapper>
    );
}

export default Current;