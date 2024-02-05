import { useState } from "react";
import { Card, Button, Flex, Avatar, Divider } from "@chakra-ui/react";

import Header from "../../Utils/Header";
const src1 =
  "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/25ce7852-7aba-4ee6-846f-e95372758000/public";

function StateExample() {
  const [value, setValue] = useState(0);

  function handleClick() {
    setValue((prevValue) => prevValue + 1);
  }

  return (
    <>
      <Header
        header="Examples"
        body="This is how I built my website using react and Framer Motion"
      ></Header>
      <Divider mb={40} />

      <Flex
        mb={10}
        mt={20}
        gap={5}
        direction="row"
        align="center"
        justify="center"
        w="100%"
        h="300px"
      >
        <Flex gap={20} w={"30%"} h={60} align={"center"} justify={"center"}>
          <Card bg="gray.300" w="100%" h="100%">
            <Flex
              align={"center"}
              justify={"center"}
              direction={"column"}
              w={"100%"}
              h={"100%"}
            >
              <Avatar mb={5} size="xl" src={src1} />

              <div className="m-5">{value}</div>
              <Button w="30%" onClick={handleClick}>
                Click me!
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </>
  );
}

function HooksExample() {
  return (
    <>
      <StateExample />
    </>
  );
}

export default HooksExample;
