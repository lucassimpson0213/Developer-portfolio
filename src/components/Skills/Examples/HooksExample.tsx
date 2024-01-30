import  { useState } from 'react';
import { Card, Button, Flex, Avatar,Divider} from '@chakra-ui/react';
import EffectExample from './EffectExample';
import MotionExample from './MotionExample';
import CodeExample from './CodeExample';
import Header from '../../Utils/Header'
import icon from '../../../assets/train-8517089_1280.jpg';


function StateExample() {
  const [value, setValue] = useState(0);

  function handleClick() {
    setValue(prevValue => prevValue + 1);
  }

  return (
    <>
      <Header header='Examples' body='This is how I built my website using react and Framer Motion'></Header>
      <Divider mb={40} />
      

    <Flex mb={10} mt={20} gap={5} direction="row" align="center" justify="center" w="100%" h="300px">
      <Flex gap={20} w={'30%'} h={60} align={'center'} justify={'center'}>
      <Card bg="gray.300" w="100%" h="100%">
          <Flex  align={'center'}  justify = { 'center'} direction={'column'} w={'100%'} h={'100%'}>
        <Avatar mb={5} size="xl" src={icon} />
            
        <div className='m-5'>{value}</div>
            <Button w="30%" onClick={handleClick}>Click me!</Button>
          </Flex>
        </Card>
      
      </Flex>
    </Flex ></>
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
    import { useEffect, useState } from "react";
import EffectDisplay from "./EffectDisplay";

interface Quote {
  text: string;
  author?: string;
}

interface ErrorComponentProps {
  message: string | null;
}

export default function EffectExample() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch("https://type.fit/api/quotes");
        if (!response.ok) {
          throw new Error(Error : Unable to fetch quotes);
        }
        const json: Quote[] = await response.json();
        setQuotes(json);
      } catch (error) {
        if (error instanceof Error) {
          console.error("Error fetching data: ", error);
          setError("Failed to load quotes. Please try again later.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuotes();
  }, []);

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent message={error} />;
  }

  return <EffectDisplay quotes={quotes} />;
}

const LoadingComponent = () => {
  return <div>Loading...</div>;
};

const ErrorComponent = ({ message }: ErrorComponentProps) => {
  return <div>Error: {message}</div>;
};
  }`;


  const motionExampleCode = `
  import { Heading, Center, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

function MotionExample() {
  return (
    <>
      <Box h={300} w="100%">
        <Center>
          <Heading fontFamily={"adobe-garamond-pro"}>
            Framer Motion Example
          </Heading>
        </Center>
        <motion.div
          className="outline outline-blue-gray-900  w-20"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag={true}
          dragConstraints={{ left: 300, right: 600, top: 100, bottom: 100 }}
          animate={{ x: 500, y: 100 }}
        >
          <div className="bg-blue-500 w-20 h-20 ">
            <Center>Drag me!</Center>
          </div>
        </motion.div>
      </Box>
    </>
  );
}

export default MotionExample;
  
  
  
  
  `
  return (
    <>
      <StateExample />
      <CodeExample str={stateExampleCode} />
      <EffectExample />
      <CodeExample str={effectExampleCode} />
      <MotionExample  />
      <CodeExample str={motionExampleCode}></CodeExample>
    </>
  );
}

export default HooksExample;

