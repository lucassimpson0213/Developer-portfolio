import React from "react";
import { Box, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { LazyMotion, m, domAnimation } from "framer-motion";

type Props = {
  name: string;
  body: string;
  date: Date;
  image: string;
};

const Blog: React.FC<Props> = ({ name, body, date, image }) => {
  // Motion variants for the fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{
          borderRadius: "md",
          overflow: "hidden",
          maxWidth: "800px",
          margin: "auto",
        }}
        layout
      >
        <Box border="1px" borderColor="gray.200" p="4">
          <img
            src={image}
            style={{ width: "100%", borderRadius: "lg" }}
            alt={name}
          />
          <Stack mt="6" spacing="3">
            <Heading
              m={5}
              fontFamily="adobe-garamond-pro"
              fontWeight={20}
              size="xl"
            >
              {name}
            </Heading>
            <Text m={5} fontFamily="adobe-garamond-pro">
              {body}
            </Text>
            <Button>Open</Button>
            <Text m={5} fontFamily="adobe-garamond-pro" color="blue.800">
              {date.toUTCString()}
            </Text>
          </Stack>
        </Box>
      </m.div>
    </LazyMotion>
  );
};

export default Blog;

