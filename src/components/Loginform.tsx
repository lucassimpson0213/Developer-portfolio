import React, { useState } from "react";
import { Flex, Box, Heading, Input, Button, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

type EmailInputProps = {
  type: string;
  placeholder: string;
  label: string;
};

const EmailInput: React.FC<EmailInputProps> = ({
  type,
  placeholder,
  label,
}) => {
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
      <Text mb="15px" mt={"10px"}>
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
      <br />
      <div className="mt-35">
        <Box textAlign="center" mt={10}>
          <Heading fontSize="4vh" fontFamily={"adobe-garamond-pro"}>
            Contact
          </Heading>
        </Box>
        <Flex width="full" align="center" justifyContent="center" mt={2}>
          <motion.form
            initial="hidden"
            animate="visible"
            variants={formVariants}
          >
            <EmailInput
              placeholder={"email@example.com"}
              type={"email"}
              label={"Email: "}
            />
            <EmailInput
              placeholder={"Linkedin"}
              type={"text"}
              label={"LinkedIn:"}
            />
            <Button mt={5} type="submit">
              Submit
            </Button>
          </motion.form>
        </Flex>
      </div>
    </>
  );
}
