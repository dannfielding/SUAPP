//Modules
import React from "react";
import styled from "styled-components";

function Current() {

    const Wrapper = styled.div`
    width: 100%;
    text-align: left;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:80%;
    }
  `;

    const Bar = styled.div
    
    `;



    return (

        <Wrapper>
            <Bar></Bar>
        </Wrapper>
    );
}

export default Current;