import { Container, Object } from "@coconut-xr/koestlich";
import CardMesh from "../objects/Card";
import colors from "../theme/colors";
import { ComponentPropsWithoutRef, useMemo } from "react";

interface CardProps extends ComponentPropsWithoutRef<typeof Container> {
  hoverAnimation?: boolean;
  ratio: number;
  radius: number;
}

export default function Card({
  hoverAnimation = true,
  radius,
  ratio,
  ...props
}: CardProps) {
  const mesh = useMemo(() => new CardMesh(radius, ratio), [ratio, radius]);

  return (
    <Object
      {...props}
      object={mesh}
      padding={6}
      depth={15}
      color={colors.aqua}
    />
  );
}
