import React from "react";
import {
  Text,
  Image,
  Box,
  Stack,
  Heading,
  Tag,
  TagLabel,
  Flex,
} from "@chakra-ui/react";

const Product = ({ item, handleclick }) => {
  return (
    <Box m={5}>
      <Box onClick={() => handleclick(item)}>
        <Image src={item.img} objectFit="cover" />
        <Stack>
          <Heading fontSize={13} color={"orange.400"}>
            {item.title}{" "}
          </Heading>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            {" "}
            <Box>Price : {item.price}</Box>
            <Text>M.R.P : {item.mrp}</Text>
          </Flex>

          <Tag>
            <TagLabel>Discount : {item.discount}</TagLabel>
          </Tag>
        </Stack>
      </Box>
    </Box>
  );
};

export default Product;
