import { Divider, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Blog from "./Blog";

// URLs provided by Cloudflare after you've uploaded your images
const pic3Url =
  "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c90df01d-c7b6-4f85-80aa-3680be706500/public";
const picUrl =
  "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c90df01d-c7b6-4f85-80aa-3680be706500/public";
const pic1Url =
  "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/c90df01d-c7b6-4f85-80aa-3680be706500/public";

const dates = [
  new Date("2024-01-01"),
  new Date("2024-01-15"),
  new Date("2024-02-01"),
];

const imageUrls = [pic3Url, picUrl, pic1Url];

export default function BlogDashboard() {
  const numberOfBlogs = 300; // Change this to the desired number of blogs

  return (
    <>
      <motion.div layout>
        <Divider mb={20} mt={5} colorScheme="brand" />

        <Stack justify="center" align="center" spacing={30}>
          {Array.from({ length: numberOfBlogs }).map((_, index) => (
            <Blog
              key={index}
              name={"Blog Title " + (index + 1)}
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              date={dates[index % 3]} // Reuse dates cyclically
              image={imageUrls[index % 3]} // Reuse images cyclically
            />
          ))}
        </Stack>
      </motion.div>
    </>
  );
}
