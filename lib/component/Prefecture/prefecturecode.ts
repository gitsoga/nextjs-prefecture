export async function getPrefectureCodeList() {
  const res = await fetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      headers: { "X-API-KEY": process.env.RESAS_API_KEY as string },
    }
  );
  const posts = await res.json();
  return posts.result.map((post: { prefCode: number; prefName: string }) => {
    return {
      prefCode: post.prefCode,
      prefName: post.prefName,
    };
  });
}
