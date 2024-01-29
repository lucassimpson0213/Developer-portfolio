import { Heading, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function Contact() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
      <Heading>
        <Center>Contact</Center>
      </Heading>
    </motion.div>
  );
}
