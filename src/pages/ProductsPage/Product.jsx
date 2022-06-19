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
        <Box>
          <Image src={item.img} objectFit={"cover"} />
        </Box>

        <Box>
          <Stack>
            <Heading fontSize={13} color={"orange.400"}>
              {item.title}
            </Heading>
            <br />
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              {" "}
              <Text>M.R.P : {item.mrp}</Text>
              <Box textDecoration={"line-through"}>Price : {item.price}</Box>
            </Flex>

            <Tag>
              <TagLabel>Discount : {item.discount}</TagLabel>
            </Tag>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Product;
