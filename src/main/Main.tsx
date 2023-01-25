import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
export const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.text}>
          <span>Hi There</span>
          <span>
            I am Petr <span>Prudnikov</span>
          </span>
          <p className={style.secondText}>Frontend Developer</p>
        </div>
        <div className={style.photo}>
          <div className={style.image}></div>
        </div>
      </div>
    </div>
  )
}
