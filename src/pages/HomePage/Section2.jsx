import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
const Section2 = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent={"space-between"}
      p="2"
      gridColumnGap={9}
      width={"7xl"}
      m={"auto"}
      textAlign={"center"}
    >
      <Box
        boxSize="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height={"full"}
        width={"full"}
      >
        <Image
          src={
            "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/victor-offer.jpg"
          }
          width={"full"}
          height={"full"}
        />
        <Text>VICTOR SHOES</Text>
      </Box>
      <Box
        boxSize="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        height={"full"}
        width={"full"}
      >
        <Image
          src={
            "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Slinger.jpg"
          }
          width={"full"}
          height={"full"}
        />
        <Text>SLINGER GRAND SLAM PACK</Text>
      </Box>
    </Flex>
  );
};

export default Section2;
