import {styled} from '@/stitches.config'

export const Menu = styled('aside', {
  display: 'flex',

  minHeight: '400px',
  width: '200px',
  minWidth: '250px',
  justifyContent: 'flex-direction',
  border: '1px solid green',
  background: 'transparent',

  '& ul': {
    width: '100%',
    listStyle: 'none',
  },
  '& li': {
    display: 'flex',
    cursor: 'pointer',
    padding: '.3rem',
  },
})

export const CloseMenu = styled('div', {
  display: 'flex',
})
