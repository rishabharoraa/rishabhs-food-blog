import React from "react";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import matter from "gray-matter";
import { marked } from "marked";

export default function postPage({
  frontMatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <>
      <Link href="/">
        <a>Go Back</a>
      </Link>
      <h1>{title}</h1>
      <div>Posted on: {date}</div>
      <Image src={cover_image} alt={title} width={50} height={50} />
      <div>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // Get path names
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // Get frontMatter and content
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  };
}
