import React, { useState } from "react";
import {
  Text,
  Image,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Stack,
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
  MenuItem,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { SearchIcon } from "@chakra-ui/icons";
import { FaAlignJustify, FaShoppingCart } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = ({ onOpen, ref }) => {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const navBg = useColorModeValue("white", "blackAlpha.200");
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  return (
    <Flex
      h="13vh"
      alignItems="center"
      justifyContent={"space-between"}
      p="6"
      boxShadow={scroll ? "base" : "none"}
      position="sticky"
      top="0"
      zIndex="sticky"
      w="full"
      bg={navBg}
      mt={"4"}
      // mb={"3"}
    >
      <Stack>
        <Link to={"/"}>
          <Image
            boxSize="100%"
            objectFit="cover"
            src="https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/logo.jpg"
            alt="Logo"
          />
        </Link>
      </Stack>

      {/* <Spacer /> */}
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

      <Flex alignItems="center">
        {/* <IconButton mr="10" w={6} h={6} p={5} onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </IconButton> */}

        {isLargerThanMD ? (
          <>
            <Link to={"/cart"} fontSize="md" mr="10">
              <Flex>
                <Icon as={FaShoppingCart} w={7} h={7} mr={3} />

                <Link to={"/cart"}>Shoping Cart</Link>
              </Flex>
            </Link>
          </>
        ) : (
          <IconButton ref={ref} onClick={onOpen}>
            <Icon as={FaAlignJustify} />
          </IconButton>
        )}
      </Flex>
    </Flex>
  );
};
