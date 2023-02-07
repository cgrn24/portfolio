import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { Project } from './project/Project'
import { Title } from '../common/components/title/Title'
import todoImage from './../assets/image/todolist.jpg'
import socialImage from './../assets/image/socnet.jpg'
import cardsImage from './../assets/image/cards.png'
import { Fade } from 'react-awesome-reveal'

export type ProjectStyleType = {
  backgroundImage: string
}

export const Projects = () => {
  const socnetStyle = {
    backgroundImage: `url(${socialImage})`,
  }
  const todoStyle = {
    backgroundImage: `url(${todoImage})`,
  }

  const cardsStyle = {
    backgroundImage: `url(${cardsImage})`,
  }

  return (
    <div id='projects' className={style.projectsBlock}>
      <Fade direction='up' triggerOnce>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
          <Title title={'Projects'} />

          <div className={style.projects}>
            <Project
              style={cardsStyle}
              title='The Cards app'
              description='Cards is an app that uses spaced repetition technique for you to quickly memorize things.'
              link='https://cards-lovat-eight.vercel.app/'
            />
            <Project
              style={socnetStyle}
              title='Social network'
              description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam.'
              link='/'
            />
            <Project style={todoStyle} title='Todo list' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam.' link='/' />
          </div>
        </div>
      </Fade>
    </div>
  )
}
