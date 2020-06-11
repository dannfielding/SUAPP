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
    visibility: visable;
    max-height: 0;
    opacity: 0;
    transition: max-height .1s,
    visibility .3s,
    opacity .3s;
    `;

    const AssignmentOpen = styled.button`
    display: none;
    &:checked + ${AssignmentPanel} {
        max-height: 100%;
        opacity: 100;
        visibility: visible;
      }
    `;

  



    return (

        <Wrapper>
<AssignmentWrapper>
<input class="collapse-open" type="checkbox" id="collapse-1">
        <label class="collapse-btn" for="collapse-1">Upload an image</label>
        <div class="collapse-painel">
            <div class="collapse-inner">
                <ol>
                    <li>Visit <a href="http://images.google.com/">images.google.com</a> or click the camera icon in the search box on any Images results page
                        <img src="//lh5.ggpht.com/xpDi5LL0ccSl7OxR__CTD_gm0bYAdE3egEL7vkdf5Z9kPAVNRm2wpnGNk8w7fA=w26-h18" width="26" height="18" alt="camera icon" title="camera icon">.</li>
                    <li>Click <strong>Upload an image</strong>.</li>
                    <li>Click <strong>Choose file</strong>.</li>
                    <li>Select the image from your computer.</li>
                </ol>
            </div>
        </div>
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