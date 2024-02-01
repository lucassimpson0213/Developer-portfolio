import  { useState } from 'react';
import { Grid, GridItem, Box, Text, Image, useBreakpointValue, VStack } from '@chakra-ui/react';
import { m } from 'framer-motion';

// Optimized image URL helper for Cloudflare image resizing
const optimizedImageURL = (url) => `${url}?width=300&height=300&fit=cover`;

const images = [
  {
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/<image_id>/<variant_name>',
    title: 'I like to program in Javascript and React',
    key: 'image1',
  },
  {
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c4cbad09-c40f-4820-3469-0aeb48f83600/<variant_name>',
    title: 'My Favorite Game of 2024',
    key: 'gow',
  },
  {
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c4cbad09-c40f-4820-3469-0aeb48f83600/<variant_name>',
    title: 'My Favorite Game of 2024',
    key: 'gow',
  },
  {
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c4cbad09-c40f-4820-3469-0aeb48f83600/<variant_name>',
    title: 'My Favorite Game of 2024',
    key: 'gow',
  },
  {
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c4cbad09-c40f-4820-3469-0aeb48f83600/<variant_name>',
    title: 'My Favorite Game of 2024',
    key: 'gow',
  },
  {
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c4cbad09-c40f-4820-3469-0aeb48f83600/<variant_name>',
    title: 'My Favorite Game of 2024',
    key: 'gow',
  },
  {
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c4cbad09-c40f-4820-3469-0aeb48f83600/<variant_name>',
    title: 'My Favorite Game of 2024',
    key: 'gow',
  },
  {
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c4cbad09-c40f-4820-3469-0aeb48f83600/<variant_name>',
    title: 'My Favorite Game of 2024',
    key: 'gow',
  },
  {
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c4cbad09-c40f-4820-3469-0aeb48f83600/<variant_name>',
    title: 'My Favorite Game of 2024',
    key: 'gow',
  },
  {
    
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c4cbad09-c40f-4820-3469-0aeb48f83600/<variant_name>',
    title: 'My Favorite Game of 2024',
    key: 'gow',
  },
  {
    src: 'https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c4cbad09-c40f-4820-3469-0aeb48f83600/<variant_name>',
    title: 'My Favorite Game of 2024',
    key: 'gow',
  },
  
  
];

const MotionBox = m(Box);

export function SkillsGrid() {
  const [imagesLoaded, setImagesLoaded] = useState({
    image1: false,
    gow: false,
    krystal: false,
    pic: false,
  });

  const handleImageLoad = (key) => {
    setImagesLoaded((prev) => ({ ...prev, [key]: true }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Responsive grid template columns
  const gridTemplateColumns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    md: "repeat(2, 1fr)",
    lg: "repeat(2, 1fr)",
  });

  return (
    <Box className="flex justify-center w-screen h-1/2">
      <Grid templateRows="repeat(2, 1fr)" templateColumns={gridTemplateColumns} gap={6} w="full" px={5} py={10}>
        {images.map((item) => (
          <GridItem key={item.key} colSpan={1}>
            <MotionBox
              height="300px"
              bg="white"
              shadow="md"
              rounded="lg"
              overflow="hidden"
              initial="hidden"
              animate={imagesLoaded[item.key] ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <Image
                src={optimizedImageURL(item.src)}
                alt={item.title}
                onLoad={() => handleImageLoad(item.key)}
                fit="cover"
                w="full"
                h="200px"
              />
              <VStack p={4}>
                <Text fontStyle="italic">{item.title}</Text>
              </VStack>
            </MotionBox>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default SkillsGrid;

