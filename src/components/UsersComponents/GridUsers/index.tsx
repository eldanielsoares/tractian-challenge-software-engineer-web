import React from "react";
import { User } from "@/@core/usecases/users/domain/entities/user";
import { Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SimpleCardUser } from "../SimpleCardUser";

interface IUserProps {
  users: User[];
}

export const GridUsers: React.FC<IUserProps> = ({ users = [] }) => {
  const { push } = useRouter();
  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(3, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(5, 1fr)",
      ]}
      gap={5}
      flexWrap={"nowrap"}
      my={"10"}
      justifyContent="space-between"
      alignSelf="center"
    >
      {users.map((user, key) => (
        <GridItem w="100%" minW={["130px", "200px"]} key={key}>
          <SimpleCardUser
            user={user}
            onClick={() => push(`/users/${user.id}`)}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
