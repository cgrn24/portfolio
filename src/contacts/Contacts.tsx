import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Контакты</h2>
        <div className={style.contacts}>
          <div className={style.inputBlock}>
            <input className={style.input}></input>
            <input className={style.input}></input>
            <textarea className={style.textarea}></textarea>
          </div>
        </div>
        <div className={style.buttonWrapper}>
          <button className={style.button}>Отправить</button>
        </div>
      </div>
    </div>
  )
}
