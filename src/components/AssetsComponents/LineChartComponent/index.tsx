import React from "react";

import { Card, CardBody, Stack, Text } from "@chakra-ui/react";
import { Chart } from "./Chart";

interface DataChart {
  value: number;
  date: string;
}

interface Data {
  title: string;
  subtitle?: string;
  titley: string;
  data: DataChart[];
}

const LineChartComponent: React.FC<Data> = ({
  data,
  title,
  titley,
  subtitle,
}) => {
  return (
    <Card>
      <CardBody>
        <Stack spacing={2}>
          <Text fontSize={"lg"} fontWeight="semibold">
            {title}
          </Text>
          {subtitle && (
            <Text fontSize={"md"} fontWeight="regular" color={"#6f6f6f"}>
              {subtitle}
            </Text>
          )}
          <Chart data={data} titleY={titley} />
        </Stack>
      </CardBody>
    </Card>
  );
};

export default LineChartComponent;
