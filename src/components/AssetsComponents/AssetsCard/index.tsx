import React from "react";
import { Card, CardBody, Stack, Image, Text, Heading } from "@chakra-ui/react";
import { dictionary } from "@/utils/dictionary";
import { colors } from "@/utils/colors.obj";

interface AssetsCardProps {
  name: string;
  model: string;
  image: string;
  status: string;
  sensors: string[];
  onClick: () => void;
}

export const AssetsCard: React.FC<AssetsCardProps> = ({
  name,
  model,
  image,
  status,
  sensors = [],
  onClick,
}) => {
  const sensorList = sensors.join(",");

  return (
    <Card
      maxW={["256px", "300px"]}
      p={0}
      minH={"300px"}
      onClick={onClick}
      cursor="pointer"
    >
      <CardBody p={0}>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderTopRadius={"lg"}
          w={"100%"}
          h={"190px"}
          objectFit="cover"
        />
        <Stack spacing="1" p={3}>
          <Heading fontSize="lg" fontWeight={"semibold"}>
            {name}
          </Heading>
          <Text fontSize="sm" color={"#6f6f6f"}>
            Modelo:{" "}
            <Text as={"span"} fontWeight="semibold" fontSize={"lg"}>
              {model}
            </Text>
          </Text>

          <Text fontSize="sm" color={"#6f6f6f"}>
            Sensores:{" "}
            <Text as={"span"} fontWeight="semibold" fontSize={"md"}>
              {sensorList}
            </Text>
          </Text>

          <Text fontSize="sm">
            Status:{" "}
            <Text
              as={"span"}
              fontWeight="semibold"
              fontSize={"md"}
              color={colors[status]}
            >
              {dictionary(status)}
            </Text>
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
