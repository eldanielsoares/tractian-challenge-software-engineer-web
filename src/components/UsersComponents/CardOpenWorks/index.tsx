import React from "react";
import { colors } from "@/utils/colors.obj";
import { dictionary } from "@/utils/dictionary";
import { IWorkOrdersOverview } from "@/@core/usecases/overview/domain/models/overview.models";
import {
  Card,
  CardBody,
  Checkbox,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
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

          <Text
            as={"span"}
            fontWeight="semibold"
            color={"#6f6f6f"}
            fontSize="lg"
          >
            {workopen.description}
          </Text>

          <Stack direction={"row"} spacing={12}>
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
        </Stack>
      </CardBody>
    </Card>
  );
};
