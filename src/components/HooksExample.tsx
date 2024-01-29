import { Card, Button, Flex, Avatar, Spacer } from "@chakra-ui/react";

import { useState, useEffect } from "react";
import EffectDisplay from "./EffectDisplay";
import icon from '../assets/train-8517089_1280.jpg'
import MotionExample from "./MotionExample";

function HooksExample() {
  return (
    <>
      <StateExample />
      <EffectExample />
        <MotionExample/>
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
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh', width: '40%' }}>
      <Flex gap={3} direction='column' align='center' justify='center' w='80%' h='300px'>
        <Card bg='gray.300' w='100%' h='100%'>
          <Flex direction='column' align='center' justify='center' h='100%'>
              <Avatar size='xl' src={icon} />
              <Spacer/>
              <div>{value}</div>
              
            <Button w='30%' onClick={handleClick}>
              Click me!
            </Button>
          </Flex>
        </Card>
      </Flex>
    </div>
  </>
);



       
   
}

function EffectExample() {
  const [quotes, setQuotes] = useState([]); // Rename to `quotes` for clarity
  const [isLoading, setIsLoading] = useState(true); // Better naming for the loading state
  const [error, setError] = useState(null); // Separate state for handling errors

  useEffect(() => {
    requestData();
  }, []);

  async function requestData() {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      setQuotes(json); // Assuming the API returns an array directly
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <EffectDisplay quotes={quotes} />; // Pass the entire array to `EffectDisplay`
}


export default HooksExample;
