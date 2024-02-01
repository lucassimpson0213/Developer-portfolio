import { Divider, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Blog from "./Blog";

// URLs provided by Cloudflare after you've uploaded your images
const pic3Url = "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/<image_id>/<variant_name>";
const picUrl = "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/<image_id>/<variant_name>";
const pic1Url = "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/<image_id>/<variant_name>";

export default function BlogDashboard() {
  // Define different dates for each blog post
  const date1 = new Date('2024-01-01');
  const date2 = new Date('2024-01-15');
  const date3 = new Date('2024-02-01');

  return (
    <>
      <motion.div layout>
        <Divider mb={20} mt={5} colorScheme="brand" />

        <Stack justify="center" align="center" spacing={30}>
          <Blog
            name={"React Pagination Tutorial"}
            body="Learn how to do pagination in less than ten minutes!"
            date={date1} // Use the first date
            image={pic3Url}
          />
          <Blog
            name={"Exploring React Hooks"}
            body="Dive into the world of hooks for state and lifecycle management."
            date={date2} // Use the second date
            image={picUrl}
          />
          <Blog
            name={"Styling in React"}
            body="Understand how to style your React components effectively."
            date={date3} // Use the third date
            image={pic1Url}
          />
        </Stack>
      </motion.div>
    </>
  );
}

