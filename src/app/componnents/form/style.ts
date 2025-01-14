import {styled} from '@/stitches.config'

export const MyForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(0,0,0, 0.2)',
  justifyContent: 'center',
  padding: '1rem',
  gap: '1rem',
  borderRadius: '6px',
  minHeight: 'auto',
  width: '100%',

  '& input, & textarea': {
    background: 'rgba(0,0,0, 0.2)',
    color: '#fff',
    border: '1px solid #000',
    outline: 'none',
    borderRadius: '6px',
    height: '30px',
    width: '300px',
    padding: '.4rem',

    '&:focus': {
      border: '1px solid #323366',
    },
  },
})
