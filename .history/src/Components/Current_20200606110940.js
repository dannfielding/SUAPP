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

    const AssignmentGrey = styled.div`
    width: 100%;
    height 130px;
    background-color: ${props => props.theme.colors.lightgrey};
    `;

    const AssignmentWhite = styled.div`
    width: 100%;
    height 130px;
    background-color: ${props => props.theme.colors.white};
    `;

    const AssignmentHeading = styled.h4`
    color: black;
    padding-top: 50px;
    text-align: center;
    `;

    const CollapsibleWrapper = styled.ul`
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;
    border-bottom: 1px solid #e0e0e0;
    `;

    const CollapsibleOpen = styled.input`
        display: none;
                &:checked  {
            max-height: 100%;
            opacity: 100;
            visibility: visible
        }
    `;

    const CollapsiblePanel = styled.div`
    visibility: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height .1s,
    visibility .3s,
    opacity .3s;
    `;

    const CollapsibleLi = styled.li`
    margin-bottom: 0;
    `;

    const CollapsibleButton =styled.button`
    border-top: 1px solid #e0e0e0;
    cursor: pointer;
    display: block;
    padding: 15px 10px;
    margin-bottom: 0;
    color: #4285f4;
    font-weight: normal;
    transition: background-color .2s ease;
    &:checked  {
        max-height: 100%;
        opacity: 100;
        visibility: visible
    }
    `;

    return (

        <Wrapper>
            <CollapsibleWrapper>
    <li>
        <CollapsibleOpen type="checkbox" id="collapse-1"></CollapsibleOpen>
        <CollapsibleButton class="collapse-btn" for="collapse-1">Upload an image</CollapsibleButton>
        <CollapsiblePanel>
            <div class="collapse-inner">
                <ol>
                    <CollapsibleLi>Click <strong>Upload an image</strong>.</CollapsibleLi>
                    <CollapsibleLi>Click <strong>Choose file</strong>.</CollapsibleLi>
                    <CollapsibleLi>Select the image from your computer.</CollapsibleLi>
                </ol>
            </div>
        </CollapsiblePanel>
        </li>
    </CollapsibleWrapper>

            <AssignmentWhite>
                <AssignmentHeading>Example Assignment</AssignmentHeading>
            </AssignmentWhite>
            <AssignmentGrey>
                <AssignmentHeading>Example Assignment</AssignmentHeading>
            </AssignmentGrey>
        </Wrapper>
    );
}

export default Current;