import { User } from "@/@core/usecases/users/domain/entities/user";
import { Card, CardBody, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { NameIcon } from "../../SharedComponents/NameIcon";

interface IUserProps {
  user: User;
  onClick: () => void;
}

export const SimpleCardUser: React.FC<IUserProps> = ({ user, onClick }) => {
  return (
    <Card
      maxW={["256px", "200px"]}
      minH={"185px"}
      onClick={onClick}
      cursor="pointer"
    >
      <CardBody
        py={4}
        px={4}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
      >
        <NameIcon name={user.name} />
        <Stack spacing="1" p={3}>
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
