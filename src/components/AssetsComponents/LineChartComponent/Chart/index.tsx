import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { parseISO } from "date-fns";
import { formatDateToString } from "@/utils/formatDate";

interface Data {
  value: number;
  date: string;
}

interface ChartProps {
  data: Data[];
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
        type: "spline",
        name: "",
        data: data.map((d) => d.value),
      },
    ],
    xAxis: {
      categories: data.map((c) =>
        formatDateToString(parseISO(c.date), "dd MMM yy")
      ),
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
