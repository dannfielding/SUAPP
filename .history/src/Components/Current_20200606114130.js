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

    const AssignmentWrapper = styled.ul`
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
        border-bottom: 1px solid #e0e0e0;
    `;

    const AssignmentPanel = styled.div`
    visibility: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height .1s,
    visibility .3s,
    opacity .3s;
    `;

    const AssignmentOpen = styled.button`
        display: none;
        &:checked ~ ${AssignmentPanel} {
            max-height: 100%;
            opacity: 100;
            visibility: visible;
        }
    `


    return (

        <Wrapper>
<AssignmentWrapper>
    <li>
        <AssignmentOpen></AssignmentOpen>
        <label class="collapse-btn" for="collapse-1">Upload an image</label>
        <AssignmentPanel>
            <div class="collapse-inner">
                <ol>
                    <li>Click <strong>Upload an image</strong>.</li>
                    <li>Click <strong>Choose file</strong>.</li>
                    <li>Select the image from your computer.</li>
                </ol>
            </div>
        </AssignmentPanel>
    </li>
    </AssignmentWrapper>

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