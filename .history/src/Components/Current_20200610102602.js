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

    return (

        <Wrapper>
<button type="button" class="collapsible">Open Collapsible</button>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis vulputate tellus ac ullamcorper. Quisque tincidunt consequat orci sed feugiat. Mauris commodo purus turpis, ac lacinia quam ultrices ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer a lacus suscipit, sagittis quam at, euismod massa. Sed neque nunc, molestie sed ipsum vel, efficitur eleifend ligula. Proin sit amet tempus tellus, nec hendrerit ipsum. Proin tempor pretium tortor, vel pellentesque orci fermentum at. Pellentesque volutpat tortor nec rhoncus luctus. Suspendisse eu velit lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ac lorem vitae orci sollicitudin pulvinar ut vel metus. Aliquam maximus eros risus, nec blandit tortor rutrum id. Vivamus mollis turpis non eros mattis, nec finibus leo viverra.</p>
</div>
    );
}

export default Current;