import React, { useState } from "react";
import { supabase } from "../../../supabaseclient"; // Adjust the path according to your project structure
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const SignInWithOTP = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSignInWithOTP = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "http://vitelssimp1app.net/about",
      },
    });

    if (error) {
      setError(error.message);
    } else if (data) {
      setMessage("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <Container maxW="md" py="12" px="6">
      <Box as="form" onSubmit={(e) => e.preventDefault()}>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </FormControl>
        <Button
          mt="4"
          colorScheme="blue"
          isLoading={loading}
          onClick={handleSignInWithOTP}
        >
          Sign In with OTP
        </Button>
        {message && <Text color="green.500">{message}</Text>}
        {error && <Text color="red.500">{error}</Text>}
      </Box>
    </Container>
  );
};

export default SignInWithOTP;
