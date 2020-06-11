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

/* Style the button that is used to open and close the collapsible content */
.collapsible {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.active, .collapsible:hover {
  background-color: #ccc;
}

/* Style the collapsible content. Note: hidden by default */
.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
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