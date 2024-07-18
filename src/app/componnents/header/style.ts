import {styled} from '@/stitches.config'

export const MyHeader = styled('header', {
  zIndex: '1',
  position: 'fixed',
  top: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgba(0,0,0, 0.2)',
  height: '60px',
  width: '100%',
  padding: '.5rem',

  '& nav': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '.2rem',
  },
})
