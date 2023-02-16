import React from "react";
import { Input as ChakraInput, InputProps, Text } from "@chakra-ui/react";

interface Props extends InputProps {
  label: string;
}

export const Input: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <>
      <Text fontSize={"md"} color="#222" mt={"1"}>
        {label}
      </Text>
      <ChakraInput
        w={"100%"}
        {...rest}
        maxW={["auto", "400px"]}
        variant="outline"
      />
    </>
  );
};
