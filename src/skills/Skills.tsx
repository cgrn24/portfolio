import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import { Skill } from './skill/Skill'
import { Title } from '../common/components/title/Title'
import reactIcon from '../assets/image/react.svg'
import reduxIcon from '../assets/image/redux.svg'
import tsIcon from '../assets/image/ts.svg'
import htmlIcon from '../assets/image/html.svg'
import cssIcon from '../assets/image/css.svg'
import muiIcon from '../assets/image/mui.svg'
import rhfIcon from '../assets/image/rhf.svg'
import axiosIcon from '../assets/image/axios.svg'
import sassIcon from '../assets/image/sass.svg'
import { Fade } from 'react-awesome-reveal'
export const Skills = () => {
  return (
    <div id='skills' className={style.skillsBlock}>
      <Fade direction='up' triggerOnce>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
          <Title title={'My skills'} />
          <div className={style.skills}>
            <Skill icon={reactIcon} title='React' />
            <Skill icon={tsIcon} title='TypeScript' />
            <Skill icon={reduxIcon} title='Redux / Redux Toolkit' />
            <Skill icon={htmlIcon} title='HTML5' />
            <Skill icon={cssIcon} title='CSS3' />
            <Skill icon={muiIcon} title='Material UI' />
            <Skill icon={rhfIcon} title='React Hook Form' />
            <Skill icon={axiosIcon} title='AXIOS' />
            <Skill icon={sassIcon} title='SCSS/SASS' />
          </div>
        </div>
      </Fade>
    </div>
  )
}
