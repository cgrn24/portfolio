import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Контакты</h2>
        <form className={style.inputBlock}>
          <input type='text'></input>
          <input type='text'></input>
          <textarea className={style.textarea}></textarea>
        </form>
        <div className={style.buttonWrapper}>
          <button className={style.button}>Отправить</button>
        </div>
      </div>
    </div>
  )
}
