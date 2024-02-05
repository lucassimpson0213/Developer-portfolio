import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Image,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

interface ImageCardProps {
  src: string;
  title: string;
  onLoaded: () => void;
}

const optimizedImageURL = (url: string): string =>
  `${url}?width=300&height=300&fit=cover`;

const ImageCard: React.FC<ImageCardProps> = ({ src, title, onLoaded }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded) onLoaded();
  }, [loaded, onLoaded]);

  const bgColor = useColorModeValue("white", "gray.700"); // Light mode is white, dark mode is gray.700
  const textColor = useColorModeValue("gray.800", "gray.200"); // Light mode text color, dark mode text color

  return (
    <Box p={5} boxShadow="md" rounded="lg" bg={bgColor}>
      <Image
        src={optimizedImageURL(src)}
        alt={title}
        fit="cover"
        w="full"
        h="200px"
        onLoad={() => setLoaded(true)}
      />
      <VStack p={4}>
        <Text fontWeight="bold" fontSize="lg" color={textColor}>
          {title}
        </Text>
      </VStack>
    </Box>
  );
};

const SkillsGrid: React.FC = () => {
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)",
  });

  const sampleImages = [
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/408aa8e2-5589-4cc3-dd8a-6645bb603500/public",
      title: "Crafting pixel-perfect UIs with React",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/90e3c3e3-fd5f-4e56-9b72-6170c04fe800/public",
      title: "Harnessing the power of JavaScript for web development",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/bd6787bc-97a6-4bd1-d5a8-ee272f782300/public",
      title: "Innovating with Cloudflare for optimized image delivery",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/9396853b-c69b-4003-ad3e-aef3cb5d0800/public",
      title: "Integrating responsive designs in modern web applications",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/f9ade3c6-8512-42a1-f7f2-94d9e8b1d800/public",
      title: "Exploring new dimensions in React and Cloudflare",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/d34be275-84f3-47ac-e4dc-dc0a9dd6fc00/public",
      title: "Leveraging Cloudflare for secure and fast image delivery",
    },
    // Add more images as needed
  ];

  return (
    <Box className="flex justify-center w-screen h-screen" p={5}>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns={gridTemplateColumns}
        gap={6}
      >
        {sampleImages.map((item, index) => (
          <ImageCard
            key={index.toString()}
            src={item.src}
            title={item.title}
            onLoaded={() => console.log("Image loaded:", item.title)}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsGrid;
