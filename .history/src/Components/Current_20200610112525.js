//Modules
import React from "react";
import styled from "styled-components";
import { Accordion, AccordionItem } from 'react-sanfona';

function Current() {

    const Wrapper = styled.div`
    width: 100%;
    text-align: left;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:100%;
    }
  `;

  const Ac

  var accordions = document.querySelectorAll("button.accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}

    return (
        <Wrapper>
        <Accordion>
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <AccordionItem title={`Item ${item}`} expanded={item === 1}>
              <div>
                Hello
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  }
        </Wrapper>
    );
}


export default Current;