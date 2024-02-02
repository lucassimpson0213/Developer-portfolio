import { Heading, Text, Flex, Center } from "@chakra-ui/react";

interface HeaderProps {
  body: string;
  header: string;
}

function Header({ body, header }: HeaderProps) {
  // Define motion variants for the fade-in effect

  return (
    <Flex
      direction={"column"}
      mt={10}
      mb={30}
      align="center"
      justify="center"
      w="100%"
    >
      <Heading fontSize={60} fontFamily="adobe-garamond-pro">
        {header}
      </Heading>
      <Center>
        <Text fontFamily="adobe-garamond-pro" w="90" fontSize="xl">
          {body}
        </Text>
      </Center>
    </Flex>
  );
}

export default Header;
