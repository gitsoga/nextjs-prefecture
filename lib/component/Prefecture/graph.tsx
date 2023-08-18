import React, { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export async function getStaticProps() {}

export default function Graph(props: HighchartsReact.Props) {
  const options: Highcharts.Options = {
    title: {
      text: "都道府県別の総人口推移グラフ",
    },
    series: [
      {
        type: "line",
        name: "北海道",
        data: [1, 2, 3],
      },
      {
        type: "line",
        name: "沖縄県",
        data: [5, 10, 9],
      },
    ],
  };
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
      {...props}
    />
  );
}
