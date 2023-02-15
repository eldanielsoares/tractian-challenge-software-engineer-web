import { IUser } from "@/@core/usecases/users/domain/models/users.model";
import { Button, Card, CardBody, Divider, Stack, Text } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { OverviewTeamItem } from "../OverviewTeamItem";

interface OverviewTeamProps {
  users: IUser[];
  onClick: () => void;
}

export const OverviewTeam: React.FC<OverviewTeamProps> = ({
  users,
  onClick,
}) => {
  return (
    <Card minH={["280px", "310px"]}>
      <CardBody>
        <Text fontWeight={"semibold"} fontSize="lg" mb={4}>
          Equipe
        </Text>
        <Stack>
          {users.slice(0, 3).map((user, key) => (
            <Fragment key={key}>
              <OverviewTeamItem name={user.name} email={user.email} />
              <Divider />
            </Fragment>
          ))}
          <Button
            variant={"solid"}
            bg="#214DB6"
            color={"white"}
            maxW="150px"
            alignSelf={"flex-end"}
            onClick={onClick}
            cursor={"pointer"}
            _hover={{
              background: "#214DB690",
            }}
          >
            Ver mais
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};
