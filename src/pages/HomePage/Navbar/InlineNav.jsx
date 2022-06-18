import {
  useDisclosure,
  Box,
  Divider,
  Container,
  Text,
  Flex,
} from "@chakra-ui/react";
import { NavbarDropdown } from "./NavDropdown";

export const InlineNav = () => {
  return (
    <>
      <Divider orientation="horizontal" />
      <Box>
        <Flex alignItems={"center"} justifyContent={"flex-start"}>
          <NavbarDropdown />
        </Flex>
      </Box>
      <Divider orientation="horizontal" />
    </>
  );
};
