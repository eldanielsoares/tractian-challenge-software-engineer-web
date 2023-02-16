import React from "react";
import { colors } from "@/utils/colors.obj";
import { dictionary } from "@/utils/dictionary";
import { IWorkOrdersOverview } from "@/@core/usecases/overview/domain/models/overview.models";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import { TextDecorated } from "@/components/SharedComponents/TextDecorated";

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
    <Card p={0} pb={4}>
      <CardBody p={0}>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderTopRadius={"lg"}
          w={"100%"}
          h={"200px"}
          objectFit="cover"
        />
        <Stack spacing="3" py={3} px={4}>
          <Text fontSize="2xl" fontWeight={"semibold"}>
            {name}
          </Text>
          <Text fontSize="lg" color={"#6f6f6f"}>
            Descrição:
            <Text as={"span"} fontWeight="semibold">
              {workopen.description}
            </Text>
          </Text>

          <Stack direction={"row"} justifyContent={"space-between"}>
            <Text fontSize="sm" fontWeight={"medium"}>
              Status:
              <br />
              <TextDecorated title={workopen.status} />
            </Text>

            <Text fontSize="sm" fontWeight={"medium"}>
              Prioridade:
              <br />
              <TextDecorated title={workopen.priority} />
            </Text>
          </Stack>

          <Stack spacing={"1"}>
            <Text fontSize="lg" fontWeight={"semibold"}>
              Tarefas
            </Text>
            {workopen.checklist.map((cl, key) => (
              <Text
                key={key}
                fontWeight={"medium"}
                color={
                  cl.completed ? colors["completed"] : colors["uncompleted"]
                }
              >
                -{cl.task}
              </Text>
            ))}
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};
