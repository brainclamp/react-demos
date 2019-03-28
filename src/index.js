import React from 'react'
import ReactDOM from 'react-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import PropTypes from "prop-types";


const Wrapper = (props) => {return props.title}

Wrapper.propTypes = {
  title: PropTypes.string
}

ReactDOM.render(
  <CssBaseline>
    <Wrapper title='Material UI - Basic'>
      <CssBaseline />
    </Wrapper>
  </CssBaseline>
  ,document.getElementById('app')
);

module.hot.accept();