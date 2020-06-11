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
    float: left;
    height: 40px;
    border-radius: 10px;
    background-color: red;
  `;

    const OuterBar = styled.div`
    width: 80%;
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
    border: 1px solid;
    margin-left: 20px;
    width: 80%;
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
                            <AccordionItem title={` SWD600 - AE${item}`}>
                                    <AssignmentHeading>SWD500 - AE1</AssignmentHeading>
                                    <AssignmentHeading>Brief:</AssignmentHeading>
                                    <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                    <AssignmentHeading>Progress:</AssignmentHeading>
                                <OuterBar><InnerBar></InnerBar></OuterBar>
                                <AssignmentHeading>Tasks:</AssignmentHeading>
                                <AssignmentParagraph> - Outline the project plan<Checkbox type="checkbox"></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Interview 10 students about their experience at Univeristy<Checkbox type="checkbox" checked></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Create a poster of all the responses<Checkbox type="checkbox" checked></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Present poster to class (with QnA)<Checkbox type="checkbox"></Checkbox></AssignmentParagraph>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </AccordionGrey>
            <AccordionWhite>
            <Accordion>
                {[2].map(item => {
                    return (
                        <AccordionItem title={` SWD600 - AE${item}`}>
                            <div>
                                <AssignmentHeading>SWD600 - AE2</AssignmentHeading>
                                <AssignmentHeading>Brief:</AssignmentHeading>
                                <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                <AssignmentHeading>Progress:</AssignmentHeading>
                                <OuterBar><InnerBar></InnerBar></OuterBar>
                                <AssignmentHeading>Tasks:</AssignmentHeading>
                                <AssignmentParagraph> - Create Hi-Fidelity Wireframes<Checkbox type="checkbox"></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Create Medium-Fidelity Wireframes<Checkbox type="checkbox" checked></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Create Lo-Fidelity Wireframes<Checkbox type="checkbox" checked></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Write 4000 word report<Checkbox type="checkbox"></Checkbox></AssignmentParagraph>
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
                                <AssignmentHeading>CDA600 - AE1</AssignmentHeading>
                                <AssignmentHeading>Brief:</AssignmentHeading>
                                <AssignmentParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et tellus non lorem pellentesque consequat ac sit amet erat. Donec hendrerit ante sapien, facilisis lacinia velit volutpat sit amet. Pellentesque sem libero, porttitor in libero quis, scelerisque efficitur lectus. Aliquam venenatis ut augue eget interdum. Ut euismod placerat dolor in imperdiet. Vestibulum at maximus dolor. Nam molestie mattis scelerisque. Mauris imperdiet risus sit amet enim tempus vulputate. Curabitur nec dapibus dolor, eget venenatis risus.</AssignmentParagraph>
                                <AssignmentHeading>Progress:</AssignmentHeading>
                                <OuterBar><InnerBar></InnerBar></OuterBar>
                                <AssignmentHeading>Tasks:</AssignmentHeading>
                                <AssignmentParagraph> - Create Hi-Fidelity Wireframes<Checkbox type="checkbox"></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Create Medium-Fidelity Wireframes<Checkbox type="checkbox" checked></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Create Lo-Fidelity Wireframes<Checkbox type="checkbox" checked></Checkbox></AssignmentParagraph>
                                <AssignmentParagraph> - Write 4000 word report<Checkbox type="checkbox"></Checkbox></AssignmentParagraph>
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