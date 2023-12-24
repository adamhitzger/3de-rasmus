"use client";

import { Container, Text } from "@coconut-xr/koestlich";
import colors from "../theme/colors";

type FooterProps = {
  text: string;
};

export default function Footer({ text }: FooterProps) {
  return (
    <Container flexDirection="row" index={2}>
      <Text
        fontSize={48}
        lineHeightMultiplier={1.5}
        letterSpacing={1}
        horizontalAlign="center"
        verticalAlign="center"
        color={colors.white}
      >
        {text}
      </Text>
    </Container>
  );
}
