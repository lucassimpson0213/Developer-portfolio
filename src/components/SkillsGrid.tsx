import React from 'react';
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { Card, Typography } from "antd";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import gow from '../../public/stock-photo-boy-playing-god-of-war-ragnarok-with-playstation-controller-jul-sao-paulo-brazil-2180836335.jpg';
export function SkillsGrid() {
  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(2, 1fr)"
      gap={4}
      w="full"
      h="auto"
      className='mt-40'
    >
      { /* Array of images and titles */ }
      {[
        { src: pic4 , title: "Coding" },
        { src: pic3, title: "Another Skill" },
        {src: gow, title: 'my favorite game of 2024'}

        
        // Add more images and titles as needed
      ].map((item, index) => (
        <GridItem key={index}>
          <Card cover={
            <Box height="300px" width="100%" overflow="hidden">
              <img src={item.src} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
          }>
            <Typography.Text style={{ fontStyle: 'italic' }}>
              {item.title}
            </Typography.Text>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
}

export default SkillsGrid;


