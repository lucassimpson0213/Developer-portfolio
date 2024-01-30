import { Card, Button, Flex, Avatar, Spacer } from "@chakra-ui/react";

import { useState } from "react";
import EffectExample from "./EffectExample";
import icon from "../../../assets/train-8517089_1280.jpg";
import MotionExample from "./MotionExample";
import CodeExample from "./CodeExample";

function HooksExample() {
  return (
    <>
      <StateExample />
      <CodeExample str={`function StateExample() {
          const [value, setValue] = useState(0);

          function handleClick() {
            setValue(() => value + 1);
          }

          return (
            <>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "70vh",
                  width: "40%",
                }}
              >
                <Flex
                  gap={3}
                  direction="column"
                  align="center"
                  justify="center"
                  w="80%"
                  h="300px"
                >
                  <Card bg="gray.300" w="100%" h="100%">
                    <Flex direction="column" align="center" justify="center" h="100%">
                      <Avatar size="xl" src={icon} />
                      <Spacer />
                      <div>{value}</div>

                      <Button w="30%" onClick={handleClick}>
                        Click me!
                      </Button>
                    </Flex>
                  </Card>
                </Flex>
              </div>
            </>
          );
        }



        export default HooksExample;`} />
      <EffectExample />
      <MotionExample />

      
    </>
  );
}

function StateExample() {
  const [value, setValue] = useState(0);

  function handleClick() {
    setValue(() => value + 1);
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          width: "40%",
        }}
      >
        <Flex
          gap={3}
          direction="column"
          align="center"
          justify="center"
          w="80%"
          h="300px"
        >
          <Card bg="gray.300" w="100%" h="100%">
            <Flex direction="column" align="center" justify="center" h="100%">
              <Avatar size="xl" src={icon} />
              <Spacer />
              <div>{value}</div>

              <Button w="30%" onClick={handleClick}>
                Click me!
              </Button>
            </Flex>
          </Card>
        </Flex>
      </div>
    </>
  );
}

export default HooksExample;
