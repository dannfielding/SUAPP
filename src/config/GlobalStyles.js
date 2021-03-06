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