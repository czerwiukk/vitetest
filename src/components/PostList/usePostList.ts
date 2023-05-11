import axios from "axios";
import { useQuery } from "react-query";
import { PostListItem } from "types";

const usePostList = () => {
  const query = useQuery("posts", () =>
    axios.get<PostListItem[]>("https://jsonplaceholder.typicode.com/posts")
  );

  return [query.data?.data ?? [], query] as const;
};

export default usePostList;
