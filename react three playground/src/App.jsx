import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/earring.glb");
  return <primitive object={scene} {...props} />;
}

function App() {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 45 }} style={{ position: "absolute" }}>
      <color attach="background" args={["#fff"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-0.1, Math.PI / 4]}
      >
        <Stage environment={"apartment"}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  );
}

export default App;
