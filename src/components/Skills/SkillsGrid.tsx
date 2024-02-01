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
  title: string | undefined;
  onLoaded: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title, onLoaded }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) onLoaded();
  }, [loaded, onLoaded]);

  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: loaded ? 1 : 0,
        y: loaded ? 0 : -20,
        transition: { duration: 0.8 },
      }}
      p={5}
      boxShadow="md"
      rounded="lg"
      bg="white"
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
        <Text fontWeight="bold" fontSize="lg">
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
      key: "image1",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/90e3c3e3-fd5f-4e56-9b72-6170c04fe800/public",
      title: "Harnessing the power of JavaScript for web development",
      key: "image2",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/bd6787bc-97a6-4bd1-d5a8-ee272f782300/public",
      title: "Innovating with Cloudflare for optimized image delivery",
      key: "image3",
    },
    // Continuing with the placeholders
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/9396853b-c69b-4003-ad3e-aef3cb5d0800/public",
      title: "Integrating responsive designs in modern web applications",
      key: "image4",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/f9ade3c6-8512-42a1-f7f2-94d9e8b1d800/public",
      title: "Exploring new dimensions in React and Cloudflare",
      key: "image5",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/d34be275-84f3-47ac-e4dc-dc0a9dd6fc00/public",
      title: "Leveraging Cloudflare for secure and fast image delivery",
      key: "image6",
    },
    // Assuming you'd continue for each image you've listed
    // Example for the last image, ensure to adjust the src and title accordingly
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/bd6787bc-97a6-4bd1-d5a8-ee272f782300/public",
      title: "The art of coding: Bringing ideas to life with React",
      key: "imageN", // Replace N with the actual number
    },

    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/408aa8e2-5589-4cc3-dd8a-6645bb603500/public",
      title: "Diving into React",
      key: "image1",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/90e3c3e3-fd5f-4e56-9b72-6170c04fe800/public",
      title: "Exploring JavaScript",
      key: "image2",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/bd6787bc-97a6-4bd1-d5a8-ee272f782300/public",
      title: "Leveraging Cloudflare",
      key: "image3",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/9396853b-c69b-4003-ad3e-aef3cb5d0800/public",
      title: "Responsive Web Design",
      key: "image4",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/f9ade3c6-8512-42a1-f7f2-94d9e8b1d800/public",
      title: "State Management in React",
      key: "image5",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/d34be275-84f3-47ac-e4dc-dc0a9dd6fc00/public",
      title: "Scalable Web Architecture",
      key: "image6",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/9ba96d86-1665-41f1-1141-cbfe369c0300/public",
      title: "Functional Programming",
      key: "image7",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/878be7de-308d-4a3b-de3d-13f0fbe07500/public",
      title: "User Experience Design",
      key: "image8",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/ef482bc3-7b4f-4d16-44de-6ff24cde5300/public",
      title: "TypeScript Essentials",
      key: "image9",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/2afe2f5c-91f0-42f7-3f29-5dfbcb65f400/public",
      title: "GraphQL Data Fetching",
      key: "image10",
    },
    // Reusing URLs with new titles to demonstrate a variety of themes
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/3e0fb959-dc2d-49fb-738d-40bf1c351a00/public",
      title: "Serverless Functions",
      key: "image11",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/408aa8e2-5589-4cc3-dd8a-6645bb603500/public",
      title: "Web Workers for Performance",
      key: "image12",
    },
    {
      src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/90e3c3e3-fd5f-4e56-9b72-6170c04fe800/public",
      title: "Advanced CSS Techniques",
      key: "image13",
    },
    { src: "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/bd6787bc-97" },

    // Add additional images here, following the same structure
  ];

  // The rest of your component remains unchanged

  return (
    <Box className="flex justify-center w-screen h-screen" p={5}>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns={gridTemplateColumns}
        gap={6}
      >
        {sampleImages.map((item, index) => (
          <ImageCard
            key={`${item.key}-${index}`}
            src={item.src}
            title={item.title || "Default Title"}
            onLoaded={() => {}}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsGrid;
