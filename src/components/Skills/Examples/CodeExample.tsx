import { Code, Card ,Flex} from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";

interface CodeProps {
  str: string;
}

function CodeExample({ str }: CodeProps) {
  const code = str;
  return (
    <>
      <Flex justify="center" className="w-screen mb-20">
        <Card>
          <Code></Code>
          <Editor
            width="100vw"
            height="300px"
            language="typescript"
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
