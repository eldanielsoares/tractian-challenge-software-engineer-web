import { Card, CardBody, CardFooter, Heading, Text } from "@chakra-ui/react";
import React from "react";

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
    <Card w={["256px", "400px"]}>
      <CardBody
        py={8}
        px={4}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
      >
        <Text
          fontSize={"2xl"}
          fontWeight={"bold"}
          color="#6f6f6f"
          textAlign="center"
        >
          {title}
        </Text>

        <Text
          fontSize={"128px"}
          fontWeight={"bold"}
          textAlign="center"
          color={"#214DB6"}
        >
          {value}
        </Text>
        {modal}
      </CardBody>
    </Card>
  );
};
