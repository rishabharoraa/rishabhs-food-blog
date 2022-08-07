import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostMetaData } from "../types";

export default function Post({ postMetaData }: { postMetaData: PostMetaData }) {
  return (
    <div className="card">
      <Image
        src={postMetaData.frontMatter.cover_image}
        alt={postMetaData.frontMatter.title}
        width={480}
        height={360}
      />
      <div>Posted on {postMetaData.frontMatter.date}</div>
      <h3>{postMetaData.frontMatter.title}</h3>
      <Link href={`/blog/${postMetaData.slug}`}>
        <a> Read More </a>
      </Link>
    </div>
  );
}
