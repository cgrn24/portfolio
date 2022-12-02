import style from './Project.module.css'

type ProjectPropsType = {
  title: string
  description: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <div className={style.project}>
      <div className={style.image}>
        <button className={style.button}>Смотреть</button>
      </div>
      <h3 className={style.projectTitle}>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  )
}
