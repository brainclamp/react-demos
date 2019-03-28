import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, styled, withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

// 3 different APIs ////////////////////////////////////////////
// Hook API
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
});
const Hook = () => {
  const classes = useStyles();
  return <Button className={classes.root}>Hook API</Button>;
}

// Styled components API
const StyledComponentButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px'
});

// Higher-order component API
const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
};
function HigherOrderComponent(props) {
  const { classes } = props;
  return <Button className={classes.root}>Higher-order component</Button>;
}
HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
const HOCButton = withStyles(styles)(HigherOrderComponent);

//////////////////////////////////////////////////////////////////////////////
ReactDOM.render(
  <CssBaseline>

      <Button variant="contained" color="primary">
        Hello World
      </Button>

      <Hook/>

      <StyledComponentButton>Styled Components API</StyledComponentButton>

      <HOCButton />

  </CssBaseline>
  ,document.getElementById('app')
);

module.hot.accept();