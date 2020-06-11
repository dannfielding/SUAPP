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
        ${CollapsibleOpen}:checked & {
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

    return (

        <Wrapper>
            <CollapsibleWrapper>
    <li>
        <CollapsibleOpen type="checkbox" id="collapse-1"></CollapsibleOpen>
        <label class="collapse-btn" for="collapse-1">Upload an image</label>
        <CollapsiblePanel>
            <div class="collapse-inner">
                <ol>
                    <MarginLi>Click <strong>Upload an image</strong>.</li>
                    <MarginLi>Click <strong>Choose file</strong>.</li>
                    <li>Select the image from your computer.</li>
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