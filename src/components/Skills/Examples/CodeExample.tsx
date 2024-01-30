import { Code, Card } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { Flex } from "antd";

const str = `function StateExample() {
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



export default HooksExample;`;

function CodeExample() {
  const code = str;
  return (
    <>
      <Flex justify="center" className="w-screen">
        <Card>
          <div>CodeExample</div>
          <Code></Code>
          <Editor
            width="50vw"
            height="300px"
            language="javascript"
            theme="vs-dark"
            value={code}
            options={{
              minimap: { scale: 10 },
            }}
          />
        </Card>
      </Flex>
    </>
  );
}

export default CodeExample;
