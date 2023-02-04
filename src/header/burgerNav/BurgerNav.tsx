import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { Link } from 'react-scroll'
import style from './BurgerNav.module.scss'
export const BurgerNav = () => {
  const [open, setOpen] = useState(false)
  const clickHandler = () => setOpen(!open)
  return (
    <div className={style.burgerNav}>
      <div className={open ? `${style.show} ${style.burgerNavItems}` : style.burgerNavItems}>
        <Link className={style.link} activeClass={style.active} to='main' spy={true} smooth={true} offset={0} duration={500}>
          Main
        </Link>
        <Link className={style.link} activeClass={style.active} to='skills' spy={true} smooth={true} offset={-80} duration={500}>
          Skills
        </Link>
        <Link className={style.link} activeClass={style.active} to='projects' spy={true} smooth={true} offset={-80} duration={500}>
          Projects
        </Link>
        <Link className={style.link} activeClass={style.active} to='contacts' spy={true} smooth={true} offset={1} duration={500}>
          Contacts
        </Link>
      </div>
      {/* <div onClick={clickHandler} className={style.burgerBtn}> */}
      <FontAwesomeIcon className={style.burgerBtn} onClick={clickHandler} icon={faBars} size='1x' color='#4e93e6' />
      {/* </div> */}
    </div>
  )
}
