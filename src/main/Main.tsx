import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
export const Main = () => {
  return (
    <div className={style.mainBlock}>
      <div className={styleContainer.container}>
        <div className={style.text}>
          <p className={style.titleText}>Hi There</p>
          <h1 className={style.mainText}>I am Jeffrey Aaron</h1>
          <p className={style.secondText}>Frontend Developer</p>
        </div>
        <div className={style.photo}></div>
      </div>
    </div>
  )
}
