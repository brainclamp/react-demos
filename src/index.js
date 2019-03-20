import React from 'react'
import ReactDOM from 'react-dom'

const Wrapper = () => {return <p>Minimal React / Webpack / Babel Boilerplate</p>}

ReactDOM.render(
  
    <Wrapper>

    </Wrapper>
  
  ,document.getElementById('app')
);

module.hot.accept();