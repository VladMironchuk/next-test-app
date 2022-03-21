import { NextPageContext } from "next";
import Link from "next/link";
import MainLayout from "../../components/mainLayout";
import IPost from "../../dto/post.dto";

type Props = {
  post: IPost;
}

const Post = ({ post }: Props) => {
  return (
    <MainLayout>
      <h1>Post: {post.id}</h1>
      <p>{post.body}</p>
      <Link href={"/posts"}>
        <a>Go to posts</a>
      </Link>
    </MainLayout>
  );
};

export async function getServerSideProps({ query }: NextPageContext) {
  const response = await fetch(`${process.env.API_URL}/posts/${query.id}`);
  const post: Props = await response.json();
  return {
    props: {
      post,
    },
  };
}

export default Post;
