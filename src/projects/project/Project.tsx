import { Button } from '../../common/components/button/Button'
import { ProjectStyleType } from '../Projects'
import style from './Project.module.scss'

type ProjectPropsType = {
  title: string
  description: string
  style: ProjectStyleType
}

export const Project = (props: ProjectPropsType) => {
  return (
    <div className={style.project}>
      <div className={style.image} style={props.style}>
        <Button text='View' link='/*' />
        {/* <button className={style.button}>Смотреть</button> */}
      </div>
      <div className={style.projectInfo}>
        <h3 className={style.projectTitle}>{props.title}</h3>
        <span className={style.description}>{props.description}</span>
      </div>
    </div>
  )
}
