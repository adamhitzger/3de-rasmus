"use client";

import { useState, Suspense } from "react";
import { Image } from "@coconut-xr/koestlich";
import Card from "./Card";
import { Container } from "@coconut-xr/koestlich";
import { IconButton } from "@coconut-xr/apfel-kruemel";
import { ArrowBigLeft, ArrowBigRight } from "@coconut-xr/lucide-koestlich";

type CarouselProps = {
  imageUrls: string[];
};

export default function Carousel({ imageUrls, ...props }: CarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return imageUrls.length - 1;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <Container
      flexDirection="row"
      justifyContent="space-between"
      paddingY={30}
      alignItems="center"
    >
      <Card
        index={0}
        radius={25}
        ratio={2}
        {...props}
        height={130}
        flexGrow={0.1}
      >
        <IconButton margin="auto" onClick={showPrevImage}>
          <ArrowBigLeft minWidth={120} minHeight={120} />
        </IconButton>
      </Card>

      <Card index={1} radius={10} ratio={2} {...props} flexGrow={0}>
        <Suspense>
          <Image url={imageUrls[imageIndex]} width={640} borderRadius={30} />
        </Suspense>
      </Card>

      <Card
        index={2}
        radius={25}
        ratio={2}
        {...props}
        height={130}
        flexGrow={0.1}
      >
        <IconButton margin="auto" onClick={showNextImage}>
          <ArrowBigRight minWidth={120} minHeight={120} />
        </IconButton>
      </Card>
    </Container>
  );
}
