import { getPrefectureCodeList } from "../lib/component/Prefecture/prefecturecode";
import { getPrefecturePopulation } from "../lib/component/Prefecture/prefecturepopulation";
import Graph from "../lib/component/Prefecture/graph";
import React, { useState } from "react";

type Props = {
  prefectureCodeList: {
    prefCode: number;
    prefName: string;
  }[];
};

export async function getStaticProps() {
  const prefectureCodeList = await getPrefectureCodeList();
  return {
    props: {
      prefectureCodeList,
    },
  };
}

export default function Home({ prefectureCodeList }: Props) {
  const [checkPrefName, setCheckPrefName] = useState<string>("");
  const [populationdata, setPopulationdata] = useState<[]>([]);

  async function handleClicked(prefCode: number, prefName: string) {
    const prefecturePopulation = await getPrefecturePopulation(prefCode);
    setCheckPrefName(prefName);
    setPopulationdata(prefecturePopulation);
  }

  return (
    <>
      <h1 className="text-2xl font-bold pb-4">都道府県別の総人口推移グラフ</h1>
      <section className="w-3/4">
        <ul className="grid grid-cols-10">
          {prefectureCodeList.map(({ prefCode, prefName }) => (
            <li className="col-span-1" key={prefCode}>
              <input
                type="radio"
                id="{prefCode}"
                name="{prefCode}"
                onChange={(event) => handleClicked(prefCode, prefName)}
              />
              <label htmlFor="{prefCode}">{prefName}</label>
            </li>
          ))}
        </ul>
      </section>

      <Graph prefName={checkPrefName} populationdata={populationdata} />
    </>
  );
}
