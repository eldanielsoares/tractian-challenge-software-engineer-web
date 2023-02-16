import { useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { container, Registry } from "@/@core/shared/container-registry";
import { ListUserUsecase } from "@/@core/usecases/users/application/list-user";
import { User } from "@/@core/usecases/users/domain/entities/user";
import { EmptyList } from "@/components/SharedComponents/EmptyList";
import { Header } from "@/components/SharedComponents/Header";
import { GridUsers } from "@/components/UsersComponents/GridUsers";
import { Input } from "@/components/SharedComponents/Input";

interface IUsersProps {
  users: User[];
}

const Users: NextPage<IUsersProps> = ({ users }) => {
  const [input, setInput] = useState("");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(input.toLowerCase())
  );

  const listUsers =
    filteredUsers.length === 0 && !input ? users : filteredUsers;

  return (
    <>
      <Header />
      <Flex maxW={1480} px={8} mx="auto" direction={"column"}>
        <Heading color="#214DB6" mt={"64px"} fontWeight="semibold">
          Equipe
        </Heading>

        <Text fontSize={"lg"}>
          Aqui está sua equipe, clique no card para mais detalhes
        </Text>

        <Input
          value={input}
          placeholder={"Digite o nome de um colaborador"}
          onChange={(event) => setInput(event.target.value)}
          alignSelf={"flex-end"}
          label={""}
        />

        {filteredUsers.length === 0 && input && <EmptyList />}

        <GridUsers users={listUsers || []} />
      </Flex>
    </>
  );
};

export default Users;

export const getServerSideProps: GetServerSideProps = async () => {
  const usecase = container.get<ListUserUsecase>(Registry.ListUsersUsecase);

  const users = await usecase.execute();

  return {
    props: {
      users,
    },
  };
};
