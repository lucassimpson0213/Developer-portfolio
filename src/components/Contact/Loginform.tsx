import React, { useState } from "react";
import { Flex, Box, Heading, Input, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type InputProps = {
  type: string;
  placeholder: string;
  label: string;
};

const InputContainer: React.FC<InputProps> = ({ type, placeholder, label }) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  // Animation for each input field
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={inputVariants}
      layout
    >
      <Text mb={20}>
        {label} {value}
      </Text>
      <Input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        size="lg"
        required={true}
      />
    </motion.div>
  );
};

export default function LoginForm() {
  // Animation for the whole form
  const formVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2, duration: 0.6 } },
  };

  return (
    <>
      
      <div className="mt-50 h-40">
        <Box textAlign="center" mt={10}>
          <Heading fontSize="4vh" fontFamily={"adobe-garamond-pro"}>
            Contact
          </Heading>
        </Box>
        <Flex width="full"  align="center" justifyContent="center" >
          <motion.form
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            <br/>
            <InputContainer
              placeholder={"email@example.com"}
              type={"email"}
              label={"Email: "}
            />
            <br/>
            <InputContainer
              placeholder={"Linkedin"}
              type={"text"}
              label={"LinkedIn:"}
            />
            <br/>
            <Button mt={5} type="submit">
              Submit
            </Button>
          </motion.form>
        </Flex>
      </div>
    </>
  );
}
