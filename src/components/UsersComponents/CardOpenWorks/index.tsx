import React from "react";
import { colors } from "@/utils/colors.obj";
import { dictionary } from "@/utils/dictionary";
import { IWorkOrdersOverview } from "@/@core/usecases/overview/domain/models/overview.models";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";

interface CardOpenWork {
  workopen: IWorkOrdersOverview;
  image: string;
  name: string;
}

export const CardOpenWorks: React.FC<CardOpenWork> = ({
  workopen,
  image,
  name,
}) => {
  return (
    <Card maxW={["256px", "300px"]} p={0} minH={["auto", "680px"]} pb={4}>
      <CardBody p={0}>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderTopRadius={"lg"}
          w={"100%"}
          h={"200px"}
          objectFit="cover"
        />
        <Stack spacing="3" p={3}>
          <Text fontSize="2xl" fontWeight={"semibold"}>
            {name}
          </Text>
          <Text fontSize="sm" color={"#6f6f6f"}>
            Descrição:{" "}
            <Text as={"span"} fontWeight="semibold">
              {workopen.description}
            </Text>
          </Text>

          <Text fontSize="sm">
            Status:{" "}
            <Text
              as={"span"}
              fontWeight="semibold"
              color={colors[workopen.status]}
              bg={`${colors[workopen.status]}70`}
              px={4}
              rounded="md"
              borderWidth={"1px"}
              borderColor={colors[workopen.status]}
            >
              {dictionary(workopen.status)}
            </Text>
          </Text>

          <Text fontSize="sm">
            Prioridade:{" "}
            <Text
              as={"span"}
              fontWeight="semibold"
              color={colors[workopen.priority]}
              bg={`${colors[workopen.priority]}50`}
              px={4}
              rounded="md"
              borderWidth={"1px"}
              borderColor={colors[workopen.priority]}
            >
              {dictionary(workopen.priority)}
            </Text>
          </Text>

          <Text fontSize="md" fontWeight={"semibold"}>
            Tarefas
          </Text>

          {workopen.checklist.map((cl, key) => (
            <Text
              key={key}
              color={cl.completed ? colors["completed"] : colors["uncompleted"]}
            >
              -{cl.task}
            </Text>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};
