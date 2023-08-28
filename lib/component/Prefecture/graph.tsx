import React, { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export async function getStaticProps() {}

type PopProps = {
  prefName: string;
  populationdata: any[];
  //populationdata: { label: string; data: { year: number; value: number }[];
};

export default function Graph({ prefName, populationdata }: PopProps) {
  const props = HighchartsReact.Props;
  let series: Highcharts.SeriesOptionsType[] = [];

  for (let post of populationdata) {
    if (post.label == "総人口") {
      series.push({
        type: "line",
        name: prefName,
        data: post.data.map(
          (data: { year: number; value: number }) => data.value
        ),
      });
    }
  }

  const options: Highcharts.Options = {
    title: {
      text: "都道府県別の総人口推移グラフ",
    },
    series: series,
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
