import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Lottie from "react-lottie";

import Loading from "./assets/Loading.json";

export const LoadingComponent: React.FC = () => {
  return (
    <Flex
      w={"100%"}
      h={"100vh"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent="center"
    >
      <Stack maxW={"400px"} alignItems="center">
        <Lottie
          options={{
            animationData: Loading,
            autoplay: true,
            loop: true,
          }}
        />

        <Text fontSize={"lg"} fontWeight="semibold">
          Buscando dados
        </Text>
      </Stack>
    </Flex>
  );
};
