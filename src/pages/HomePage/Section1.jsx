import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

export const Section1 = () => {
  const [isLargerThanLG] = useMediaQuery("(min-width: 62em)");

  return (
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
          We build, We revive
        </Text>

        <Text
          mb="6"
          mt={4}
          opacity="0.8"
          fontSize={isLargerThanLG ? "sm" : "xl"}
        >
          Your business needs to be in safe hands at all times. We ensure you
          never run out of customers and not run at loss. We are trusted by over
          500+ companies to deliver quality marketing campaigns using Digital
          marketing & Offline marketing channels.
        </Text>

        <Button colorScheme="teal" variant="outline" width="200px">
          Read More
        </Button>
      </Flex>
    </Flex>
  );
};
