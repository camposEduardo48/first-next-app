// stitches.config.ts
import {createStitches} from '@stitches/react'

export const {styled, css, globalCss, keyframes, getCssText, theme, createTheme, config} =
  createStitches({
    theme: {
      colors: {
        primary: '#0070f3',
        secondary: '#1a202c',
        third: '#ffffff',
      },
      fonts: {
        sans: 'Inter, sans-serif',
      },
    },
  })

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: '$sans',
    backgroundColor: '$secondary',
    color: '$third',
  },
})
