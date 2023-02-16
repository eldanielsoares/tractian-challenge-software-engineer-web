import { GetServerSideProps, NextPage } from "next";
import { Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { useOverview } from "@/context/OverviewContext";
import { container, Registry } from "@/@core/shared/container-registry";
import { CompanyByIdUsecase } from "@/@core/usecases/company/application/companyById-usecase";
import { Company as CompanyData } from "@/@core/usecases/company/domain/entities/company";
import { GridUnits } from "@/components/CompanyComponents/GridUnits";
import { Header } from "@/components/SharedComponents/Header";
import { SimpleCard } from "@/components/CompanyComponents/SimpleCard";
import { ModalAddAsset } from "@/components/CompanyComponents/ModalAddAsset";
import { ModalUpdateCompany } from "@/components/CompanyComponents/ModalUpdateCompany";
import { ModalEditAddUnit } from "@/components/CompanyComponents/ModalEditAddUnit";

interface ICompanyProps {
  company: CompanyData;
}

const Company: NextPage<ICompanyProps> = ({ company }) => {
  const { overview } = useOverview();
  const findUnits = overview.units
    ? overview.units.filter((unit) => unit.companyId === company.id)
    : [];

  const countAssets = overview.assets ? overview.assets.length : 0;

  const countWorkOrders = overview.workorders
    ? overview.workorders.filter((workers) => workers.status === "completed")
        .length
    : 0;

  const countAssetsDownTime = overview.assets
    ? overview.assets.filter(
        (asset) =>
          asset.companyId === company.id &&
          asset.status.toLowerCase() === "indowntime"
      ).length
    : 0;

  const countTeam = overview.users
    ? overview.users.filter((user) => user.companyId === company.id).length
    : 0;

  return (
    <>
      <Header />
      <Flex maxW={1480} px={8} mx="auto" direction={"column"}>
        <Flex gap={4} alignItems="center">
          <Heading color="#214DB6" mt={"64px"} fontWeight="semibold">
            Informações da empresa
          </Heading>
          <ModalUpdateCompany
            name={overview.companies && overview.companies[0].name}
          />
        </Flex>
        <Flex alignItems={"center"} mt={2}>
          <Text fontSize={"2xl"} color="#222" mr={"2"} fontWeight="semibold">
            Unidades
          </Text>
          <ModalEditAddUnit />
        </Flex>
        <GridUnits units={findUnits} />

        <Text fontSize={"2xl"} color="#222" mt={6} fontWeight="semibold">
          Mais informações
        </Text>

        <Flex
          w={"100%"}
          justifyContent={["center", "center", "center", "space-between"]}
          flexWrap={"wrap"}
          my={4}
          gap={3}
        >
          <SimpleCard
            title={`Máquinas`}
            value={countAssets.toString()}
            modal={<ModalAddAsset />}
          />

          <SimpleCard
            title={`Máquinas paradas`}
            value={countAssetsDownTime.toString()}
          />

          <SimpleCard
            title={`Serviços abertos`}
            value={countWorkOrders.toString()}
          />

          <SimpleCard title={`Colaboradores`} value={countTeam.toString()} />
        </Flex>
      </Flex>
    </>
  );
};

export default Company;

export const getServerSideProps: GetServerSideProps = async () => {
  const useCase = container.get<CompanyByIdUsecase>(Registry.CompanyUseCase);

  const company = await useCase.execute("1");

  return {
    props: {
      company,
    },
  };
};
