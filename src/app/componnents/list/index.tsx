import {ReactNode} from 'react'
import {Card, MyList} from './style'

interface Props {
  children: ReactNode
}

export const List = ({children}: Props) => {
  return <MyList>{children}</MyList>
}

export const CardList = ({children}: Props) => {
  return <Card>{children}</Card>
}
