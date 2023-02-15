import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const LineTimeDivider: React.FC = () => {
  return (
    <Flex alignItems={"center"} maxW={"fit-content"}>
      <Flex w={"95px"} h={"1px"} bg={"#d9d9d9"} />
      <Box
        borderRadius="full"
        borderWidth={"2px"}
        borderColor="#214DB6"
        h={6}
        w={6}
      />
    </Flex>
  );
};
