import { Alert, AlertIcon, Heading } from "@chakra-ui/react";

export default function () {
  return (
    <>
      <Alert status="success">
        <AlertIcon />
        Data uploaded to the server. Fire on!
      </Alert>
      <Heading fontFamily={"heading"}>Redirecting... </Heading>
    </>
  );
}
