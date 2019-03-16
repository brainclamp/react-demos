import React from 'react'
import ReactDOM from 'react-dom'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import { space, color, width, fontFamily, fontSize, fontWeight, textAlign, lineHeight, } from 'styled-system'
import Tag from 'clean-tag'
import theme from './theme' // Import vars from external file - JS {theme} object

const Style = createGlobalStyle`
  * { box-sizing: border-box; font-family: Sans-serif;}
  body {margin:0;}
`

// Styled-System ////////////////////////////////////////////////////////
const Wrapper = styled(Tag)`
  font-family: system-ui, sans-serif;
`
// declare required style objects in components (theme then defaults)
const Box = styled(Tag.div)`
  ${space} 
  ${color}
  ${width}
  
`
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
}

const Text = styled(Tag)`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${width}
  ${fontFamily}
  ${textAlign}
`
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...fontFamily.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...textAlign.propTypes
}

 // See 'Tag' working in inspector by switching between these 2 commented lines //////////////////
const Heading = Text.withComponent(Tag.h2)
//const Heading = Text.withComponent('h2')

Heading.defaultProps = {
  fontSize: 5,
  lineHeight: 1.5,
  m: 0
}
Heading.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Style />
      <Box
        color='white'
        bg='tomato' // 'tomato' falls back to css value if not in theme
        width={{md: 1/2}} // using alias -pass object NOT array
        m={[ 1, 2, 3, 4 ]} 
        p={[ 1, 2, 3, 4 ]}
      >
        
        <Heading 
          fontWeight={['bold', '500']}
          fontFamily={['mono', 'sans']}
          fontSize={[ 0, 2, 4, 6 ]}
        >
          styled-system
        </Heading>
        
        {}
        <Text 
          bg={['blue', 'navy']} 
          color='white' 
          width={[ 1, 3/4, 1/2 ]} // width using breakpoints array (use all breakpoints optional!)
          fontSize={[ 0, 1, 3, 4 ]}
          textAlign={['left', 'center']}
          px={[ 1, 2, 2, 3 ]} // x-axis padding
        >
          Basic demo
        </Text>

      </Box>
    </Wrapper>
  </ThemeProvider>,
  document.getElementById('app')
);

module.hot.accept();