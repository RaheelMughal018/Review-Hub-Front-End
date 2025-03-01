// import React, { Suspense, useRef } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import CanvasLoader from "../Loader";
// import RubikCube from "./RubikCube";

// const RubikCanva = () => {
//   const rubikCubeRef = useRef();

//   // Use useFrame to update rotation on each frame
//   useFrame((state, delta) => {
//     // Rotate the Rubik's Cube continuously
//     if (rubikCubeRef.current) {
//       rubikCubeRef.current.rotation.y += 0.005 * delta;
//     }
//   });

//   return (
//     <Canvas
//       shadows
//       frameloop="demand"
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [5, 5, 5], // Adjust the initial camera position
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <RubikCube ref={rubikCubeRef} />

//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default RubikCanva;
