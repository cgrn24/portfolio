import React from 'react'
import { Nav } from './nav/Nav'
import style from './Header.module.scss'
import { BurgerNav } from './burgerNav/BurgerNav'
export const Header = () => {
  return (
    <div className={style.header}>
      <Nav />
      <BurgerNav />
    </div>
  )
}
