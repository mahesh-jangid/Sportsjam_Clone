import {
  Box,
  HStack,
  Spacer,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Navlink from "./Navlink";

export function Navbar() {
  const toast = useToast();
  const { logout, currentUser } = useAuth();

  return (
    <Box
      borderBottom="2px"
      borderBottomColor={useColorModeValue("gray.100", "gray.700")}
      mb={4}
      py={4}
    >
      <HStack justifyContent="center" maxW="container.lg" mx="auto" spacing={4}>
        {/* <Navlink to='/' name='Firebase Authentication' size='lg' /> */}

        {!currentUser && <Navlink to="/login" name="Login" />}
        {!currentUser && <Navlink to="/register" name="Register" />}
        {currentUser && (
          <Navlink
            to="/logout"
            name="Logout"
            onClick={async (e) => {
              e.preventDefault();

              await logout();
            }}
          />
        )}
      </HStack>
    </Box>
  );
}
