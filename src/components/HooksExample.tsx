import { Card, Button, Flex } from "@chakra-ui/react";
import { Avatar } from "antd";
import { useState, useEffect } from "react";
import EffectDisplay from "./EffectDisplay";
import reactIcon from "../assets/reactIcon.svg";
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
      <Flex justify={"center"} h={"30vh"}>
        <Card bg={"grey"} w={"20vw"} h={"30vh"}>
          <Avatar size={100} src={reactIcon}></Avatar>
          <div>{value}</div>
          <Button w={"30%"} onClick={handleClick}>
            click me!
          </Button>
        </Card>
      </Flex>
      
       
      
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
