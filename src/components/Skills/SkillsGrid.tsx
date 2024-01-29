import { useState, useEffect } from "react";
import { Grid, GridItem, Box, Text, Divider, Image } from "@chakra-ui/react";
import { Card } from "antd";
import { LazyMotion, m, domAnimation } from "framer-motion";
import FactAccordian from "./FactAccordian";

import pic3 from "../../assets/pic3.jpg";
import gow from "../../../public/stock-photo-boy-playing-god-of-war-ragnarok-with-playstation-controller-jul-sao-paulo-brazil-2180836335.jpg";
import krystal from "../../assets/IMG_4746-min.jpeg";
import nature from "../../assets/IMG_4282-min.jpeg";

// Motion components using 'm' prefix
const MotionDivider = m(Divider);
const MotionBox = m(Box);

type ImageLoadedState = {
  pic3: boolean;
  gow: boolean;
  krystal: boolean;
  nature: boolean;
};

export function SkillsGrid() {
  const [imagesLoaded, setImagesLoaded] = useState<ImageLoadedState>({
    pic3: false,
    gow: false,
    krystal: false,
    nature: false,
  });

  useEffect(() => {
    // This example doesn't fetch data but you can implement your data fetching logic here
  }, []);

  const handleImageLoad = (image: keyof ImageLoadedState) => {
    setImagesLoaded((prev) => ({ ...prev, [image]: true }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  type ImageItem = {
    src: string;
    title: string;
    key: keyof ImageLoadedState;
  };

  const images: ImageItem[] = [
    { src: pic3, title: "Another Skill", key: "pic3" },
    { src: gow, title: "My Favorite Game of 2024", key: "gow" },
    { src: krystal, title: "My Beautiful Girlfriend", key: "krystal" },
    { src: nature, title: "A Picture I Took at a Local Park", key: "nature" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <>
        <MotionDivider
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          my={5}
          layout
        />

        <div className="flex justify-center w-screen h-1/2">
          <Grid
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={6}
            w="2/3"
            h="auto"
            className="mt-40"
          >
            {images.map((item) => (
              <GridItem key={item.key}>
                <Card
                  className="w-3/4"
                  cover={
                    <MotionBox
                      height="300px"
                      width="100%"
                      overflow="hidden"
                      initial="hidden"
                      animate={imagesLoaded[item.key] ? "visible" : "hidden"}
                      variants={fadeInUp}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        onLoad={() => handleImageLoad(item.key)}
                      />
                    </MotionBox>
                  }
                >
                  <Text style={{ fontStyle: "italic" }}>{item.title}</Text>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </div>

        <FactAccordian />
      </>
    </LazyMotion>
  );
}

export default SkillsGrid;
