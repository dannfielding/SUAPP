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

button.accordion{
  cursor:pointer;
  border:none;
  outline:none;
  width:100%;
  text-align:left;
  background-color:transparent;
  color:#fff;
  padding:8px;
  margin:4px 0;
  border-radius:4px;
  transition:0.3s;
}

button.accordion:hover{
  background-color:rgba(255,255,255,0.3);
}

button.accordion.active{
  background-color:#fff;
  color:#000;
  border-radius:4px 4px 0 0;
  margin:4px 0 0;
 }

div.panel{
  background-color:rgba(255,255,255,0.8);
  color:#000;
  border-radius:0 0 4px 4px;
  overflow:hidden;
  opacity:0;
  max-height:0;
  transition:0.3s;
  padding:0 8px;
  margin:0;
}

div.panel.show{
  opacity:1;
  max-height:500px;
  padding:8px;
  margin:2px 0 4px;
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