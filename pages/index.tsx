import Head from "next/head";
import matter from "gray-matter";
import Post from "../components/Post";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { sortPostByDate } from "../utils/dateUtils";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Rishabh's food blog</title>
      </Head>
      Hello World
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // Get files from posts directory
  const files = readdirSync(join("posts"));

  // Get slug and front matter from posts
  const posts = files.map((fileName) => {
    // Create slug
    const slug = fileName.replace(".md", "");

    // Get formatter
    const markdownWithMeta = readFileSync(join("posts", fileName), "utf-8");

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  // TODO return by date
  return {
    props: {
      posts: posts.sort(sortPostByDate),
    },
  };
}
