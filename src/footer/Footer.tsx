import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h3 className={style.text}>Petr Prudnikov</h3>
        <div className={style.iconWrapper}>
          <FontAwesomeIcon icon={faEnvelope} size='2x' className={style.icon} />
          <FontAwesomeIcon icon={faGithub} size='2x' className={style.icon} />
          <FontAwesomeIcon icon={faLinkedin} size='2x' className={style.icon} />
          <FontAwesomeIcon icon={faTelegram} size='2x' className={style.icon} />
          {/* <div className={style.icon}></div>
          <div className={style.icon}></div>
          <div className={style.icon}></div>
          <div className={style.icon}></div> */}
        </div>
        <div className={style.copyrights}>©2022 All rights reserved</div>
      </div>
    </div>
  )
}
