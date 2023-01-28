import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill'
import { Title } from '../common/components/title/Title'
import reactIcon from '../assets/image/react.svg'
import reduxIcon from '../assets/image/redux.svg'
import tsIcon from '../assets/image/ts.svg'
import htmlIcon from '../assets/image/html.svg'
import cssIcon from '../assets/image/css.svg'
import muiIcon from '../assets/image/mui.svg'
import { Fade } from 'react-awesome-reveal'
export const Skills = () => {
  return (
    <div id='skills' className={style.skillsBlock}>
      <Fade direction='up' triggerOnce>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
          <Title title={'My skills'} />
          <div className={style.skills}>
            <Skill
              icon={reactIcon}
              title='React'
              description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corrupti quas, similique ullam cupiditate illo nihil reiciendis perspiciatis ipsum veniam.'
            />
            <Skill
              icon={tsIcon}
              title='TypeScript'
              description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corrupti quas, similique ullam cupiditate illo nihil reiciendis perspiciatis ipsum veniam.'
            />
            <Skill
              icon={reduxIcon}
              title='Redux'
              description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corrupti quas, similique ullam cupiditate illo nihil reiciendis perspiciatis ipsum veniam.'
            />
            <Skill
              icon={htmlIcon}
              title='HTML5'
              description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corrupti quas, similique ullam cupiditate illo nihil reiciendis perspiciatis ipsum veniam.'
            />
            <Skill
              icon={cssIcon}
              title='CSS3'
              description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corrupti quas, similique ullam cupiditate illo nihil reiciendis perspiciatis ipsum veniam.'
            />
            <Skill
              icon={muiIcon}
              title='Material UI'
              description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corrupti quas, similique ullam cupiditate illo nihil reiciendis perspiciatis ipsum veniam.'
            />
          </div>
        </div>
      </Fade>
    </div>
  )
}
