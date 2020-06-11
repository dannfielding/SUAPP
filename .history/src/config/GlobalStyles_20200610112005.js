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

.header{
  cursor: pointer;
  border: solid 1px #f2f2f2;
  padding: 15px;
  background-color: #0089CC;
  color: #FFF;
  font-family: verdana;
  }
  .content{
  cursor: pointer;
  border-left: solid 1px #f2f2f2;
  border-right: solid 1px #f2f2f2;
  border-bottom: solid 1px #f2f2f2;
  border-radius: 0 0 5px 5px;
  padding: 15px;
  font-family: verdana;
  font-size: 14px;
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