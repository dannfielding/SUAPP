//Modules
import React from "react";
import styled from "styled-components";
import { Accordion, AccordionItem } from 'react-sanfona';

function Current() {

    const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:100%;
    }
  `;

    return (
        <Wrapper>
        <Accordion>
        {[1, 2, 3].map(item => {
          return (
            <AccordionItem title={` SWD500 - AE${item}`} expanded={item === 1}>
              <div>
                Hello
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>

        </Wrapper>
    );
}


export default Current;