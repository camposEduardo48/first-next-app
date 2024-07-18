'use client'
import Link from 'next/link'
import {Menu} from './style'
import {IconHome, IconHorseToy} from '@tabler/icons-react'

const SideMenu = () => {
  return (
    <Menu>
      <nav>
        <ul>
          <li>
            <Link href={'/'}>
              <IconHome size={'20'} stroke={2} />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href={'/playground'}>
              <IconHorseToy size={20} stroke={2} />
              <p>Playground</p>
            </Link>
          </li>
        </ul>
      </nav>
    </Menu>
  )
}
export default SideMenu
