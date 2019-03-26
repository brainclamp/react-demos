import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

const Wrapper = () => {return <p>Material UI - Basic</p>}

ReactDOM.render(
  
    <Wrapper>
      <CssBaseline />
    </Wrapper>
  
  ,document.getElementById('app')
);

module.hot.accept();