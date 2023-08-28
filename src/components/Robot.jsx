import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { gsap } from 'gsap';
import { useFrame } from '@react-three/fiber';

const Robot = (props) => {
  const { nodes, materials } = useGLTF('./models/robot/robot/scene-transformed.glb');
  const robotRef = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  }, []);

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 2, ease: 'power1.inOut' } });
    tl.current
      .to(robotRef.current.rotation, { y: -1 }, 0)
      .to(robotRef.current.position, { x: 1 }, 0)

      .to(robotRef.current.rotation, { y: 1 }, 4)
      .to(robotRef.current.position, { x: -1 }, 4)

      .to(robotRef.current.rotation, { y: 0 }, 8)
      .to(robotRef.current.rotation, { x: 1 }, 8)
      .to(robotRef.current.position, { x: 0 }, 8)

      .to(robotRef.current.rotation, { y: 0 }, 10)
      .to(robotRef.current.rotation, { x: -1 }, 10)
      .to(robotRef.current.position, { x: 0 }, 10)

      .to(robotRef.current.rotation, { y: 0 }, 14)
      .to(robotRef.current.rotation, { x: 0 }, 14)
      .to(robotRef.current.position, { x: 0 }, 14)

      .to(robotRef.current.rotation, { y: 0 }, 18)
      .to(robotRef.current.rotation, { x: 0 }, 18)
      .to(robotRef.current.position, { x: 0 }, 18);
  }, []);

  return (
    <group {...props} dispose={null} ref={robotRef}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['medbot.003']} rotation={[0, Math.PI * 3 / 2, 0]} />
    </group>
  );
};

export default Robot;
useGLTF.preload('./models/robot/robot/scene-transformed.glb');
