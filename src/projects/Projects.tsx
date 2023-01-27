import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { Project } from './project/Project'
import { Title } from '../common/components/title/Title'
import todoImage from './../assets/image/todolist.jpg'
import socialImage from './../assets/image/socnet.jpg'
import { Fade } from 'react-awesome-reveal'

export type ProjectStyleType = {
  backgroundImage: string
}

export const Projects = () => {
  const socnetStyle = {
    backgroundImage: `url(${todoImage})`,
  }
  const todoStyle = {
    backgroundImage: `url(${socialImage})`,
  }

  return (
    <div className={style.projectsBlock}>
      <Fade direction='up' triggerOnce>
        <div className={`${styleContainer.container} ${style.projectsContainer}`}>
          <Title title={'Projects'} />

          <div className={style.projects}>
            <Project style={socnetStyle} title='Social network' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam.' />
            <Project style={todoStyle} title='Todo list' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam.' />
          </div>
        </div>
      </Fade>
    </div>
  )
}
