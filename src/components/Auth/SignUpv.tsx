import  { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { supabase } from "../../../supabaseclient.ts";
import { useRedirect } from "../hooks/useRedirect.tsx";

export default function SignUpv() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const redirect = useRedirect("/congratulations");

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const  supa  = await supabase.auth.signUp({ email, password });

      supa.data;

      redirect();
      // Reset form or redirect user
    } catch (error) {
      console.log("hello")
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => setShow(!show);

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>Sign Up</Heading>
            <Text color="fg.muted">
              Already have an account? <Link href="/login">Login</Link>
            </Text>
          </Stack>
        </Stack>
        <Box py={{ base: "0", sm: "8" }} px={{ base: "4", sm: "10" }}>
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={togglePasswordVisibility}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
             <Text color="red.500"></Text>
            <Button isLoading={loading} onClick={handleSignUp}>
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}
