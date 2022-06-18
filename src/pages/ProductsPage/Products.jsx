//import products from "../products";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
// import { description_data, sorted_data } from "../redux/action";
import { useHistory } from "react-router-dom";
import { description_data, sorted_data } from "../../Redux/action";
import FilterComponent from "../../components/FilterComponents";
import {
  Box,
  Divider,
  Flex,
  Grid,
  Heading,
  Select,
  Stack,
} from "@chakra-ui/react";
import Product from "./Product";

const Products = () => {
  const store = useSelector((state) => state);
  const data = store.products;
  const [state, setState] = useState(false);
  const navigate = useHistory();
  const dispatch = useDispatch();
  const sortedData = store.sortedData;

  const handleclick = (payload) => {
    dispatch(description_data(payload));
    localStorage.setItem("productdetails", JSON.stringify(payload));
    navigate.push("/description");
  };
  const handleSort = (e) => {
    if (e.target.value === "asc") {
      const Sdata = data.sort((a, b) => {
        return Number(a.mrp) - Number(b.mrp);
      });

      dispatch(sorted_data(Sdata));
      setState(true);
    } else if (e.target.value === "desc") {
      const Sdata = data.sort((a, b) => {
        return Number(b.mrp) - Number(a.mrp);
      });
      dispatch(sorted_data(Sdata));
      setState(true);
    }
  };

  return (
    <Flex>
      <Box mr={5}>
        <FilterComponent />
      </Box>
      <Divider orientation="vertical" />
      <Box>
        <Stack>
          <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            width={"6xl"}
          >
            {" "}
            <Heading fontSize={14}>Found {data.length} product(s)</Heading>
            <Box>
              <Select placeholder="Select option" onClick={handleSort}>
                <option value="asc">Price low to high</option>
                <option value="desc">Price high to low</option>
                <option value="Discount">Discount</option>
                <option value="Popularty">Popularty</option>
              </Select>
            </Box>
          </Flex>
          <Grid
            templateColumns="repeat(4, 1fr)"
            w={"6xl"}
            gap={3}
            textAlign={"center"}
          >
            {state
              ? sortedData.map((elem) => {
                  return (
                    <>
                      <Product item={elem} handleclick={handleclick} />
                    </>
                  );
                })
              : data.map((elem) => {
                  return (
                    <>
                      <Product item={elem} handleclick={handleclick} />
                    </>
                  );
                })}
          </Grid>
        </Stack>
      </Box>
    </Flex>
  );
};
export default Products;
