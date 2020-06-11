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