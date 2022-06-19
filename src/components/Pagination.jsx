import React, { useState, useEffect } from "react";
import { Button, ButtonGroup, Select, Stack } from "@chakra-ui/react";
const Pagination = ({
  showPerPage,
  onPaginationChange,
  handlechange,
  total,
}) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter, showPerPage]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <ButtonGroup>
      <Button
        data-cy="pagination-previous-button"
        disabled={showPerPage < 1}
        onClick={() => onButtonClick("prev")}
      >
        Previos
      </Button>
      <Select
        data-cy="pagination-limit-select"
        onChange={(e) => handlechange(e.target.value)}
      >
        <option data-cy="pagination-limit-3">select perpage value</option>
        <option data-cy="pagination-limit-3">4</option>
        <option data-cy="pagination-limit-3">6</option>
        <option data-cy="pagination-limit-3">8</option>
        <option data-cy="pagination-limit-6">12</option>
        <option data-cy="pagination-limit-9">16</option>
        <option data-cy="pagination-limit-9">20</option>
        <option data-cy="pagination-limit-9">24</option>
      </Select>

      <Button
        data-cy="pagination-next-button"
        disabled={total <= showPerPage * counter}
        onClick={() => onButtonClick("next")}
      >
        Next
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
