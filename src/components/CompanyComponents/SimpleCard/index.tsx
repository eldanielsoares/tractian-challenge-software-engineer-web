import React from "react";
import { Card, CardBody, Flex, Text } from "@chakra-ui/react";

interface SimpleCardProps {
  title: string;
  value: string;
  modal?: JSX.Element;
}

export const SimpleCard: React.FC<SimpleCardProps> = ({
  title,
  value,
  modal,
}) => {
  return (
    <Card w={["256px"]}>
      <CardBody
        py={8}
        px={4}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
      >
        <Flex
          justifyContent={"center"}
          alignItems="center"
          w={"100%"}
          gap={"4"}
        >
          <Text
            fontSize={"2xl"}
            fontWeight={"bold"}
            color="#6f6f6f"
            textAlign="center"
          >
            {title}
          </Text>
          {modal}
        </Flex>

        <Text
          fontSize={"62px"}
          fontWeight={"bold"}
          textAlign="center"
          color={"#214DB6"}
        >
          {value}
        </Text>
      </CardBody>
    </Card>
  );
};
