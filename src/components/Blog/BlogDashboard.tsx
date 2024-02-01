import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Image,
  VStack,
  Badge,
} from "@chakra-ui/react";

interface Blog {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  content: string;
  date: string;
}
// Expanded blog data
const blogs = [
  {
    id: "1",
    title: "Crafting Pixel-Perfect UIs with React",
    excerpt:
      "Explore techniques for building seamless, interactive user interfaces with React.",
    imageUrl:
      "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/408aa8e2-5589-4cc3-dd8a-6645bb603500/public",
    content: "Detailed content about crafting pixel-perfect UIs with React...",
    date: "2024-01-01",
  },
  {
    id: "2",
    title: "Harnessing the Power of JavaScript for Web Development",
    excerpt:
      "Dive into the essentials of JavaScript to enhance your web development skills.",
    imageUrl:
      "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/90e3c3e3-fd5f-4e56-9b72-6170c04fe800/public",
    content: "Detailed content about JavaScript for web development...",
    date: "2024-01-15",
  },
  {
    id: "3",
    title: "Innovating with Cloudflare for Optimized Image Delivery",
    excerpt:
      "Learn how Cloudflare optimizes web performance through faster image delivery.",
    imageUrl:
      "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/bd6787bc-97a6-4bd1-d5a8-ee272f782300/public",
    content:
      "Detailed content about using Cloudflare for image optimization...",
    date: "2024-02-01",
  },
  {
    id: "4",
    title: "Integrating Responsive Designs in Modern Web Applications",
    excerpt:
      "Discover the strategies for implementing responsive designs that adapt across devices.",
    imageUrl:
      "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/9396853b-c69b-4003-ad3e-aef3cb5d0800/public",
    content: "Detailed content about responsive design in web applications...",
    date: "2024-02-15",
  },
  {
    id: "5",
    title: "Exploring New Dimensions in React and Cloudflare",
    excerpt:
      "Uncover the synergies between React and Cloudflare for developing dynamic web experiences.",
    imageUrl:
      "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/f9ade3c6-8512-42a1-f7f2-94d9e8b1d800/public",
    content: "Detailed content about React and Cloudflare integration...",
    date: "2024-03-01",
  },
  {
    id: "6",
    title: "Leveraging Cloudflare for Secure and Fast Image Delivery",
    excerpt:
      "Enhance your website’s security and performance with Cloudflare’s image delivery solutions.",
    imageUrl:
      "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/d34be275-84f3-47ac-e4dc-dc0a9dd6fc00/public",
    content:
      "Detailed content about securing and accelerating image delivery with Cloudflare...",
    date: "2024-03-15",
  },
];
const BlogDashboard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBlog, setSelectedBlog] = useState<Blog>(blogs[0]);

  const handleOpenModal = (blog: Blog) => {
    setSelectedBlog(blog);
    onOpen();
  };

  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {blogs.map((blog) => (
          <Box
            key={blog.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            cursor="pointer"
            onClick={() => handleOpenModal(blog)}
          >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              borderRadius="md"
              mb={3}
            />
            <VStack spacing={3} align="start">
              <Text fontSize="xl" fontWeight="bold" lineHeight="tight">
                {blog.title}
              </Text>
              <Badge colorScheme="purple">
                {new Date(blog.date).toLocaleDateString()}
              </Badge>
              <Text noOfLines={3}>{blog.excerpt}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedBlog.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Image
              src={selectedBlog.imageUrl}
              alt={selectedBlog.title}
              mb={4}
              borderRadius="md"
            />
            <Text mb={2}>
              Date: {new Date(selectedBlog.date).toLocaleDateString()}
            </Text>
            <Text>{selectedBlog.content}</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BlogDashboard;
