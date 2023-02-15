import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { IAssets } from "@/@core/usecases/assets/domain/models/assets.model";

interface ChartProps {
  data: IAssets[];
  titleY: string;
}

export const Chart: React.FC<ChartProps> = ({ data, titleY }) => {
  const options = {
    title: {
      text: " ",
    },
    chart: {
      backgroundColor: "transparent",
      style: {
        fontFamily: "Poppins, sans-serif",
      },
    },
    colors: ["#214DB6"],

    series: [
      {
        type: "column",
        name: "",
        data: data.map((d) => d.healthscore),
      },
    ],

    xAxis: {
      categories: data.map((c) => c.name),
      gridLineWidth: 1,
      gridLineColor: "#e0e0e0",
      gridLineDashStyle: "dot",
    },
    yAxis: {
      title: {
        text: titleY,
      },
      gridLineWidth: 1,
      gridLineColor: "#e0e0e0",
      gridLineDashStyle: "dot",
    },
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
