import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-scroll'
import style from './BurgerNav.module.scss'
export const BurgerNav = () => {
  const [open, setOpen] = useState(false)
  const clickHandler = () => setOpen(!open)
  return (
    <div className={style.burgerNav} onClick={clickHandler}>
      <div className={open ? `${style.show} ${style.burgerNavItems}` : style.burgerNavItems} onClick={(e) => e.stopPropagation()}>
        <Link className={style.link} activeClass={style.active} to='main' spy={true} smooth={true} offset={0} duration={500} onClick={clickHandler}>
          Main
        </Link>
        <Link className={style.link} activeClass={style.active} to='skills' spy={true} smooth={true} offset={-80} duration={500} onClick={clickHandler}>
          Skills
        </Link>
        <Link className={style.link} activeClass={style.active} to='projects' spy={true} smooth={true} offset={-80} duration={500} onClick={clickHandler}>
          Projects
        </Link>
        <Link className={style.link} activeClass={style.active} to='contacts' spy={true} smooth={true} offset={1} duration={500} onClick={clickHandler}>
          Contacts
        </Link>
      </div>
      <FontAwesomeIcon className={style.burgerBtn} onClick={clickHandler} icon={faBars} size='1x' color='#4e93e6' />
      {open && <div className={style.blur} />}
    </div>
  )
}
