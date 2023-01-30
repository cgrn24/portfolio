import React from 'react'
import { Nav } from './nav/Nav'
import style from './Header.module.scss'
export const Header = () => {
  return (
    <div className={style.header}>
      <Nav />
    </div>
  )
}
