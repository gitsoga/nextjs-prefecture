import { getPrefectureCodeList } from "../lib/component/Prefecture/prefecturecode";
import { getPrefecturePopulation } from "../lib/component/Prefecture/prefecturepopulation";
import Graph from "../lib/component/Prefecture/graph";

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

async function handleClicked(prefCode: number) {
  const prefecturePopulation = await getPrefecturePopulation(prefCode);
  return {
    props: {
      prefecturePopulation,
    },
  };
}

export default function Home({ prefectureCodeList }: Props) {
  return (
    <>
      <h1>都道府県別の総人口推移グラフ</h1>
      <section>
        <ul>
          {prefectureCodeList.map(({ prefCode, prefName }) => (
            <li key={prefCode}>
              <input
                type="checkbox"
                id="{prefCode}"
                name=""
                onChange={(event) => handleClicked(prefCode)}
              />
              <label htmlFor="{prefCode}">{prefName}</label>
            </li>
          ))}
        </ul>
      </section>

      <Graph />
    </>
  );
}
