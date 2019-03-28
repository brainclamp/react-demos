import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import Button from '@material-ui/core/Button';

ReactDOM.render(
  <CssBaseline>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
  </CssBaseline>
  ,document.getElementById('app')
);

module.hot.accept();