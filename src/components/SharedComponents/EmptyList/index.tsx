import { Stack, Image, Text } from "@chakra-ui/react";
import React from "react";

export const EmptyList: React.FC = () => {
  return (
    <Stack maxH={"500px"} alignSelf="center" spacing={0} px="4" mt={"2"}>
      <Image src="/empty.svg" alt="Nenhum dado encontrado" />
      <Text textAlign={"center"} fontWeight="medium" fontSize={"md"}>
        Não conseguimos encontrar nenhum dado 😔
      </Text>
    </Stack>
  );
};
