import React, { useEffect, useState } from "react";

import { useHistory, Redirect } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  Link,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight, FaUserCircle, FaHeart, FaMobile } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Header() {
  const { logout, currentUser } = useAuth();
  console.log("current user" + currentUser);
  const history = useHistory();

  const LoggedUser = JSON.parse(localStorage.getItem("logged_User"));

  console.log("LoggedUser user" + LoggedUser);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.900", "gray.30")}
        color={useColorModeValue("whiteAlpha.900", "whiteAlpha.0")}
        px={4}
        py={0}
        zIndex="sticky"
        height={"7vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"flex-end"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box></Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Flex alignItems="center" justifyContent={"space-between"}>
                <Link fontSize="md" mr="10">
                  <Flex>
                    <Icon as={FaMobile} w={4} h={4} mr={2} />

                    <Text fontSize={"13"}>Call Us 919024731575</Text>
                  </Flex>
                </Link>
                <Link href="/login" fontSize="md" mr="10">
                  <Flex>
                    <Icon as={FaArrowRight} w={4} h={4} mr={2} />

                    <Text to={"/login"} fontSize={"13"}>
                      Sign In
                    </Text>
                  </Flex>
                </Link>
                <Link href="/register" fontSize="md" mr="10">
                  <Flex>
                    <Icon as={FaUserCircle} w={4} h={4} mr={2} />

                    <Text fontSize={"13"}>Create Account</Text>
                  </Flex>
                </Link>
                <Link to={"/"} fontSize="md" mr="20">
                  <Flex>
                    <Icon as={FaHeart} w={4} h={4} mr={2} />

                    <Text fontSize={"13"}>Wishlist</Text>
                  </Flex>
                </Link>
              </Flex>
              {currentUser ? (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar size={"sm"} src={LoggedUser?.photoURL} />
                  </MenuButton>
                  <MenuList
                    alignItems={"center"}
                    color={"gray.900"}
                    bg={"whiteAlpha.900"}
                    zIndex={"overlay"}
                  >
                    <br />
                    <Center>
                      <Avatar size={"2xl"} src={LoggedUser?.photoURL} />
                    </Center>
                    <br />
                    <Center>
                      <p>
                        {LoggedUser?.displayName
                          ? LoggedUser?.displayName
                          : LoggedUser?.email}
                      </p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem
                      onClick={async (e) => {
                        e.preventDefault();
                        await logout();
                        localStorage.removeItem("logged_User");
                        history.push("/login");
                      }}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : null}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
