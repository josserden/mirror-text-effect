import { render } from 'react-dom'
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { useProgress, Html } from '@react-three/drei'

import Scene1 from './Scene1'

import './base.css'

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <span style={{ color: '#FFFFFF' }}>{progress} % loaded</span>
    </Html>
  )
}

function App(props) {
  const { scene = 1 } = props
  return (
    <Canvas concurrent shadowMap camera={{ position: [0, 0, 2], fov: 70 }}>
      <color attach="background" args={['#000']} />
      <Suspense fallback={<Loader />}>{scene === 1 && <Scene1 />}</Suspense>
      <ambientLight intensity={0.2} />
    </Canvas>
  )
}

render(<App />, document.querySelector('#root'))
