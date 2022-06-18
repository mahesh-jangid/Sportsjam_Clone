import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";

export const Section4 = () => {
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
            "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/bta-store.jpg"
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
          ABOUT SPORTSJAM
        </Text>
        <Text
          mb="6"
          mt={4}
          opacity="0.8"
          fontSize={isLargerThanLG ? "sm" : "xl"}
        >
          Let’s get going to dig out the best products in your game & make ‘em
          available right at your doorstep. We will be glad to serve you in any
          city in India & speedily, so that you enjoy your product in the coming
          weekend! All this, with no shipping charges if you purchase above
          Rs.1000. Scout through your favourite brands with latest technologies.
          Just click & be its proud owner, at the best available price in the
          market. Come, help us help you to fly high with your new & improved
          game with high quality sportsgear!
        </Text>

        <Button colorScheme="gray" width="200px">
          Find Out Store
        </Button>
      </Flex>
    </Flex>
  );
};
