import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows, Html } from '@react-three/drei'
import type { Group } from 'three'

interface ModelProps {
  url: string
}

function Model({ url }: ModelProps) {
  const ref = useRef<Group>(null)
  const { scene } = useGLTF(url)


  return <primitive ref={ref} object={scene} scale={1.6} position={[0, -0.6, 0]} />
}

function Loader() {
  return (
    <Html center>
      <div className="text-xs text-slate-500 dark:text-slate-400 animate-pulse">
        Loading 3D model…
      </div>
    </Html>
  )
}

interface ModelViewerProps {
  url: string
  className?: string
}

export default function ModelViewer({ url, className }: ModelViewerProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0.2, 3.2], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#a78bfa" />
        <Suspense fallback={<Loader />}>
          <Model url={url} />
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.45}
            scale={6}
            blur={2.4}
            far={3}
          />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 1.9}
        />
      </Canvas>
    </div>
  )
}

useGLTF.preload(`${import.meta.env.BASE_URL}models/muhammad_ali_joya.glb`)
