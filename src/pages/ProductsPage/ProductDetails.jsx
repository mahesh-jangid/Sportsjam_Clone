import React from "react";

import { useHistory } from "react-router-dom";
import {
  Box,
  Center,
  Flex,
  Heading,
  Square,
  Image,
  Text,
  Stack,
  Tag,
  TagLabel,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useAuth } from "../../contexts/AuthContext";

const Details = () => {
  const { currentUser } = useAuth();
  const toast = useToast();
  const history = useHistory();
  const ProductData = JSON.parse(localStorage.getItem("productdetails"));
  const handleclick = () => {
    const cartdata = JSON.parse(localStorage.getItem("cartdata")) || [];
    var flag = false;
    console.log("cart", cartdata);
    for (var i = 0; i < cartdata.length; i++) {
      if (cartdata[i].id == ProductData.id) {
        cartdata[i].qty += 1;
        localStorage.setItem("cartdata", JSON.stringify(cartdata));
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag == false) {
      cartdata.push(ProductData);
      localStorage.setItem("cartdata", JSON.stringify(cartdata));
    }

    if (currentUser) {
      toast({
        description: "Item successfully added to cart",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      history.push("/cart");
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <Box mt={9}>
        <Flex color="black" justifyContent={"space-around"}>
          <Box
            flex="1"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image src={ProductData.img} objectFit="cover" width={"25"} />
          </Box>
          <Box flex="1">
            <Stack>
              <Box>
                <Heading fontSize={26}>{ProductData.title} </Heading>
                <Text>{ProductData.desc}</Text>
              </Box>
              <br />
              <br />
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                width={"lg"}
              >
                {" "}
                <Box>
                  <Text>M.R.P : {ProductData.mrp}</Text>
                  <Text style={{ textDecoration: "line-through" }}>
                    Price : {ProductData.price}
                  </Text>
                </Box>
                <Tag>
                  <TagLabel>Discount : {ProductData.discount}</TagLabel>
                </Tag>
              </Flex>
              <Button
                colorScheme="orange"
                variant="outline"
                width={200}
                onClick={handleclick}
              >
                Add To Cart
              </Button>
              <br />
              <Text>Add to compare list .Refer this to your friend</Text>
              <br />
              <Flex w={"sm"} justifyContent={"space-between"}>
                <Image src="https://assets.sg.content-cdn.io/css/themes/mjt02012432/images/main/twitter_share.png" />
                <Image src="https://assets.sg.content-cdn.io/css/themes/mjt02012432/images/main/fb_share.png" />
                <Image src="https://assets.sg.content-cdn.io/css/themes/mjt02012432/images/main/gplus_share.png" />
                <Image src="https://assets.sg.content-cdn.io/css/themes/mjt02012432/images/main/pinit_share.png" />
              </Flex>
              <Text>Enter your pin code to check availability</Text>
              <Box>
                <InputGroup size="sm" width={"39%"}>
                  <Input
                    pr="4.5rem"
                    type="text"
                    pt={4}
                    pb={4}
                    placeholder="Search here...."
                  />
                  <InputRightElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                  />
                </InputGroup>
              </Box>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Details;
