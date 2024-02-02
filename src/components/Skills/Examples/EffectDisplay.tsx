import React from "react";
import { Carousel } from "antd";
import { Flex, Heading, Divider, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100vw", // Consider this width in relation to the carousel container
};

interface Quote {
  text: string;
  author?: string;
}

interface DisplayProps {
  quotes: Quote[];
}

const CarouselItem: React.FC<Quote> = ({ text, author }) => (
  <div>
    {text} - {author || "Unknown"}
  </div>
);

const EffectDisplay: React.FC<DisplayProps> = ({ quotes }) => {
  if (!Array.isArray(quotes) || quotes.length === 0) {
    return <div>No quotes available</div>;
  }

  return (
    <Flex direction="column" align="center" justify="center" width="100vw">
      <Center>
        <Heading
          fontSize={{
            base: "16px",
            sm: "20px",
            md: "24px",
            lg: "28px",
            xl: "32px",
            "2xl": "36px",
          }}
          fontFamily="adobe-garamond-pro"
        >
          Use Effect Example
        </Heading>
      </Center>
      <Divider my={5} />
      <Carousel
        dotPosition="right"
        style={{
          marginLeft: "70vw",
          maxWidth: "50vw",
          width: "100vw",
          height: "50vh",
          minWidth: "10vw",
        }} // Adjusted for better centering
      >
        {quotes.map((quote, index) => (
          <CarouselItem key={index} {...quote} />
        ))}
      </Carousel>
    </Flex>
  );
};

export default EffectDisplay;
