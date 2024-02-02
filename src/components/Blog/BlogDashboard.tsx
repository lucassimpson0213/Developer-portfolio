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
  Input,
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
    content:
      "The art of crafting pixel-perfect UIs with React is not just about adhering to the designs provided by UI/UX designers but also about understanding the nuances of user interaction. This blog dives deep into techniques such as component modularization, responsive design implementation, and state management to ensure that every pixel aligns perfectly with the intended design, enhancing the overall user experience.",
    date: "2024-01-01",
  },
  {
    id: "2",
    title: "Harnessing the Power of JavaScript for Web Development",
    excerpt:
      "Dive into the essentials of JavaScript to enhance your web development skills.",
    imageUrl:
      "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/90e3c3e3-fd5f-4e56-9b72-6170c04fe800/public",
    content:
      "JavaScript, the backbone of web development, offers a plethora of features that can be leveraged to create dynamic and interactive websites. From understanding the core concepts of JavaScript to exploring advanced features like async/await, promises, and service workers, this blog covers essential knowledge and best practices to elevate your web development projects to the next level.",
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
      "Cloudflare's innovations in image delivery are transforming the way websites load and perform. By leveraging Cloudflare's global content delivery network (CDN), images are served faster to users around the world, reducing load times and improving site performance. This blog explores the mechanisms behind Cloudflare's optimized image delivery, including image compression, WebP conversion, and lazy loading techniques.",
    date: "2024-02-01",
  },
  {
    id: "4",
    title: "Integrating Responsive Designs in Modern Web Applications",
    excerpt:
      "Discover the strategies for implementing responsive designs that adapt across devices.",
    imageUrl:
      "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/9396853b-c69b-4003-ad3e-aef3cb5d0800/public",
    content:
      "Responsive design is essential in today's web development, ensuring that applications look and function beautifully across all devices. This blog post delves into the latest strategies for responsive design, including CSS Grid, Flexbox, and media queries, and how these technologies can be seamlessly integrated into modern web applications to provide a fluid and adaptable user experience.",
    date: "2024-02-15",
  },
  {
    id: "5",
    title: "Exploring New Dimensions in React and Cloudflare",
    excerpt:
      "Uncover the synergies between React and Cloudflare for developing dynamic web experiences.",
    imageUrl:
      "https://imagedelivery.net/L7wDMZoIOzM6NWAo2dccYQ/f9ade3c6-8512-42a1-f7f2-94d9e8b1d800/public",
    content:
      "React and Cloudflare together pave the way for building highly dynamic, secure, and scalable web experiences. This blog explores how React's component-based architecture complements Cloudflare's edge computing capabilities to deliver optimized web applications. Topics include serverless functions with Cloudflare Workers, security enhancements through Cloudflare Pages, and the benefits of edge-side rendering for React applications.",
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
      "In the digital age, website performance and security are paramount. Cloudflare's image delivery solutions not only accelerate the delivery of images across the globe but also ensure they are served securely. This blog post discusses how Cloudflare's image optimization features, such as automatic resizing, format selection, and encryption, can be utilized to improve site load times while maintaining high security standards.",
    date: "2024-03-15",
  },
];

// Filter blogs based on search query

const BlogDashboard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBlog, setSelectedBlog] = useState<Blog>(blogs[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleOpenModal = (blog: Blog) => {
    setSelectedBlog(blog);
    onOpen();
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box p={5}>
      <Input
        placeholder="Search blogs..."
        mb={5}
        w={"100%"}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {filteredBlogs.map((blog) => (
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
