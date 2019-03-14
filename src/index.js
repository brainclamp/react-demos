import React from 'react';
import ReactDOM from 'react-dom';
import styled, {ThemeProvider} from 'styled-components';

// Extract Sass variables into a JS {theme} object
const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!./vars.scss');

const Title = (props) => (<p className={props.className}>Minimal React / Sass / Styled-Components / Webpack / Babel Setup</p>);

// Styled-Component - basic
const Wrapper = styled.div`
  font-family: Sans-serif;
  > div {
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  button {
    display: block;
    margin: 1rem auto;
  }
`;
Wrapper.displayName = 'Wrapper';

// Styled-Component - style an existing component (must pass in (props) & declare className in target component)
const StyledExisting = styled(Title)`
  color: red;
`;
StyledExisting.displayName = 'StyledExisting';

// Styled-Component   various ways of using values from {theme} with props controls
const ButtonFromTheme = styled.button`
  width: 100px
  border: ${props => props.inverted ? `1px solid ${props.theme.primary}` : 'none'};
  border-radius: ${props => props.theme.baseRadius};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: inline-block;
  
  font-family: ${props => props.theme.fontSans};
  font-size: ${props => {
    const { baseFontSize } = props.theme;
    const baseFontSizeParsed = parseInt(baseFontSize, 10);
    return (props.small && `${baseFontSizeParsed * 0.875}px`)
      || (props.large && `${baseFontSizeParsed * 1.375}px`)
      || baseFontSize;
  }};
  font-weight: ${props => props.theme.fontSemibold};
  line-height: ${props => (props.small && '2.2') || (props.large && '1.25') || '2.5'};

  padding: ${props => props.large ? '16px 25px 17px' : '0 12px'};
  position: relative;
  text-align: center;
  
  color: ${props =>
    (props.inverted && props.theme.primary)
    || (props.link && props.theme.baseFontColor)
    || '#fff'
  };
  background-color: ${props =>
    (props.primary && props.theme.primary)
    || (props.danger && props.theme.danger)
    || ((props.inverted || props.link) && '#fff')
    || (props.disabled && props.theme.brandGrey)
  };

  &:hover {
    ${props => props.link && 'text-decoration: underline;'}
    box-shadow: ${props => props.theme.baseBoxShadow};
  }
`;
ButtonFromTheme.displayName = 'ButtonFromTheme';

const BtnLinkFromTheme = ButtonFromTheme.withComponent('a');
ButtonFromTheme.displayName = 'BtnLinkFromTheme';

ReactDOM.render(
  <ThemeProvider theme={theme}>

    <Wrapper>
      <div><Title /></div>
      <div><StyledExisting /></div>
      <div>
        <ButtonFromTheme>Default</ButtonFromTheme>
        <ButtonFromTheme primary>Primary</ButtonFromTheme>
        <ButtonFromTheme danger>Danger</ButtonFromTheme>
        <ButtonFromTheme small>Small</ButtonFromTheme>
        <ButtonFromTheme large>Large</ButtonFromTheme>
        <ButtonFromTheme inverted>Inverted</ButtonFromTheme>
        <div><BtnLinkFromTheme link>Link</BtnLinkFromTheme></div>
        <ButtonFromTheme disabled>Disabled</ButtonFromTheme>
      </div>
    </Wrapper>
  
  </ThemeProvider>,
  document.getElementById('app')
);

module.hot.accept();