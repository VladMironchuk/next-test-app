import MainLayout from "../../components/mainLayout";
import Link from "next/link";
import Post from "../../dto/post.dto"
import React from "react";
import { NextPageContext } from "next";

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <MainLayout title="Posts Page">
      <h1>Posts</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={"/posts/[id]"} as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
};

export async function getServerSideProps({ req }: NextPageContext) {
  const response = await fetch(`${process.env.API_URL}/posts`);
  const posts: Props = await response.json();
  return {
    props: {
      posts,
    },
  };
}

export default Posts;
