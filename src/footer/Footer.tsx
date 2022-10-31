import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'
export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={`${styleContainer.container} ${style.footerContainer}`}>
        <h3 className={style.text}>Иван Иванов</h3>
        <div className={style.smthgWrapper}>
          <div className={style.smthg}></div>
          <div className={style.smthg}></div>
          <div className={style.smthg}></div>
          <div className={style.smthg}></div>
        </div>
        <div>©2022 Все права защищены</div>
      </div>
    </div>
  )
}
