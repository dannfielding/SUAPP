//Module
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  line-height: 2; 
  @media (max-width: 640px) {
    width:100%;
}

.collapse-painel {
  visibility: hidden;
  max-height: 0;
  opacity: 0;
  transition: max-height .1s,
  visibility .3s,
  opacity .3s;
}

.collapse-painel:checked {
  max-height: 100%;
  opacity: 100;
  visibility: visible
}

.collapse-list li {
  margin-bottom: 0;
}

.collapse-list .collapse-btn {

}

.collapse-list .collapse-btn:hover {
  background: #eee;
}

.collapse-open ~ .collapse-btn:before {
  content: "↓";
  float: right;
}

.collapse-open:checked ~ .collapse-btn:before {
  content: "↑";
}

.collapse-list .collapse-inner {
  padding: 10px
}



}

//View Transition CSS
//End Animation Styling
.animation-exit.animation-exit-active {
  opacity: 0;
  transition: opacity 100ms;
}

//Start and End Animation State
.animation-enter,
.animation-exit {
    opacity: 0;
}

//Start Animation Styling
.animation-appear,
.animation-enter.animation-enter-active {
  transition: opacity 200ms linear 100ms;
  opacity: 1;
}

body {
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.colors.white};
}

h1 {
    font-size:  ${props => props.theme.h1.fontSize};
    font-family: ${props => props.theme.fontFamily};
}

h2 {
  font-size:  ${props => props.theme.h2.fontSize};
  font-family: ${props => props.theme.fontFamily};
}

h3 {
  font-size:  ${props => props.theme.h3.fontSize};
  font-family: ${props => props.theme.fontFamily};
}
li {
  font-family: ${props => props.theme.fontFamily};
}

`

export default GlobalStyles;