import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import { Container, Engine } from 'tsparticles-engine'

export const Main = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])
  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
    },
  }
  return (
    <div className={style.mainBlock}>
      <Particles className={style.particles} params={particlesOptions} init={particlesInit} loaded={particlesLoaded} />
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
