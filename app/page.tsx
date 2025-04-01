import { PostsPage } from "@/pages/Posts";
import { getPosts } from "@/shared/api/posts";

const Posts = async () => {
  const posts = await getPosts();
  return <PostsPage posts={posts} />;
};

export default Posts;
