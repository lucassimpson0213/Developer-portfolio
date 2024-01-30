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
  width: "60vw",
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
    <motion.div whileHover={{ scale: 1.1 }} style={contentStyle}>
      {text} - {author || "Unknown"}
    </motion.div>
  </div>
);

const EffectDisplay: React.FC<DisplayProps> = ({ quotes }) => {
  if (!Array.isArray(quotes) || quotes.length === 0) {
    return <div>No quotes available</div>;
  }

  return (
    <div className="sm:w-screen md:w-screen">
      <Center>
        <Heading mt={10} mb={5} fontFamily="adobe-garamond-pro">
          Use Effect Example
        </Heading>
      </Center>
      <Divider className="mb-20" />
      <Flex justify="center" alignContent="center">
        <Carousel dotPosition="right" style={{ width: "700px", height: "200px" }}>
          {quotes.map((quote, index) => (
            <CarouselItem key={index} {...quote} />
          ))}
        </Carousel>
      </Flex>
    </div>
  );
};

export default EffectDisplay;

