import React from "react";
import { IWorkOrders } from "@/@core/usecases/workorders/domain/models/workorders.models";
import { colors } from "@/utils/colors.obj";
import { dictionary } from "@/utils/dictionary";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Text,
  CardFooter,
  HStack,
  Checkbox,
} from "@chakra-ui/react";
import { ModalDelegateWorkorders } from "../ModalDelegateWorkorders";
import { TextDecorated } from "@/components/SharedComponents/TextDecorated";

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
    <Card p={0} pb={4}>
      <CardBody p={0}>
        <Image
          src={image}
          alt="Asset"
          borderTopRadius={"lg"}
          w={"100%"}
          h={"200px"}
          objectFit="cover"
        />
        <Stack spacing="2.5" py={3} px={4}>
          <Text fontSize="2xl" fontWeight={"semibold"}>
            {name}
          </Text>

          <Text
            as={"span"}
            fontWeight="semibold"
            color={"#6f6f6f"}
            fontSize="lg"
          >
            {workorders.description}
          </Text>

          <Stack direction={"row"} spacing={3}>
            <Text fontSize="sm" fontWeight={"medium"}>
              Status:
              <br />
              <TextDecorated title={workorders.status} />
            </Text>

            <Text fontSize="sm" fontWeight={"medium"}>
              Prioridade:
              <br />
              <TextDecorated title={workorders.priority} />
            </Text>
          </Stack>

          <Stack spacing={"1"}>
            <Text fontSize="lg" fontWeight={"semibold"}>
              Tarefas
            </Text>
            {workorders.checklist.map((cl, key) => (
              <HStack key={key}>
                <Checkbox
                  defaultChecked={cl.completed}
                  disabled={cl.completed}
                ></Checkbox>
                <Text
                  textDecoration={cl.completed ? "line-through" : "none"}
                  color={
                    cl.completed ? colors["finished"] : colors["uncompleted"]
                  }
                >
                  {cl.task}
                </Text>
              </HStack>
            ))}
          </Stack>
          <ModalDelegateWorkorders ids={workorders.assignedUserIds} />
        </Stack>
      </CardBody>
    </Card>
  );
};
