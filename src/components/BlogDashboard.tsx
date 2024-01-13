import { Center, Divider, Heading, SimpleGrid } from "@chakra-ui/react";
import Blog from "./Blog";
import pic3 from "../assets/pic3.jpg";
import pic from "../assets/pic.jpg";
import pic1 from "../assets/pic1.jpg";
import { defineStyleConfig } from "@chakra-ui/react";

export const dividerTheme = defineStyleConfig({
  defaultProps: {
    size: "xl",
    variant: "thick",
    colorScheme: "brand",
  },
});
export default function BlogDashboard() {
  const date = new Date();

  const BlogPosts = [
    {
      name: "using code testing with jest",
      image: "vite-project/src/assets/walkator-klMii3cR9iI-unsplash.jpg",
      body: "body",
    },
    {
      name: "new component libraries in react",
      image: "vite-project/src/assets/pic.jpg",
      body: "body",
    },
  ];
  return (
    <>
      <Heading className="m-10" mb={2}>
        <Center>Blog Posts</Center>
      </Heading>
      <Divider mb={10} colorScheme="brand" />

      <SimpleGrid minChildWidth={100} spacing={3} ml={10}>
        <Blog name={"hello"} body="hello" date={date} image={pic3} />
        <Blog name={"hello"} body="hello" date={date} image={pic} />
        <Blog name={"hello"} body="hello" date={date} image={pic1} />
      </SimpleGrid>
    </>
  );
}
