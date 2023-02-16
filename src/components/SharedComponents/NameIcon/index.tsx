import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

interface NameIcon {
  name: string;
  isIcon?: boolean;
  onClick?: () => void;
}

export const NameIcon: React.FC<NameIcon> = ({
  name,
  onClick = () => {},
  isIcon = false,
}) => {
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
      onClick={onClick}
    >
      {isIcon ? (
        <Icon as={FiPlus} color={"#f5f5f5"} boxSize={"10"} />
      ) : (
        <Text color={"white"} fontWeight="bold" fontSize={"lg"}>
          {name[0].toUpperCase()}
        </Text>
      )}
    </Box>
  );
};
