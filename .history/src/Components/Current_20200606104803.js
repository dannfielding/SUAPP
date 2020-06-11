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
    `;

    return (

        <Wrapper>
            <CollapsibleWrapper>
    <li>
        <CollapsibleOpen type="checkbox" id="collapse-1"></>
        <label class="collapse-btn" for="collapse-1">Upload an image</label>
        <div class="collapse-painel">
            <div class="collapse-inner">
                <ol>
                    <li>Click <strong>Upload an image</strong>.</li>
                    <li>Click <strong>Choose file</strong>.</li>
                    <li>Select the image from your computer.</li>
                </ol>
            </div>
        </div>
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