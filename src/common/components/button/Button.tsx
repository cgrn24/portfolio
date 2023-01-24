import style from './Button.module.scss'

export const Button = (props: any) => {
  return (
    <a href='' className={style.button}>
      {props.text}
    </a>
  )
}
