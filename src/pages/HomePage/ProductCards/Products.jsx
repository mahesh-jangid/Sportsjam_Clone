import { Box, Flex, Image } from "@chakra-ui/react";

export const Cards = () => {
  const Images = [
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/callout_img1.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/callout_img2.jpg",
    "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/callout_img3.jpg",
  ];

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent={"space-around"}
        p="6"
        w="full"
        mt={"4"}
      >
        {Images.map((url) => (
          <Box
            boxSize="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            height={"500px"}
          >
            <Image src={url} width={"full"} height={"full"} />
          </Box>
        ))}
      </Flex>
    </>
  );
};
