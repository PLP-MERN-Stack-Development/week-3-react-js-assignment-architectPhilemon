import React, { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function ApiDemo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then(setPosts)
      .catch(() => setError("Failed to fetch posts"))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="text-center py-8 text-blue-600">Loading...</div>
    );
  if (error)
    return (
      <div className="text-center py-8 text-red-500">{error}</div>
    );

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-300 text-center">
        API Demo (JSONPlaceholder)
      </h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow transition hover:shadow-lg"
          >
            <strong className="block text-lg font-semibold text-blue-600 dark:text-blue-300 mb-2">
              {post.title}
            </strong>
            <p className="text-gray-700 dark:text-gray-200">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}