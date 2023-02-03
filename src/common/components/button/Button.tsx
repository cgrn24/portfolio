import style from './Button.module.scss'

type ButtonPropsType = {
  text: string
  link: string
}

export const Button = (props: ButtonPropsType) => {
  return (
    <a href={props.link} className={style.button}>
      {props.text}
    </a>
  )
}
