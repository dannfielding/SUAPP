//Modules
import React from "react";
import styled from "styled-components";
import { Accordion, AccordionItem } from 'react-sanfona';

function Previous() {

    const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    height: inherit;
    padding-bottom: 80px;
    margin: 0 auto;
    @media (max-width: 640px) {
        width:100%;
    }
  `;

    const AssignmentHeading = styled.h4`
    color: ${props => props.theme.colors.black};
    text-align: left;
    margin-left: 20px;
    width: 90%;
    @media (max-width: 640px) {
        padding-top: 10px;
    }
  `;

    const AssignmentParagraph = styled.p`
    color: ${props => props.theme.colors.black};
    text-align: left;
    margin-left: 20px;
    width: 90%;
    @media (max-width: 640px) {
        font-size: 12px;
        padding-bottom: 10px;
    }
  `;

    const AccordionGrey = styled.div`
  background-color: #FFF2F2;
  padding: 40px;
  @media (max-width: 640px) {
      width:100%;
      padding: 0;
      padding-top: 20px;
      padding-bottom: 20px;
  }

`;

    const AccordionWhite = styled.div`
background-color: ${props => props.theme.colors.white};
padding: 40px;
@media (max-width: 640px) {
  width:100%;
  padding: 0;
  padding-top: 20px;
  padding-bottom: 20px;
}
`;


    return (
        <Wrapper>
            <AccordionGrey>
                <Accordion>
                    {[1].map(item => {
                        return (
                            <AccordionItem title={` CDA401 - AE${item}`}>
                                <AssignmentHeading>CDA401 - AE1</AssignmentHeading>
                                <AssignmentParagraph>Handed in: 05/05/2019</AssignmentParagraph>
                                <AssignmentHeading>Brief:</AssignmentHeading>
                                <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                <AssignmentHeading>Feedback:</AssignmentHeading>
                                <AssignmentParagraph>Overall your work was completed to a good standard, although referencing of sources and formatting could be better.</AssignmentParagraph>
                                <AssignmentHeading>Grade:</AssignmentHeading>
                                <AssignmentParagraph>B</AssignmentParagraph>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </AccordionGrey>
            <AccordionWhite>
                <Accordion>
                    {[2].map(item => {
                        return (
                            <AccordionItem title={` CDA401 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>CDA401</AssignmentHeading>
                                    <AssignmentParagraph>Handed in: 04/04/2019</AssignmentParagraph>
                                    <AssignmentHeading>Brief:</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                    <AssignmentHeading>Feedback:</AssignmentHeading>
                                    <AssignmentParagraph>Overall your work was good enough to pass, but more research needed to be conducted in to your chosen topic to support your claims.</AssignmentParagraph>
                                    <AssignmentHeading>Grade:</AssignmentHeading>
                                    <AssignmentParagraph>D</AssignmentParagraph>
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
                            <AccordionItem title={` MKT500 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>MKT500 - AE1</AssignmentHeading>
                                    <AssignmentParagraph>Handed in: 10/03/2019</AssignmentParagraph>
                                    <AssignmentHeading>Brief:</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                    <AssignmentHeading>Feedback:</AssignmentHeading>
                                    <AssignmentParagraph>Meets the neccessary criteria to pass, I though your research was really good but you didn't apply what you learned to the task.</AssignmentParagraph>
                                    <AssignmentHeading>Grade:</AssignmentHeading>
                                    <AssignmentParagraph>C</AssignmentParagraph>
                                </div>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </AccordionGrey>
            <AccordionWhite>
                <Accordion>
                    {[1].map(item => {
                        return (
                            <AccordionItem title={` SWD601 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>SWD601 - AE1</AssignmentHeading>
                                    <AssignmentParagraph>Handed in: 03/03/2019</AssignmentParagraph>
                                    <AssignmentHeading>Brief:</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                    <AssignmentHeading>Feedback:</AssignmentHeading>
                                    <AssignmentParagraph>Well done this was an enjoyable report to read, no improvements that come to mind.</AssignmentParagraph>
                                    <AssignmentHeading>Grade:</AssignmentHeading>
                                    <AssignmentParagraph>A</AssignmentParagraph>
                                </div>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </AccordionWhite>
            <AccordionGrey>
                <Accordion>
                    {[2].map(item => {
                        return (
                            <AccordionItem title={` SWD601 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>SWD601 - AE2</AssignmentHeading>
                                    <AssignmentParagraph>Handed in: 14/02/2019</AssignmentParagraph>
                                    <AssignmentHeading>Brief:</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                    <AssignmentHeading>Feedback:</AssignmentHeading>
                                    <AssignmentParagraph>The work simply wasn't good enough to meet the grading standards.</AssignmentParagraph>
                                    <AssignmentHeading>Grade:</AssignmentHeading>
                                    <AssignmentParagraph>F</AssignmentParagraph>
                                </div>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </AccordionGrey>
            <AccordionWhite>
                <Accordion>
                    {[2].map(item => {
                        return (
                            <AccordionItem title={` MKT500 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>MKT500 - AE2</AssignmentHeading>
                                    <AssignmentParagraph>Handed in: 02/02/2019</AssignmentParagraph>
                                    <AssignmentHeading>Brief:</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                    <AssignmentHeading>Feedback:</AssignmentHeading>
                                    <AssignmentParagraph>Good report a clear use of a methodology and results would have been better as it would show you followed a certain structure.</AssignmentParagraph>
                                    <AssignmentHeading>Grade:</AssignmentHeading>
                                    <AssignmentParagraph>C</AssignmentParagraph>
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
                            <AccordionItem title={` DES500 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>DES500 - AE1</AssignmentHeading>
                                    <AssignmentParagraph>Handed in: 01/01/2019</AssignmentParagraph>
                                    <AssignmentHeading>Brief:</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                    <AssignmentHeading>Feedback:</AssignmentHeading>
                                    <AssignmentParagraph>Excellent report but you need to make sure that you talk in third person instead of first.</AssignmentParagraph>
                                    <AssignmentHeading>Grade:</AssignmentHeading>
                                    <AssignmentParagraph>B</AssignmentParagraph>
                                </div>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </AccordionGrey>
        </Wrapper>
    );
}


export default Previous;