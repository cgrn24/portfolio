import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import { Skill } from './skill/Skill'
import { Title } from '../common/components/title/Title'
export const Skills = () => {
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <Title title={'My skills'} />
        <div className={style.skills}>
          <Skill
            title='JS'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corrupti quas, similique ullam cupiditate illo nihil reiciendis perspiciatis ipsum veniam.'
          />
          <Skill
            title='CSS'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corrupti quas, similique ullam cupiditate illo nihil reiciendis perspiciatis ipsum veniam.'
          />
          <Skill
            title='React'
            description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum corrupti quas, similique ullam cupiditate illo nihil reiciendis perspiciatis ipsum veniam.'
          />
        </div>
      </div>
    </div>
  )
}
