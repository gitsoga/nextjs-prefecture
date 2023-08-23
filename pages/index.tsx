import { getPrefectureCodeList } from "../lib/component/Prefecture/prefecturecode";
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

export default function Home({ prefectureCodeList }: Props) {
  return (
    <>
      <h1>都道府県別の総人口推移グラフ</h1>
      <section>
        <ul>
          {prefectureCodeList.map(({ prefCode, prefName }) => (
            <li key={prefCode}>
              <input type="checkbox" id="{prefCode}" name="" />
              <label htmlFor="{prefCode}">{prefName}</label>
            </li>
          ))}
        </ul>
      </section>

      <Graph />
    </>
  );
}
