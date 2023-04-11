import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { Project } from './project/Project'
import { Title } from '../common/components/title/Title'
import todoImage from './../assets/image/todolist.jpg'
import socialImage from './../assets/image/socnet.png'
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
              descriptionStack='Stack: TypeScript, React, Redux Toolkit, React tables, Framer Motion, Material UI'
              description='Cards is an app that uses spaced repetition technique for you to quickly memorize things'
              link='https://cards-lovat-eight.vercel.app/'
            />
            <Project
              style={todoStyle}
              title='Todo list'
              descriptionStack='Stack: TypeScript, React, Redux Toolkit, Formik, Unit tests, Material UI'
              description='Task manager is an app to proper manage your tasks'
              link='/'
            />
            <Project
              style={socnetStyle}
              title='Social network'
              descriptionStack='Stack: TypeScript, React, Redux, Class components, Redux-form'
              description='Social Network is an app to communicate people'
              link='https://cgrn24.github.io/social-network/'
            />
          </div>
        </div>
      </Fade>
    </div>
  )
}
