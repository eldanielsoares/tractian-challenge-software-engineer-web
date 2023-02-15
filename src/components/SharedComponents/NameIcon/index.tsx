import React from "react";
import { Box, Text } from "@chakra-ui/react";

interface NameIcon {
  name: string;
}

export const NameIcon: React.FC<NameIcon> = ({ name }) => {
  return (
    <Box
      w={"60px"}
      h={"60px"}
      borderRadius={"30px"}
      bg={"#214DB6"}
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text color={"white"} fontWeight="bold" fontSize={"lg"}>
        {name[0].toUpperCase()}
      </Text>
    </Box>
  );
};
