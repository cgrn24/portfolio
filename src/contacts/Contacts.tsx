import { useRef } from 'react'
import { Fade } from 'react-awesome-reveal'
import emailjs from '@emailjs/browser'
import { Button } from '../common/components/button/Button'
import { Title } from '../common/components/title/Title'
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.scss'

export const Contacts = () => {
  const form = useRef(null)
  const sendEmail = (e: any) => {
    e.preventDefault()
    const currentform = form.current
    if (currentform == null) return
    emailjs.sendForm('service_l9kujy9', 'template_hl5id5a', currentform, 'lf5tlEEmVHwUSjXZL').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }
  return (
    <div id='contacts' className={style.contactsBlock}>
      <Fade direction='up' triggerOnce>
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
          <Title title={'Contact'} />
          <form ref={form} onSubmit={sendEmail} className={style.inputBlock} id='submitform'>
            <input type='text' className={style.inputName} placeholder={'Name'} name='name'></input>
            <input type='text' className={style.inputMail} placeholder={'E-mail'} name='email'></input>
            <textarea className={style.textarea} placeholder={'Your message'} name='message'></textarea>
          </form>
          <div className={style.buttonWrapper}>
            <button type='submit' className={style.button} value='Send Message' form='submitform'>
              Send message
            </button>
          </div>
        </div>
      </Fade>
    </div>
  )
}
