import { User } from "@/@core/usecases/users/domain/entities/user";
import { Card, CardBody, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { NameIcon } from "../../SharedComponents/NameIcon";
import { ModalUpdateUser } from "../ModalUpdateUser";

interface IUserProps {
  user: User;
  onClick: () => void;
}

export const SimpleCardUser: React.FC<IUserProps> = ({ user, onClick }) => {
  return (
    <Card maxW={["256px", "200px"]} minH={"185px"} cursor="pointer">
      <CardBody
        py={4}
        px={4}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
      >
        <ModalUpdateUser user={user} />
        <Stack spacing={3} alignItems="center" onClick={onClick}>
          <NameIcon name={user.name} />
          <Text fontSize="lg" fontWeight={"bold"} textAlign="center">
            {user.name}
          </Text>
          <Text fontSize="sm" fontWeight={"light"} textAlign="center">
            {user.email}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
