import {styled} from '@/stitches.config'

export const MyHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 'auto',
  width: '100%',
  padding: '.5rem',

  '& nav': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '.2rem',
  },
})
