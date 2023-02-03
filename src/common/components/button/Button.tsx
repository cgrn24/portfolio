import style from './Button.module.scss'

type ButtonPropsType = {
  text: string
  link: string
  newtab?: boolean
}

export const Button = (props: ButtonPropsType) => {
  if (props.newtab) {
    return (
      <a href={props.link} className={style.button} target='_blank'>
        {props.text}
      </a>
    )
  } else {
    return (
      <a href={props.link} className={style.button}>
        {props.text}
      </a>
    )
  }
}
