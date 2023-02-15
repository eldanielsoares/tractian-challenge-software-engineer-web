import { IWorkOrders } from "@/@core/usecases/workorders/domain/models/workorders.models";
import workorders from "@/pages/workorders";
import { colors } from "@/utils/colors.obj";
import { dictionary } from "@/utils/dictionary";
import {
  Card,
  CardBody,
  Stack,
  Button,
  Image,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import React from "react";
import { ModalDelegateWorkorders } from "../ModalDelegateWorkorders";

interface CardWorkorders {
  workorders: IWorkOrders;
  image: string;
  name: string;
}

export const CardWorkorders: React.FC<CardWorkorders> = ({
  workorders,
  image,
  name,
}) => {
  return (
    <Card maxW={["256px", "300px"]} p={0} pb={4} minH={["300px", "700px"]}>
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
              {workorders.description}
            </Text>
          </Text>

          <Text fontSize="sm">
            Status:{" "}
            <Text
              as={"span"}
              fontWeight="semibold"
              color={colors[workorders.status]}
              bg={`${colors[workorders.status]}70`}
              px={4}
              rounded="md"
              borderWidth={"1px"}
              borderColor={colors[workorders.status]}
            >
              {dictionary(workorders.status)}
            </Text>
          </Text>

          <Text fontSize="sm">
            Prioridade:{" "}
            <Text
              as={"span"}
              fontWeight="semibold"
              color={colors[workorders.priority]}
              bg={`${colors[workorders.priority]}50`}
              px={4}
              rounded="md"
              borderWidth={"1px"}
              borderColor={colors[workorders.priority]}
            >
              {dictionary(workorders.priority)}
            </Text>
          </Text>

          <Text fontSize="md" fontWeight={"semibold"}>
            Tarefas
          </Text>

          {workorders.checklist.map((cl, key) => (
            <Text
              key={key}
              color={cl.completed ? colors["completed"] : colors["uncompleted"]}
            >
              -{cl.task}
            </Text>
          ))}
        </Stack>
      </CardBody>
      <CardFooter>
        <ModalDelegateWorkorders ids={workorders.assignedUserIds} />
      </CardFooter>
    </Card>
  );
};
