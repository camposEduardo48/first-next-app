import {styled} from '@/stitches.config'

export const Menu = styled('aside', {
  display: 'flex',
  background: 'rgba(0,0,0, 0.2)',
  minHeight: '400px',
  width: '200px',
  minWidth: '250px',
  justifyContent: 'flex-direction',

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
