import { useOverview } from "@/context/OverviewContext";
import { Card, CardBody, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiPlus, FiTrash2 } from "react-icons/fi";

interface Props {
  id: number;
  isRemove: boolean;
  onAction?: () => void;
}

export const ButtonManagerUsers: React.FC<Props> = ({
  id,
  isRemove,
  onAction = () => {},
}) => {
  const { overview } = useOverview();
  const user = overview.users && overview.users.find((user) => user.id === id);

  return (
    <Card boxShadow={0} my={3}>
      <CardBody
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        bg="#f5f5f5"
        py={2}
      >
        <Text fontSize={"md"} fontWeight={"medium"}>
          {user?.name}
        </Text>
        <Icon
          as={isRemove ? FiTrash2 : FiPlus}
          color={"#111"}
          boxSize="4"
          onClick={onAction}
        />
      </CardBody>
    </Card>
  );
};
