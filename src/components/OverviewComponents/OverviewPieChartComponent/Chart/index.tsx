import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

interface Props {
  name: string;
  color: string;
  value: number;
}

interface ChartProps {
  data: Props[];
}

export const Chart: React.FC<ChartProps> = ({ data }) => {
  const options = {
    chart: {
      type: "pie",
    },
    plotOptions: {
      pie: {
        innerSize: "70%",
      },
    },

    title: {
      text: " ",
    },

    series: [
      {
        name: "Total",
        data: data.map((d) => {
          return {
            name: d.name,
            y: d.value,
            color: d.color,
            dataLabels: {
              enabled: true,
              format: `${d.name} - {point.percentage:.1f}%`,
            },
          };
        }),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
