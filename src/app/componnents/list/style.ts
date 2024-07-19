import {styled} from '@/stitches.config'

export const MyList = styled('section', {
  display: 'flex',
  height: '100%',
  width: '100%',
  padding: '.5rem',
  flexDirection: 'column',
  border: '1px solid #fff',
})

export const TitleList = styled('div', {
  display: 'flex',
  height: '40px',
  width: '100%',
  alignContent: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '.250rem',
  borderBottom: '1px solid #fff',
})

export const Card = styled('div', {
  position: 'relative',
  display: 'flex',
  minHeight: '200px',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '.250rem',
  paddingBottom: '.5rem',
})

export const FooterCard = styled('div', {
  position: 'absolute',
  right: '.250rem',
  bottom: '.250rem',
})
