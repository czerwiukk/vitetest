import { FC } from "react";
import { twMerge } from "tailwind-merge";
import usePostList from "./usePostList";

interface PostListProps {
  className?: string;
}

export const PostList: FC<PostListProps> = ({ className }) => {
  const [posts, postsQuery] = usePostList();

  if (postsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (postsQuery.isError) {
    return <div>Error</div>;
  }

  return (
    <table className={twMerge("table-fixed relative", className)}>
      <thead className="sticky top-0 bg-gray-50">
        <tr>
          <th className="px-4">Title</th>
          <th className="px-4">Body</th>
          <th className="px-4">User</th>
        </tr>
      </thead>
      <tbody className="h-64 overflow-auto">
        {posts.map((post) => (
          <tr key={post.id}>
            <td className="px-4 text-ellipsis whitespace-nowrap overflow-hidden">
              {post.title}
            </td>
            <td className="px-4 text-ellipsis whitespace-nowrap overflow-hidden">
              {post.body}
            </td>
            <td className="px-4">{post.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
