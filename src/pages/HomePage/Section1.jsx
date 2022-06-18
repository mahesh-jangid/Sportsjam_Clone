import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
  Center,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

export const Section1 = () => {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");

  return (
    <Box>
      {" "}
      <Center>
        <Heading fontSize={20} mt={3}>
          OUR CUSTOMIZED SERVICES
        </Heading>
      </Center>
      <Flex
        width="full"
        minHeight="70vh"
        alignItems="center"
        px={isLargerThanLG ? "16" : "6"}
        py="16"
        justifyContent="center"
        flexDirection={isLargerThanLG ? "row" : "column"}
      >
        <Flex
          w={isLargerThanLG ? "40%" : "full"}
          mb={isLargerThanLG ? "0" : "6"}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={
              "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bslide2.jpg"
            }
            alt="Chakra Team"
            w="full"
          />
        </Flex>
        <Spacer />

        <Flex
          w={isLargerThanLG ? "60%" : "full"}
          flexDirection="column"
          ml={isLargerThanLG ? "7" : "0"}
          textAlign={"start"}
        >
          <Text fontSize={isLargerThanLG ? "2xl" : "xl"} fontWeight="bold">
            BADMINTON RACKET STRINGING
          </Text>

          <Text
            mb="6"
            mt={4}
            opacity="0.8"
            fontSize={isLargerThanLG ? "sm" : "xl"}
          >
            Some players prefer to have the comfort, power and flexibility to
            choose a combination of features on a single string. For this, few
            tennis brands offer Hybrid Strings, which have one string for Mains
            and a different string for Crosses. Now, YOU can also create your
            very own hybrid string! To avail of this service at Sportsjam.in,
            add your favourite racquet in your order, along with Tennis String
            for Mains and Tennis String for Crosses (Hybrid Stringing). Please
            note that a good understanding of string features are required to
            achieve an optimum balance between comfort, durability, control and
            power.
          </Text>

          <Button colorScheme="teal" variant="outline" width="200px">
            Read More
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
