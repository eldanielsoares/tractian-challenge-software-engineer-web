import { Flex } from "@chakra-ui/react";
import { container, Registry } from "@/@core/shared/container-registry";
import { GetServerSideProps, NextPage } from "next";
import { Header } from "@/components/SharedComponents/Header";
import { AssetByIdUsecase } from "@/@core/usecases/assets/application/assetById-usecase";
import { IUnits } from "@/@core/usecases/overview/domain/models/overview.models";
import { Assets } from "@/@core/usecases/assets/domain/entities/assets";
import { useOverview } from "@/context/OverviewContext";
import { AssetDetails } from "@/components/AssetsComponents/AssetDetails";
import { LineTimeComponent } from "@/components/AssetsComponents/LineTimeComponent";
import LineChartComponent from "@/components/AssetsComponents/LineChartComponent";
import { TableHealth } from "@/components/AssetsComponents/TableHealth";
import { health, temperature } from "../../../mock/fake.data";

interface IAssets {
  asset: Assets;
}

const Asset: NextPage<IAssets> = ({ asset }) => {
  const { overview } = useOverview();
  const findUnit = overview.units
    ? overview.units.find((unit) => (unit.companyId = asset.companyId))
    : ({} as IUnits);

  const averageTemperature =
    temperature.reduce((p, c) => p + c.value, 0) / temperature.length;

  return (
    <>
      <Header />
      <Flex maxW={1480} px={8} mx="auto" direction="column" gap={6}>
        <AssetDetails asset={asset} unit={findUnit?.name || ""} />
        <LineTimeComponent healthHistory={asset.healthHistory} />
        <LineChartComponent
          title={"Histórico de temperatura"}
          subtitle={`Temperatura média: ${averageTemperature}°`}
          titley={"°C"}
          data={temperature}
        />

        <LineChartComponent
          title={"Histórico de saúde da máquina"}
          titley={"%"}
          data={health}
        />
        <TableHealth data={health} />
      </Flex>
    </>
  );
};

export default Asset;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const useCase = container.get<AssetByIdUsecase>(Registry.AssetByIdUsecase);

  const id = params?.id as string;

  const asset = await useCase.execute(id);

  return {
    props: {
      asset,
    },
  };
};
