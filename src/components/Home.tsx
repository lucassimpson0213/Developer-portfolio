import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import NewModel from "./NewModel";

export function Home() {
  const date = new Date();
  const arr = [
    "Functional React Development",
    "Lucas Simpson",
    `${date.toLocaleDateString()}`,
  ];

  return (
    <div className="w-screen m-5 h-30 flex justify-center">
      <Box className="bg-gray-600 rounded flex flex-row h-1/2 w-10/12 justify-center ">
        <ButtonGroup>
          {arr.map((element) => (
            <Button className=" justify-center align-middle m-14 size-30 text-xl white">
              {element}
            </Button>
          ))}
          {/* <Button><a><Link to='/contact'>Contact</Link></a></Button> */}
        </ButtonGroup>{" "}
        <Avatar name="Lucas Simpson" size="lg" className="m-10 text-xl" />
        <NewModel />
      </Box>
    </div>
  );
}

export default Home;
