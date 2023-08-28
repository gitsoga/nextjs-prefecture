export async function getPrefecturePopulation(prefCode: number) {
  const res = await fetch(`/api/population/${prefCode}`);

  const posts = await res.json();
  return posts.result.data.map((post: { label: string; data: [] }) => {
    return {
      label: post.label,
      data: post.data,
    };
  });
}
