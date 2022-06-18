import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  // MenuItem,
  MenuItemOption,
  // MenuGroup,
  MenuOptionGroup,
  Button,
  MenuDivider,
  Checkbox,
  CheckboxGroup,
  VStack,
} from "@chakra-ui/react";

const FilterComponent = () => {
  return (
    <Box>
      <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
        <Text fontSize="2xl">Filters</Text>
        <Text mt={5} mb={4}>
          Category
        </Text>

        <CheckboxGroup mt={4}>
          <VStack alignItems={"baseline"}>
            <Checkbox size="sm" value="BADMINTON" colorScheme="orange">
              BADMINTON
            </Checkbox>
            <Checkbox value="Rackets" size="sm" colorScheme="orange">
              Rackets
            </Checkbox>
            <Checkbox value="Equipments" size="sm" colorScheme="orange">
              Equipments
            </Checkbox>
            <Checkbox value="Basketballs" size="sm" colorScheme="orange">
              Basketballs
            </Checkbox>
            <Checkbox value="Shoes" size="sm" colorScheme="orange">
              Shoes
            </Checkbox>
            <Checkbox value="Shuttlecock" size="sm" colorScheme="orange">
              Shuttlecock
            </Checkbox>
            <Checkbox value="Strings" size="sm" colorScheme="orange">
              Strings
            </Checkbox>
            <Checkbox value="Grips" size="sm" colorScheme="orange">
              Grips
            </Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box>
        <Menu>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px" placement="bottom">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default FilterComponent;
