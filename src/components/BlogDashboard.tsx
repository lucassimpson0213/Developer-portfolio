import { Divider, Stack } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import Blog from "./Blog";
import pic3 from "../assets/pic3.jpg";
import pic from "../assets/pic.jpg";
import pic1 from "../assets/pic1.jpg";

export default function BlogDashboard() {
  const date = new Date();

  return (
    <>
      <motion.div layout>
      <Divider mb={20} mt={5} colorScheme="brand" />

      <Stack justify="center" align="center" spacing={30}>
        <Blog
          name={"React Pagination Tutorial"}
          body="Learn how to do pagination in less than ten minutes!"
          date={date}
          image={pic3}
        />
        <Blog
          name={"Exploring React Hooks"}
          body="Dive into the world of hooks for state and lifecycle management."
          date={date}
          image={pic}
        />
        <Blog
          name={"Styling in React"}
          body="Understand how to style your React components effectively."
          date={date}
          image={pic1}
        />
      </Stack></motion.div>
    </>
  );
}
