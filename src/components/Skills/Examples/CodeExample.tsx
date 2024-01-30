import { Code, Card } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import { Flex } from "antd";




interface CodeProps  {
  str: string
}

function CodeExample({str}: CodeProps) {
  const code = str;
  return (
    <>
      <Flex justify="center" className="w-screen">
        <Card>
          
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
