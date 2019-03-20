import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="text" color="primary">
      Hello World
    </Button>
    
  );
}


ReactDOM.render(
  
  <React.Fragment>
    <CssBaseline />
    {<App />}
  </React.Fragment>

  ,document.getElementById('app')
);

module.hot.accept();