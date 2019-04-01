import React from 'react'
import ReactDOM from 'react-dom'
import styled, {ThemeProvider} from 'styled-components'

import { Button } from 'f1000-ui';
import { researchTheme } from 'f1000-ui/theme'

const MyButton = styled(Button)`
  color: ${props => props.theme.palette.primary.secondary},
`;

ReactDOM.render(
    
  <ThemeProvider theme={researchTheme}>
  <MyButton>Hello world</MyButton>
 </ThemeProvider>

  ,document.getElementById('app')
);

module.hot.accept();

console.log(researchTheme)