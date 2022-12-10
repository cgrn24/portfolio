import style from './Skill.module.scss'

type SkillPropsType = {
  title: string
  description: string
  icon: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <div className={style.skill}>
      <div className={style.icon}>
        <img className={style.svg} src={props.icon} />
      </div>
      <h3 className={style.title}>{props.title}</h3>
      <span className={style.description}>{props.description}</span>
    </div>
  )
}
