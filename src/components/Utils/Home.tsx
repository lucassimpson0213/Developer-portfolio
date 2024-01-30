import { Button, ButtonGroup, Flex } from "@chakra-ui/react";
import NewModel from "./NewModel";
import { Link } from "react-router-dom";

export function Home() {
  // Define the button labels and their corresponding routes
  const buttons = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Blog", path: "/blog" },
    { label: "SignUp", path: "/signup" },
    { label: "Examples", path: "/skills/examples" },
  ];

  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      justify="center"
      spacing={40}
      align="center"
      w={"100%"} // Stack columns on mobile and use row on medium and larger screens
      h="auto" // Automatically adjust the height based on content
      bg="gray.600"
      rounded="3xl"
      p={{ base: 3, md: 5 }} // Padding on mobile and larger screens
    >
      <Flex
        justify="center"
        direction="row"
        w={{ base: "100%", md: "50%" }}
        spacing={20}
        align="center"
        flexDir={{ base: "column", md: "row" }}
      >
        {buttons.map(({ label, path }) => (
          <Button
            fontFamily="adobe-garamond-pro"
            className="justify-center items-center m-2 size-30 text-xl text-white"
            key={label}
          >
            <Link to={path}>{label}</Link>
          </Button>
        ))}
      </Flex>

      <NewModel
        ModelTitle="Introduction"
        ModelText={`Hello, this is my webpage! 
          You can go down to the homepage for my introduction.
          There's also a skills section where I display
          some of the skills I've gained over my time here!
          I like to do web development, gaming, and I also like to work out!`}
      />
    </Flex>
  );
}

export default Home;
