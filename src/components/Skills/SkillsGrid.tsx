import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const optimizedImageURL = (url: string) =>
  `${url}?width=300&height=300&fit=cover`;

interface ImageCardProps {
  src: string;
  title: string;
  onLoaded: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title, onLoaded }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) onLoaded();
  }, [loaded, onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: loaded ? 1 : 0,
        y: loaded ? 0 : -20,
        transition: { duration: 0.8 },
      }}
    >
      <Image
        src={optimizedImageURL(src)}
        alt={title}
        fit="cover"
        w="full"
        h="200px"
        onLoad={() => setLoaded(true)}
      />
      <VStack p={4}>
        <Text fontStyle="italic">{title}</Text>
      </VStack>
    </motion.div>
  );
};

const SkillsGrid: React.FC = () => {
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  });

  const sampleImage = {
    src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/408aa8e2-5589-4cc3-dd8a-6645bb603500/public",
    title: "I like to program in Javascript and React",
    key: "image1",
  };

  const images = Array(300).fill(sampleImage);

  return (
    <Box className="flex justify-center w-screen h-screen">
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns={gridTemplateColumns}
        gap={6}
        w="full"
        px={5}
        py={10}
      >
        {images.map((item, index) => (
          <ImageCard
            key={`${item.key}-${index}`}
            src={item.src}
            title={item.title}
            onLoaded={() => {}}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsGrid;
