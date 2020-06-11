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

  const InnerBar = styled.div`
  width: 100%;
  float: left;
  height: 40px;
  border-radius: 10px;
  background-color: red;
`;

  const OuterBar = styled.div`
  width: 90%;
  height: 40px;
  margin-left: 20px;
  border: 1px solid;
  border-radius: 10px;
  background-color: grey;
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

const Checkbox = styled.input`
float: right;
margin-top: 10px;

`;

    return (
        <Wrapper>
            <AccordionGrey>
                <Accordion>
                    {[1].map(item => {
                        return (
                            <AccordionItem title={` CDA401 - AE${item}`}>
                                <AssignmentHeading>CDA401 - AE1</AssignmentHeading>
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
                            <AccordionItem title={` CDA401 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>CDA401</AssignmentHeading>
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
                            <AccordionItem title={` MKT500 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>MKT500 - AE1</AssignmentHeading>
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
            <AccordionWhite>
                <Accordion>
                    {[1].map(item => {
                        return (
                            <AccordionItem title={` SWD601 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>SWD601 - AE1</AssignmentHeading>
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
                    {[2].map(item => {
                        return (
                            <AccordionItem title={` SWD601 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>SWD601 - AE2</AssignmentHeading>
                                    <AssignmentHeading>Brief:</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                    <AssignmentHeading>Progress:</AssignmentHeading>
                                <OuterBar><InnerBar></InnerBar></OuterBar>
                                <AssignmentHeading>Tasks:</AssignmentHeading>
                                <AssignmentParagraph> - Create Hi-Fidelity Wireframes<Checkbox type="checkbox" checked></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Create Medium-Fidelity Wireframes<Checkbox type="checkbox" checked></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Create Lo-Fidelity Wireframes<Checkbox type="checkbox" checked></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Write 4000 word report<Checkbox type="checkbox" checked></Checkbox></AssignmentParagraph>
                                <AssignmentHeading>T</AssignmentHeading>
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
                            <AccordionItem title={` DES500 - AE${item}`}>
                                <div>
                                    <AssignmentHeading>DES500 - AE1</AssignmentHeading>
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


export default Previous;