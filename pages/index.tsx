import Head from "next/head";
import matter from "gray-matter";
import PostThumbnail from "../components/PostThumbnail";
import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import { sortPostByDate } from "../utils/dateUtils";
import { PostMetaData } from "../types";

export default function Home({ posts }: { posts: Array<PostMetaData> }) {
  return (
    <div>
      <Head>
        <title>Rishabh&apos;s food blog</title>
      </Head>
      <div className="w-7/12 m-auto">
        {posts.map((post: PostMetaData, index: number) => (
          <PostThumbnail postMetaData={post} key={index} />
        ))}
      </div>
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
