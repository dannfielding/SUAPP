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

    const InnerBar = styled.div`
    width: 50%;
    margin: auto;
    float: left;
    height: 40px;
    border-radius: 10px;
    background-color: red;
  `;

    const OuterBar = styled.div`
    width: 80%;
    margin: auto;
    height: 40px;
    border: 1px solid;
    border-radius: 10px;
    background-color: grey;
    `;

    const AssignmentHeading = styled.h4`
    color: ${props => props.theme.colors.red};
    text-align: left;
  `;

    const AssignmentParagraph = styled.p`
    color: black;
    text-align: left;
    margin-left: 20px;
    width: 90%;
  `;

    const AccordionGrey = styled.div`
        background-color: #FFF2F2;
    `;

    const AccordionWhite = styled.div`
    background-color: ${props => props.theme.colors.white};
`;


    return (
        <Wrapper>
            <AccordionGrey>
                <Accordion>
                    {[1].map(item => {
                        return (
                            <AccordionItem title={` SWD500 - AE${item}`}>
                                    <AssignmentHeading>SWD500</AssignmentHeading>
                                    <AssignmentHeading>Brief:</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                    <OuterBar><InnerBar></InnerBar></OuterBar>
                                    <AssignmentHeading>Tasks:</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
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
                                <AssignmentHeading>Brief:</AssignmentHeading>
                                <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                <OuterBar><InnerBar></InnerBar></OuterBar>
                                <AssignmentHeading>Tasks:</AssignmentHeading>
                                <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
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
                                <AssignmentHeading>Brief:</AssignmentHeading>
                                <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                <OuterBar><InnerBar></InnerBar></OuterBar>
                                <AssignmentHeading>Tasks:</AssignmentHeading>
                                <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
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