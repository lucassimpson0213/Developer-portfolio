import  { useState } from 'react';
import { Card, Button, Flex, Avatar, Spacer } from '@chakra-ui/react';
import EffectExample from './EffectExample';
import MotionExample from './MotionExample';
import CodeExample from './CodeExample';
import icon from '../../../assets/train-8517089_1280.jpg';

function StateExample() {
  const [value, setValue] = useState(0);

  function handleClick() {
    setValue(prevValue => prevValue + 1);
  }

  return (
    <Flex w={"100%"} justify={'center'}>
    <Flex align="center" justify="center" height="70vh" width="40%">
      <Flex gap={3} direction="column" align="center" justify="center" w="80%" h="300px">
        <Card bg="gray.300" w="100%" h="100%">
          <Flex direction="column" align="center" justify="center" h="100%">
            <Avatar size="xl" src={icon} />
            <Spacer />
            <div>{value}</div>
            <Button w="30%" onClick={handleClick}>Click me!</Button>
          </Flex>
        </Card>
      </Flex>
    </Flex></Flex>
  );
}

function HooksExample() {
  const stateExampleCode = `function StateExample() {
    const [value, setValue] = useState(0);

    function handleClick() {
      setValue(prevValue => prevValue + 1);
    }

    return (
      // JSX
    );
  }`;

  const effectExampleCode = `function EffectExample() {
    // State and useEffect logic
  }`;

  return (
    <>
      <StateExample />
      <CodeExample str={stateExampleCode} />
      <EffectExample />
      <CodeExample str={effectExampleCode} />
      <MotionExample />
    </>
  );
}

export default HooksExample;

