import { Canvas } from '@react-three/fiber'
// import './App.css'
import Experience from './components/Experience'
import Interface from './components/Interface'

function App() {

  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
      <color attach="background" args={["black"]} />
      <Experience />
      <Interface />
      </Canvas>
    </>
  )
}

export default App
