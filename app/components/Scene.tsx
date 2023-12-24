"use client";
import React, { useMemo } from "react";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment } from "@react-three/drei";
import { RootContainer } from "@coconut-xr/koestlich";
import colors from "../theme/colors";
import { Glass } from "@coconut-xr/apfel-kruemel";
import { DefaultStyleProvider } from "@coconut-xr/koestlich";
import RectMesh from "../objects/Rect";

type SceneProps = {
  children: React.ReactNode;
};

export default function Scene({ children }: SceneProps) {
  const mesh = useMemo(() => new RectMesh(), []);
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [5, 10, 5] }}>
        <Environment
          files={"/lepzig.hdr"}
          ground={{ height: 30, radius: 100, scale: 100 }}
        />
        <OrbitControls />
        <Float speed={1} rotationIntensity={1.5} floatingRange={[0.5, 1.4]}>
          <RootContainer
            sizeX={3}
            sizeY={2}
            flexDirection="column"
            padding={20}
            position={[0, 5, 0]}
          >
            <Glass padding={20} borderRadius={48}>
              <DefaultStyleProvider color={colors.white}>
                {children}
              </DefaultStyleProvider>
            </Glass>
          </RootContainer>
        </Float>
      </Canvas>
    </div>
  );
}
