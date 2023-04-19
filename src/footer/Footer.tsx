import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Fade } from 'react-awesome-reveal'

export const Footer = () => {
  return (
    <div id='footer' className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <Fade direction='up' triggerOnce>
          <h3 className={style.text}>Petr Prudnikov</h3>
          <div className={style.iconWrapper}>
            <a href={'mailto:aln724@proton.me'} target='_blanc'>
              <FontAwesomeIcon icon={faEnvelope} size='2x' className={style.icon} />
            </a>
            <a href='https://github.com/cgrn24' target='_blanc'>
              <FontAwesomeIcon icon={faGithub} size='2x' className={style.icon} />
            </a>
            <a href='https://www.linkedin.com/in/petr-prudnikov-661595268' target='_blanc'>
              <FontAwesomeIcon icon={faLinkedin} size='2x' className={style.icon} />
            </a>
            <a href='https://t.me/aln724' target='_blanc'>
              <FontAwesomeIcon icon={faTelegram} size='2x' className={style.icon} />
            </a>
          </div>
          <div className={style.copyrights}>©2023 All rights reserved</div>
        </Fade>
      </div>
    </div>
  )
}
