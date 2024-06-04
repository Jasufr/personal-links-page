import { Canvas } from '@react-three/fiber'
import './index.css'
import Experience from './components/Experience'
import Interface from './components/Interface'
import { Html } from '@react-three/drei'

function App() {

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["black"]} />
        <Experience />
        <Html fullscreen>
          <Interface />
        </Html>
      </Canvas>
    </>
  )
}

export default App
