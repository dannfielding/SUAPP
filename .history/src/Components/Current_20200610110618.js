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