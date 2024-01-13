import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";

type Props = {
  name: string;
  body: string;
  date: Date;
  image: string;
};

export default function Blog({ name, body, date, image }: Props) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image} h={"auto"} w={"auto"} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
          <Text>{body}</Text>
          <Button>open</Button>
          <Text color="blue.bg-green-800">{date.toUTCString()}</Text>
        </Stack>
      </CardBody>
      <Divider />
    </Card>
  );
}
