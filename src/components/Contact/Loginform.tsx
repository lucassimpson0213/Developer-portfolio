import React, { useState } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Container,
  Text,
  HStack,
} from "@chakra-ui/react";
import { supabase } from "../../../supabaseclient"; // Ensure this path matches where you've initialized Supabase

export default function SignInOnPhone() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "http://vitelssimp1app.net/about", // Optional: Specify where users should be redirected after clicking the link in their email
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setMessage("Check your email for the login link!");
      setLoading(false);
    }
  };

  return (
    <HStack my="8" textAlign="center">
      <Container centerContent>
        <Text fontSize="xl" mb="4">
          Sign In on Your Phone
        </Text>
        {error && <Text color="red.500">{error}</Text>}
        {message && <Text color="green.500">{message}</Text>}
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <Button
            mt="4"
            colorScheme="blue"
            isLoading={loading}
            onClick={handleSignIn}
          >
            Send Sign In Link
          </Button>
        </FormControl>
      </Container>
    </HStack>
  );
}
