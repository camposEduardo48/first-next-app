import {ReactNode} from 'react'
import {MyForm} from './style'

interface Props {
  children: ReactNode
}

const Form = ({children}: Props, event: any) => {
  event.preventDefault
  return <MyForm>{children}</MyForm>
}
export default Form
