import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

//{ type Props = {} }//

export default function LoginForm() {
  return (
    <div className="mt-40">
      <Box textAlign="center" mt={30}>
        <Heading>Contact</Heading>
      </Box>
      <Flex width="full" align="center" justifyContent="center" mt={10}>
        <Box my={4} textAlign="left" w="30%" h="60%">
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="test@test.com" />
            </FormControl>
            <FormControl p={3} mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
            <Button width="full" mt={4} type="submit">
              Sign In
            </Button>
          </form>
        </Box>
      </Flex>
    </div>
  );
}
