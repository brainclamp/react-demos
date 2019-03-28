import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, styled, withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
// adapting
const styledBy = (property, mapping) => props => mapping[props[property]];

const AdaptedStyledComponentButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: styledBy('color', {
    red: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    blue: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  }),
  border: 0,
  borderRadius: 10,
  boxShadow: styledBy('color', {
    red: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    blue: '0 3px 5px 2px rgba(33, 203, 243, .3)',
  }),
  color: 'white',
  height: 56,
  padding: '0 30px',
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
const HigherOrderComponent = (props) => {
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

      <Typography component="div" variant="h1" gutterBottom>
        h1. Heading
      </Typography>

      <Button variant="contained" color="primary">
        Hello World
      </Button>

      <Hook background="#FFF" />

      <StyledComponentButton>Styled Components API</StyledComponentButton>
      <AdaptedStyledComponentButton color="red">Red</AdaptedStyledComponentButton>
      <AdaptedStyledComponentButton color="blue">Blue</AdaptedStyledComponentButton>

      <HOCButton />

  </CssBaseline>
  ,document.getElementById('app')
);

module.hot.accept();