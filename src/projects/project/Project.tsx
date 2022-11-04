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
      <div className={style.description}>
        <div>{props.title}</div>
        <div>{props.description}</div>
      </div>
    </div>
  )
}
