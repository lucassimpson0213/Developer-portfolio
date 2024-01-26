import { Pagination, Flex, Divider } from "antd";
import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const MotionPagination = motion(Pagination);
const MotionDivider = motion(Divider);
const MotionHeading = motion(Heading);

export default function Page() {
  const [page, setPage] = useState<number>(1); // Page number as a number, not a string

  return (
    <>
      <Flex justify="center" className={`mt-40 h-50`}>
        <MotionPagination
          className="justify-center"
          current={page} // Current page number
          onChange={setPage} // Update the page state on change
          total={50} // Total number of items (you might want to adjust this)
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        />
      </Flex>

      <MotionDivider
        orientation="center"
        className={`m-50`}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      />

      <Flex gap={"large"} justify="center">
        <MotionHeading
          fontFamily="adobe-garamond-pro"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Look at our social medias
        </MotionHeading>
        <FacebookFilled />
        <GithubFilled />
        <LinkedinFilled />
      </Flex>
    </>
  );
}
