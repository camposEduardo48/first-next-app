import {ReactNode} from 'react'
import {MyButton} from './style'

interface Props {
  children: ReactNode
}

export const Button = ({children}: Props) => {
  return <MyButton>{children}</MyButton>
}
