import HeroText from '../Components/HeroText'
import ParallaxBackground from '../Components/ParallaxBackground'
import { Astronaut } from '../Components/Astronaut'
import { Canvas } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { Suspense } from 'react'
import Loader from '../Components/Loader'

const Hero = () => {
  return (
    <section className='relative flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden w-full' id='home'>
      <ParallaxBackground/>
      <HeroText/>
      <figure
      className='absolute inset-0 lg:ml-50'
      style={{width:"100vw", height: "100vh"}}
      >
        <Canvas >
          <Suspense fallback = {<Loader/>}>
            <Float>
              <Astronaut scale={window.innerWidth < 768 ? 1 : 2} />
            </Float>
          </Suspense>
        </Canvas>
      </figure>
    </section>
  )
}

export default Hero
