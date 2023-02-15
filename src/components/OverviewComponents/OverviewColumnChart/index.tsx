import { IAssets } from "@/@core/usecases/assets/domain/models/assets.model";
import { Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import { Chart } from "./Chart";

interface OverviewColumnChartProps {
  data: IAssets[];
  titleY: string;
  onClick: () => void;
}

export const OverviewColumnChartComponent: React.FC<
  OverviewColumnChartProps
> = ({ data, titleY, onClick }) => {
  return (
    <Card onClick={onClick} cursor={"pointer"}>
      <CardBody>
        <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
          Resumo geral da saúde das maquinas
        </Text>

        <Chart data={data} titleY={titleY} />
      </CardBody>
    </Card>
  );
};
