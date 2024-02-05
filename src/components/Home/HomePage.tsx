import { Box, Text, Image, Flex, Heading } from "@chakra-ui/react";
import * as Icon from "react-feather";

const src1 =
  "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/db7b7639-d7d3-4d51-bbb2-0f345e636800/public";

function HomePage() {
  return (
    <>
      <Flex w="100%" alignItems="center" justify="center">
        <Box
          alignContent={"center"}
          textAlign="center"
          marginTop="4rem"
          width="30%"
        >
          <div>
            <Heading
              fontFamily={"adobe-garamond-pro"}
              fontSize="3xl"
              marginBottom="1rem"
            >
              <Icon.User size={60} />
              Hi there, I'm Lucas!
            </Heading>
            <Text fontFamily={"adobe-garamond-pro"} mb={3}>
              This is my webpage! I am a junior at Illinois state university!{" "}
            </Text>
            <Text fontFamily={"adobe-garamond-pro"}>
              I study Computer Science and I have an internship with GrowMark
              for Summer 2024
            </Text>
            <Text>
              <div></div>
            </Text>
            <Text fontFamily={"adobe-garamond-pro"}>
              I used React and several component Libraries to construct this. I
              enjoy doing web development in my spare time.
            </Text>
            <Text fontFamily={"adobe-garamond-pro"}>
              Check out this project on github. My socials are linked below
            </Text>{" "}
          </div>
        </Box>
        <Image
          ml={10}
          borderRadius="full"
          boxSize="120px"
          src={src1}
          alt="My girlfriend krystal and I"
        />
      </Flex>

      <Flex
        mt={20}
        w={"91vw"}
        justify={"center"}
        align={"center"}
        direction={"row"}
      >
        <a
          href="https://www.instagram.com/lucassimpson33/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Instagram className="mr-5" size={"40"} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100005845240530"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Facebook className="mr-5" size={"40"} />
        </a>
        <a
          href="https://github.com/lucassimpson0213"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub className="mr-5" size={"40"} />
        </a>
      </Flex>
    </>
  );
}

export default HomePage;
