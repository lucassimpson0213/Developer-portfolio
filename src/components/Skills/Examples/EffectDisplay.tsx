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
  width: "60vw", // Moved inside the style for consistency
};

interface Quote {
  text: string;
  author?: string; // Assuming author is optional
}

interface DisplayProps {
  quotes: Quote[]; // Changed to array of Quote
}

function EffectDisplay({ quotes }: DisplayProps) {
  if (!Array.isArray(quotes) || quotes.length === 0) {
    return <div>No quotes available</div>;
  }

  return (
    <div>
      <Center>
        <Heading mt={10} mb={5} fontFamily={"adobe-garamond-pro"}>
          Use Effect Example
        </Heading>
      </Center>
      <Divider className="mb-20" />
      <Flex justify={"center"} alignContent={"center"}>
        <Carousel
          dotPosition={"right"}
          style={{ width: "700px", height: "200px" }}
        >
          {quotes.map((quote, index) => (
            <div key={index}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <h3 style={contentStyle}>
                  {quote.text} - {quote.author ?? "Unknown"}
                </h3>
              </motion.div>
            </div>
          ))}
        </Carousel>
      </Flex>
    </div>
  );
}

export default EffectDisplay;
