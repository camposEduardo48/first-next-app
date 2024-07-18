'use client'
import {IconUserCircle} from '@tabler/icons-react'
import {MyHeader} from './style'

const Header = () => {
  return (
    <MyHeader>
      <span>
        <h1>
          <b>ZAP</b>
          <strong>YOU</strong>
        </h1>
      </span>
      <nav>
        <div>
          <IconUserCircle size={40} stroke={1} />
        </div>
      </nav>
    </MyHeader>
  )
}
export default Header
