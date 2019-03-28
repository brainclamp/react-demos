import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { palette, spacing, compose, typography } from '@material-ui/system';
import { styled } from '@material-ui/styles';
import { unstable_Box as Box } from '@material-ui/core/Box';

const theme = createMuiTheme();

ReactDOM.render(

  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <p color="primary.main"
    fontFamily="h6.fontFamily">text</p>
    {/* <Box
      color="primary.main"
      bgcolor="background.paper"
      fontFamily="h6.fontFamily"
      fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' } }
      p={{ xs: 2, sm: 3, md: 4} }
    > 
      @material-ui/system
    </Box> */}
   
  </MuiThemeProvider>
     
  ,document.getElementById('app')
);

module.hot.accept();