import {IconUserCircle} from '@tabler/icons-react'
import {MyHeader} from './style'

const Header = () => {
  return (
    <MyHeader>
      <span>
        <small>Header</small>
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
