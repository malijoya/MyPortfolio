import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Html } from '@react-three/drei'
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
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        frameloop="demand"
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 2]} intensity={1.4} />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} color="#a78bfa" />
        <hemisphereLight intensity={0.3} groundColor="#0a0a0f" />
        <Suspense fallback={<Loader />}>
          <Model url={url} />
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
