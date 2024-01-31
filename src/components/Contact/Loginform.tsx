import { useState } from "react";
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
import { supabase } from "../../../supabaseclient.ts"; // Adjust the path according to your project structure
import { useRedirect } from "../hooks/useRedirect"; // Adjust the path according to your project structure
import useAuthChangeHandler from "../hooks/useAuthChangeHandler"; // Import the custom hook

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const redirect = useRedirect("/congratulations");

  // Define the behavior for auth state changes
  const handleAuthStateChange = (event, session) => {
    if (event === 'SIGNED_IN') {
      redirect();
    }
    // Add more cases as needed
  };

  useAuthChangeHandler(handleAuthStateChange);

  async function handleSignIn() {
    setLoading(true);
    setError("");
    const { user, error } = await supabase.auth.signIn({
      email: email,
      password: password
    });

    if (error) {
      setError(error.message);
    }
    setLoading(false);
  }

  const togglePasswordVisibility = () => setShow(!show);

  return (
    <Container maxW="lg" py={{ base: "12", md: "24" }} px={{ base: "0", sm: "8" }}>
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>Sign In</Heading>
            <Text color="fg.muted">
              Don’t have an account? <Link href="/signup">Sign Up</Link>
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
            {error && <Text color="red.500">{error}</Text>}
            <Button isLoading={loading} onClick={handleSignIn}>
              Sign In
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}