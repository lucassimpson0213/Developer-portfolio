import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import NewModel from "./NewModel";
import { Flex } from "antd";
import style from './index.css'

export function Home() {
  const date = new Date();
  const arr = [
    "Functional React Development",
    "Lucas Simpson",
    `${date.toLocaleDateString()}`,
  ];

  return (
    <Box className="bg-gray-600 rounded flex flex-row h-1/2 w-screen justify-center">
      <Flex flex="row" justify="center" align="center">
        <ButtonGroup>
          {arr.map((element) => (
            <Button className="justify-center align-middle m-14 size-30 text-xl white" key={element}>
              {element}
            </Button>
          ))}
          {/* Uncomment and fix this if needed
          <Button><Link to='/contact'>Contact</Link></Button> */}
        </ButtonGroup>
        <Avatar name="Lucas Simpson" size="lg" className="m-10 text-xl" /> 
        <NewModel />
      </Flex>
    </Box>
  );
}

export default Home;
