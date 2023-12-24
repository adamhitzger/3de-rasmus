"use client";

import { useRouter } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";
import Card from "./Card";
import { Box, Text, Container } from "@coconut-xr/koestlich";
import colors from "../theme/colors";
import Link from "next/link";

interface MenuButtonProps extends ComponentPropsWithoutRef<typeof Box> {
  label: string;
}

function MenuButton({ label, ...props }: MenuButtonProps) {
  return (
    <Card radius={20} ratio={2} {...props} height={128} flexGrow={1}>
      <Text fontSize={64} margin="auto" paddingX={10} color={colors.white}>
        {label}
      </Text>
    </Card>
  );
}

export default function Navbar() {
  const router = useRouter();
  return (
    <Container
      index={0}
      flexDirection="row"
      padding={8}
      gapColumn={15}
      justifyContent="center"
    >
      <MenuButton label="Home" onClick={() => router.push("/")} />
      <MenuButton label="Practises" onClick={() => router.push("/practises")} />
      <MenuButton
        label="Culture"
        onClick={() => router.push("/culture/leipzig")}
      />
      <MenuButton label="Freetime" onClick={() => router.push("/freetime")} />
    </Container>
  );
}
