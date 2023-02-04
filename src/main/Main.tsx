import style from './Main.module.scss'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import { Container, Engine } from 'tsparticles-engine'
import { Fade } from 'react-awesome-reveal'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt'

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

  return (
    <div id='main' className={style.mainBlock}>
      <Particles
        className={style.particles}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className={style.container}>
        <Fade direction='up' triggerOnce>
          <div className={style.text}>
            <span>Hi There</span>
            <span>
              I am Petr <span>Prudnikov</span>
            </span>
            <ReactTypingEffect text={'Frontend Developer'} />
          </div>
          <div className={style.photo}>
            <Tilt>
              <div className={style.image}></div>
            </Tilt>
          </div>
        </Fade>
      </div>
    </div>
  )
}
