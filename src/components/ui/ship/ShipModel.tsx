import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Group } from "three";

type ShipModelProps = {
  model: string;
  lowSize: number;
  mediumSize: number;
  highSize: number;
};

function ShipModel({ model, lowSize, mediumSize, highSize }: ShipModelProps) {
  const group = useRef<Group | null>(null);
  const { scene, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, group);
  const { size } = useThree();

  let scale: number;
  if (size.width < 640) scale = lowSize;
  else if (size.width < 1024) scale = mediumSize;
  else scale = highSize;

  useEffect(() => {
    if (actions) {
      const firstAction = Object.values(actions)[0];
      if (firstAction) firstAction.play();
    }
  }, [actions]);

  return (
    <group
      ref={group}
      scale={[scale, scale, scale]}
      position={[0, -0.2, 0]}
      rotation={[0.3, Math.PI, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/airplane.glb");
useGLTF.preload("/spaceship.glb");

export default ShipModel;
