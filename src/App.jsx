// import * as THREE from 'three'
// import { Suspense, useRef, useState} from 'react'
// import {Canvas, useFrame, useThree} from '@react-three/fiber'
// import { useGLTF, Environment } from '@react-three/drei'


// function Box({ z }) {

//   const ref = useRef()
//   const {viewport, camera} = useThree()
//   // const [clicked, setClicked] = useState(false)
//   const {width, height} = viewport.getCurrentViewport(camera, [0,0, z])



//   const [data] = useState({
//     x: THREE.MathUtils.randFloatSpread(2),
//     y: THREE.MathUtils.randFloatSpread(height),
  
//   })

//   useFrame( (state)=> {
//     ref.current.position.set(data.x * width, (data.y += 0.5), z)

//     if(data.y > height / 1.5) {
//       data.y = -height / 1.5
//     }

//     ref.current.rotation.x = Math.sin(state.clock.elapsedTime ) * 2
//     // data.z = THREE.MathUtils.lerp(ref.current.position.z, clicked ? 1 : 0, 0.1) 

//   })

//   return(
//   <mesh ref={ref}>
//     <boxGeometry />
//       <meshBasicMaterial color='purple'/>
//   </mesh>
// )


// }


// function Dollar({...props}) {
//   const { scene } = useGLTF("/dollar.glb")
//   return <primitive object={scene} {...props}  />
// }

// export default function App({ count = 100}) {
//   return(
//     <Canvas>
//       <ambientLight intensity={0.5} />
//       <spotLight position={[10,10,10]} intensity={2} />
//       <Suspense fallback={null}>
//         <Dollar rotation={[1.5,3,0]} scale={2} position={[0,-4,-8]} />      
//         <Environment preset='sunset' />
//         {Array.from({length: count }, (_, i) => (<Box key={i} z={-i} />))}
//       </Suspense>
//     </Canvas>
//   )
// }












///Experiment

import * as THREE from 'three'
import { Suspense, useRef, useState} from 'react'
import {Canvas, useFrame, useThree} from '@react-three/fiber'
// import { useGLTF, Environment } from '@react-three/drei';

import {EffectComposer, DepthOfField} from "@react-three/postprocessing"

// import { Html } from '@react-three/drei'



function Dollar({ z }) {
  const ref = useRef()

  const {viewport, camera} = useThree()
  // const [clicked, setClicked] = useState(false)
  const {width, height} = viewport.getCurrentViewport(camera, [0,0, z])

  // const { nodes, materials } = useGLTF('/dollar-transformed.glb')



  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI
  
  })

  // useFrame( (state)=> {
  //   ref.current.rotation.set((data.rX += 0.05), (data.rY += 0.05), (data.rZ += 0.05))
  //   ref.current.position.set(data.x * width, (data.y += 0.15), z)

  //   if(data.y > height / 1.5) {
  //     data.y = -height / 1.5
  //   }

  //   ref.current.rotation.y = Math.sin(state.clock.elapsedTime ) * 0.5
  //   ref.current.rotation.x = Math.sin(state.clock.elapsedTime ) * 0.5
  //   // data.z = THREE.MathUtils.lerp(ref.current.position.z, clicked ? 1 : 0, 0.1) 

  // })

  return(
    <mesh ref={ref}>
      <boxGeometry />
        <meshBasicMaterial color='purple'/>
    </mesh>


    // <mesh 
    //   ref={ref}
    //   geometry={nodes.Object_2.geometry} 
    //   material={materials.Material} 
    //   scale={100} 
    // />

  )

}


// function Dollar({...props}) {
//   const { scene } = useGLTF("/dollar.glb")
//   return <primitive object={scene} {...props}  />
// }

// function Dollar({...props}) {
//   const group = useRef()
//   const { nodes, materials } = useGLTF('/dollar-transformed.glb')
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <mesh 
//       geometry={nodes.Object_2.geometry} 
//       material={materials.Material} 
//       rotation={[-Math.PI / 2, 0, 0]} 
//       scale={48.373} 
//       material-emissive="blue" />
//     </group>
//   )
// }

// export default function App({ count = 100}) {
//   return(
//     <Canvas gl={{alpha: false}} camera={{near:0.01, far:110}}>
//       <color attach="background" args={["#ffbf40"]}/>
//       {/* <ambientLight intensity={0.5} /> */}
//       <spotLight position={[10,10,10]} intensity={1} />
//       <Suspense fallback={null}>
//         {/* <Dollar rotation={[1.5,3,0]} scale={2} position={[0,-4,-8]} />      
//         <Dollar rotation={[1.5,3,0]} scale={2} position={[0,-8,-12]} />       */}
//         <Environment preset='sunset' />
//         {Array.from({length: count }, (_, i) => (<Dollar key={i} z={-i} />))}
//         <EffectComposer>
//           <DepthOfField target={[0,0,30]} focalLength={1} bokehScale={11} height={700}/>
//         </EffectComposer>
//       </Suspense>
//     </Canvas>
//   )
// }
export default function App({ count = 120, depth = 20}) {
  return(
    <Canvas gl={{alpha: false, antialias:false}} camera={{near:0.1, far:110, fov:70}}>
      <color attach="background" args={[ "#4b5361"]} />
      {/* <ambientLight intensity={0.5} /> */}
      <spotLight position={[10,10,10]} intensity={5} />
      <Suspense fallback={null}>
        <Dollar rotation={[1.5,3,0]} scale={2} position={[0,-4,-8]} />      
        <Dollar rotation={[1.5,3,0]} scale={2} position={[0,-8,-12]} />      
        {Array.from({length: count }, (_, i) => (
          <Dollar key={i} z={-(i / count) * depth - 20} />
        ))}
        {/* <Environment preset='sunset' /> */}
        <EffectComposer>
          <DepthOfField target={[0,0, depth/ 2]} focalLength={1} bokehScale={0} height={700}/>
        </EffectComposer>

        {/* <Html>
        <div style={{ position: 'relative', top: '50%', left: "0",  }}>
          <h1 style={{fontSize: "7.2rem"}}>Hello, React Three Fiber!</h1>
          <p>This is an HTML overlay.</p>
        </div>
      </Html> */}
      
      </Suspense>
    </Canvas>
  )
}







// import * as THREE from 'three'
// import { useRef, useState } from 'react'
// import { Canvas, useThree, useFrame } from '@react-three/fiber'
// // https://github.com/pmndrs/drei
// import { useGLTF, Detailed, Environment } from '@react-three/drei'
// // https://github.com/pmndrs/react-postprocessing
// // https://github.com/vanruesc/postprocessing
// import { EffectComposer, DepthOfField } from '@react-three/postprocessing'

// function Banana({ index, z, speed }) {
//   const ref = useRef()
//   // useThree gives you access to the R3F state model
//   const { viewport, camera } = useThree()
//   // getCurrentViewport is a helper that calculates the size of the viewport
//   const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z])
//   // useGLTF is an abstraction around R3F's useLoader(GLTFLoader, url)
//   // It can automatically handle draco and meshopt-compressed assets without you having to
//   // worry about binaries and such ...
//   const { nodes, materials } = useGLTF('/banana.glb')
//   // By the time we're here the model is loaded, this is possible through React suspense

//   // Local component state, it is safe to mutate because it's fixed data
//   const [data] = useState({
//     // Randomly distributing the objects along the vertical
//     y: THREE.MathUtils.randFloatSpread(height * 2),
//     // This gives us a random value between -1 and 1, we will multiply it with the viewport width
//     x: THREE.MathUtils.randFloatSpread(2),
//     // How fast objects spin, randFlost gives us a value between min and max, in this case 8 and 12
//     spin: THREE.MathUtils.randFloat(8, 12),
//     // Some random rotations, Math.PI represents 360 degrees in radian
//     rX: Math.random() * Math.PI,
//     rZ: Math.random() * Math.PI
//   })

//   // useFrame executes 60 times per second
//   useFrame((state, dt) => {
//     // Make the X position responsive, slowly scroll objects up at the Y, distribute it along the Z
//     // dt is the delta, the time between this frame and the previous, we can use it to be independent of the screens refresh rate
//     // We cap dt at 0.1 because now it can't accumulate while the user changes the tab, it will simply stop
//     if (dt < 0.1) ref.current.position.set(index === 0 ? 0 : data.x * width, (data.y += dt * speed), -z)
//     // Rotate the object around
//     ref.current.rotation.set((data.rX += dt / data.spin), Math.sin(index * 1000 + state.clock.elapsedTime / 10) * Math.PI, (data.rZ += dt / data.spin))
//     // If they're too far up, set them back to the bottom
//     if (data.y > height * (index === 0 ? 4 : 1)) data.y = -(height * (index === 0 ? 4 : 1))
//   })

//   // Using drei's detailed is a nice trick to reduce the vertex count because
//   // we don't need high resolution for objects in the distance. The model contains 3 decimated meshes ...
//   return (
//     <Detailed ref={ref} distances={[0, 65, 80]} >
//       <mesh geometry={nodes.banana_high.geometry} material={materials.skin} material-emissive="#ff9f00" />
//       <mesh geometry={nodes.banana_mid.geometry} material={materials.skin} material-emissive="#ff9f00" />
//       <mesh geometry={nodes.banana_low.geometry} material={materials.skin} material-emissive="#ff9f00" />
//     </Detailed>
//   )
// }

// export default function Bananas({ speed = 1, count = 80, depth = 80, easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)) }) {
//   return (
//     // No need for antialias (faster), dpr clamps the resolution to 1.5 (also faster than full resolution)
//     <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 15 }}>
//       <color attach="background" args={['#ffbf40']} />
//       <spotLight position={[10, 20, 10]} penumbra={1} intensity={3} color="orange" />
//       {/* Using cubic easing here to spread out objects a little more interestingly, i wanted a sole big object up front ... */}
//       {Array.from({ length: count },  (_, i) => <Banana key={i} index={i} z={Math.round(easing(i / count) * depth)} speed={speed} /> /* prettier-ignore */)}
//       <Environment preset="sunset" />
//       {/* Multisampling (MSAA) is WebGL2 antialeasing, we don't need it (faster) */}
//       <EffectComposer multisampling={0}>
//         <DepthOfField target={[0, 0, 60]} focalLength={0.4} bokehScale={14} height={700} />
//       </EffectComposer>
//     </Canvas>
//   )
// }

