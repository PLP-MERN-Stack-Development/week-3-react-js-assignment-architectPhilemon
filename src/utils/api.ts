export async function fetchPosts(
  page: number,
  limit: number,
  search: string
) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}&q=${encodeURIComponent(
      search
    )}`
  );
  if (!res.ok) throw new Error("Failed to fetch posts");
  return (await res.json()) as { id: number; title: string; body: string }[];
}