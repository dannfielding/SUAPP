//Modules
import React from "react";
import styled from "styled-components";
import Collapsible from 'react-collapsible';

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
                <div class="wrap-collabsible">
                    <input id="collapsible" class="toggle" type="checkbox">
                        <label for="collapsible" class="lbl-toggle">More Info</label>
                        <div class="collapsible-content">
                            <div class="content-inner">
                                <p>
                                    QUnit is by calling one of the object that are embedded in JavaScript, and faster JavaScript program could also used with
                                    its elegant, well documented, and functional programming using JS, HTML pages Modernizr is a popular browsers without
                                    plug-ins. Test-Driven Development.
      </p>
                            </div>
                        </div>
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