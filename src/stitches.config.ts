// stitches.config.ts
import {createStitches} from '@stitches/react'

export const {styled, css, globalCss, keyframes, getCssText, theme, createTheme, config} =
  createStitches({
    theme: {
      colors: {
        zapyouPrimary: '#3099CC',
        zapyouSecondary: '#323366',
        first: '#1a202c',
        second: '#ffffff',
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
    backgroundColor: '$first',
    color: '$second',
  },
  b: {
    color: '$zapyouPrimary',
  },
  strong: {
    color: '$zapyouSecondary',
  },
  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    textDecoration: 'none',
    color: '$second',

    '&:hover a': {
      color: 'silver',
    },
    '&:hover svg': {
      color: 'silver',
    },
  },
})
