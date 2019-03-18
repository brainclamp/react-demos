import React from 'react'
import ReactDOM from 'react-dom'
import Tag from 'clean-tag'
import ms from 'modularscale-js'
import styled, {createGlobalStyle} from 'styled-components'
import {fontSize, color} from 'styled-system'

const Style = createGlobalStyle(`
  * { box-sizing: border-box; }
  body{ margin:0; }
`)

const LineOfText = styled(Tag)`
  font-family: serif;
  color: purple;
  ${fontSize}
  ${color}
`

const modularScaleBaseInVW = 2.5 // desired fontsize base in vw's

const responsiveModularScales = [ // responsive base/ratio objects
  {
    base: 16, // pixels value for lowest breakpoint range
    ratio: 1.1
  },
  {
    base: modularScaleBaseInVW,
    ratio: 1.1
  },
  {
    base: modularScaleBaseInVW, 
    ratio: 1.4
  },
  {
    base: 25.6, // pixels value for highest breakpoint range
    ratio: 1.4
  }
]

const responsiveBreakpoints = responsiveModularScales.length;
const linesOfText = [] //demo readout

for (let i = 0; i < 3; i++) { // create 3 lines of text

  let responsiveModularScale = [] // one font size value from 'ms' plugin for each responsive range

  for (let z = 0; z < responsiveBreakpoints; z++) { // loop all breakpoints

    let modularScaledFontSize = ms(i, responsiveModularScales[z]).toFixed(2) // get modular scaled font size
    modularScaledFontSize += (z === 0 || z === responsiveBreakpoints-1) ? 'px' : 'vw' // smallest & largest breakpoints -> PX / mid ranges -> VW
    responsiveModularScale.push(modularScaledFontSize)
    
  }

  linesOfText.push(<LineOfText key={i} fontSize={responsiveModularScale}>
                    The quick brown fox jumps over the lazy dog 
                    <LineOfText color='black' fontSize={14}>[{responsiveModularScale.join(' / ')}]</LineOfText>
                   </LineOfText>)
}

ReactDOM.render(

    <div>
      {linesOfText}
    </div>

    ,document.getElementById('app')
);

module.hot.accept();