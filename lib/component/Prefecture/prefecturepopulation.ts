export async function getPrefecturePopulation(prefCode: number) {
  const res = await fetch(`/api/population/${prefCode}`);

  const posts = await res.json();
  return posts.result.data.map((post: { value: object }) => {
    return {
      population: post.value,
    };
  });
}
