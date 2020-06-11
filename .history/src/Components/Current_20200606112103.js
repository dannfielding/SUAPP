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



    return (

        <Wrapper>
            <CollapsibleWrapper>
    <CollapsibleLi>
        <CollapsibleOpen type="checkbox" id="collapse-1"></CollapsibleOpen>
        <CollapsibleButton class="CollapsibleButton" for="collapse-1">Upload an image</CollapsibleButton>
        <CollapsiblePanel>
            <div class="collapse-inner">
                <ol>
                    <CollapsibleLi>Click <strong>Upload an image</strong>.</CollapsibleLi>
                    <CollapsibleLi>Click <strong>Choose file</strong>.</CollapsibleLi>
                    <CollapsibleLi>Select the image from your computer.</CollapsibleLi>
                </ol>
            </div>
        </CollapsiblePanel>
        </CollapsibleLi>
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