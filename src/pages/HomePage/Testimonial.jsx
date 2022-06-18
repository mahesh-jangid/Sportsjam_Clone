import { Box, Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Testimonial = () => {
  return (
    <Flex mt={4} mb={4} width="90" m={"auto"} textAlign={"center"}>
      <Box>
        <Heading>TESTIMONIALS</Heading>
        <Text mt={3} fontSize={"14"}>
          Amazing products and Excellent Service. Whenever I have called, I have
          got professional, prompt and consistent reply. Even during giving the
          free tshirt, you guys called to know the size, but unfortunately the
          size is large on me. Any chances I can exchange with M size. Although
          I am loving my new racquet. - Rajnish, New Delhi
        </Text>
        <Button colorScheme="gray" width="200px" mt={3}>
          View All
        </Button>
      </Box>
    </Flex>
  );
};

export default Testimonial;
