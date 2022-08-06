import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Post({ post }) {
  return (
    <div className="card">
      <Image
        src={post.frontMatter.cover_image}
        alt={post.frontMatter.title}
        width={480}
        height={360}
      />
      <div>Posted on {post.frontMatter.date}</div>
      <h3>{post.frontMatter.title}</h3>
      <Link href={`/blog/${post.slug}`}>
        <a> Read More </a>
      </Link>
    </div>
  );
}
