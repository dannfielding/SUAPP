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

    const ProgressBar = styled.div`
    width: 80%;
    margin: auto;
    height: 20px;
    border: 1px solid;
    background-color: red;
  `;

    const AssignmentHeading = styled.h4`
    color: black;
    text-align: left;
  `;

    const AssignmentParagraph = styled.p`
    color: black;
    text-align: left;
  `;

    const AccordionGrey = styled.div`
        background-color: #FFF2F2;
        height: 100PX;
    `;

    const AccordionWhite = styled.div`
    background-color: #FFFFF;
`;


    return (
        <Wrapper>
            <AccordionGrey>
                <Accordion>
                    {[1].map(item => {
                        return (
                            <AccordionItem title={` SWD500 - AE${item}`}>
                                    <AssignmentHeading>SWD500</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                    <ProgressBar></ProgressBar>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </AccordionGrey>
            <AccordionWhite>
            <Accordion>
                {[2].map(item => {
                    return (
                        <AccordionItem title={` SWD500 - AE${item}`}>
                            <div>
                                <AssignmentHeading>SWD500</AssignmentHeading>
                                <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                <ProgressBar></ProgressBar>
                            </div>
                        </AccordionItem>
                    );
                })}
            </Accordion>
          </AccordionWhite>
            <AccordionGrey>
            <Accordion>
                {[1].map(item => {
                    return (
                        <AccordionItem title={` CDA600 - AE${item}`}>
                            <div>
                                <AssignmentHeading>SWD500</AssignmentHeading>
                                <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                <ProgressBar></ProgressBar>
                            </div>
                        </AccordionItem>
                    );
                })}
            </Accordion>
            </AccordionGrey>

        </Wrapper>
    );
}


export default Current;