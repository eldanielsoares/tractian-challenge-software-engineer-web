import { IAssets } from "@/@core/usecases/assets/domain/models/assets.model";
import { Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import { Chart } from "./Chart";
import groupBy from "lodash/groupBy";
import { dictionary } from "@/utils/dictionary";

interface Chart {
  name: string;
  color: string;
  value: number;
}

interface OverviewColumnChartProps {
  data: IAssets[];
  onClick: () => void;
}

const colors: any = {
  inAlert: "#EEC03F",
  inOperation: "#2FCE52",
  inDowntime: "#ee453f",
};

export const OverviewPieChartComponent: React.FC<OverviewColumnChartProps> = ({
  data,
  onClick,
}) => {
  const groupList = Object.values(
    groupBy(data, (i) => {
      return i.status;
    })
  );

  const groupPie: Chart[] = [];
  groupList.map((s) => {
    let list = {
      name: dictionary(s[0].status),
      color: colors[s[0].status],
      value: s.length,
    };
    groupPie.push(list);
  });

  return (
    <Card onClick={onClick} cursor={"pointer"}>
      <CardBody>
        <Text fontSize={"lg"} fontWeight={"semibold"} mb={4}>
          Resumo geral do estado das máquinas
        </Text>
        <Chart data={groupPie} />
      </CardBody>
    </Card>
  );
};
