const breakpoints = [
  '40em',
  '52em',
  '64em',
  '80em'
]
// breakpoint aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {

 breakpoints,

  colors: { // color & background-color
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175'
  },

  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },

  // margin and padding - 4px scale @ 16px base
  space: [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem', '32rem'],

  // font sizes -[12, 14, 16, 24, 32, 48, 64, 96, 128] @16px base
  fontSizes: ['0.75rem', '0.875rem', '1rem', '1.5rem', '2rem', '3rem', '4rem', '6rem', '8rem'] 

}