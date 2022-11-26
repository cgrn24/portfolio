import style from './Projects.module.css'
import styleContainer from '../common/styles/Container.module.css'
import { Project } from './project/Project'
export const Projects = () => {
  return (
    <div className={style.projectsBlock}>
      <div className={`${styleContainer.container} ${style.projectsContainer}`}>
        <div className={style.title}>
          <h2>My projects</h2>
        </div>

        <div className={style.projects}>
          <Project title='123' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam.' />
          <Project title='123' description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquam.' />
        </div>
      </div>
    </div>
  )
}
