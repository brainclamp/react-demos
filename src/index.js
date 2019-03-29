import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme , styled } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  borderRadius: 20,
  color: 'white',
  height: '50px',
});


ReactDOM.render(
  <React.Fragment>
    <CssBaseline/>
    
    <MyButton>Hello world</MyButton>
    
    </React.Fragment>

  ,document.getElementById('app')
);

module.hot.accept();

