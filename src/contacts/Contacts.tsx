import { Fade } from 'react-awesome-reveal'
import { Button } from '../common/components/button/Button'
import { Title } from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.scss'

export const Contacts = () => {
  return (
    <div id='contacts' className={style.contactsBlock}>
      <Fade direction='up' triggerOnce>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
          <Title title={'Contact'} />
          <form className={style.inputBlock}>
            <input type='text' className={style.inputName} placeholder={'Name'}></input>
            <input type='text' className={style.inputMail} placeholder={'E-mail'}></input>
            <textarea className={style.textarea} placeholder={'Your message'}></textarea>
          </form>
          <div className={style.buttonWrapper}>
            <Button text='Send message' link='/*' />
            {/* <button className={style.button}>Отправить</button> */}
          </div>
        </div>
      </Fade>
    </div>
  )
}
