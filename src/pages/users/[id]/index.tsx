import { Flex, Heading } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";
import { useOverview } from "@/context/OverviewContext";
import { container, Registry } from "@/@core/shared/container-registry";
import { IUnits } from "@/@core/usecases/overview/domain/models/overview.models";
import { UserByIdUsecase } from "@/@core/usecases/users/application/userById";
import { User } from "@/@core/usecases/users/domain/entities/user";
import { CardUserDetails } from "@/components/UsersComponents/CardUserDetails";
import { GridWorkOrders } from "@/components/UsersComponents/GridWorkOrders";
import { Header } from "@/components/SharedComponents/Header";

interface IUSerProps {
  user: User;
}

const UserById: NextPage<IUSerProps> = ({ user }) => {
  const { overview } = useOverview();
  const findUnit = overview.units
    ? overview.units.find((unit) => (unit.companyId = user.companyId))
    : ({} as IUnits);

  const works = overview.workorders
    ? overview.workorders.filter((w) => w.assignedUserIds.includes(user.id))
    : [];

  return (
    <>
      <Header />
      <Flex maxW={1480} px={8} mx="auto" direction={"column"}>
        <Heading color="#214DB6" mt={6} fontWeight="semibold">
          Colaborador
        </Heading>

        <CardUserDetails
          user={user}
          unit={findUnit?.name || ""}
          openWorks={String(works.length)}
        />

        <GridWorkOrders workorder={works} />
      </Flex>
    </>
  );
};

export default UserById;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const useCase = container.get<UserByIdUsecase>(Registry.UserByIdUseCase);

  const id = params?.id as string;

  const user = await useCase.execute(id);

  return {
    props: {
      user,
    },
  };
};
