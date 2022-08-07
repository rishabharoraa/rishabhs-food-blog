import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PostMetaData } from "../types";

export default function Post({ postMetaData }: { postMetaData: PostMetaData }) {
  return (
    <div className="border border-gray flex mb-16 rounded-md">
      <div className="w-80 h-60 relative">
        <Image
          src={postMetaData.frontMatter.cover_image}
          alt={postMetaData.frontMatter.title}
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded-l-md"
        />
      </div>
      <div className="ml-4 mt-2 flex flex-col justify-between">
        <div>
          <h3 className="font-extrabold text-2xl mb-2">
            {postMetaData.frontMatter.title}
          </h3>
          <div className="mb-2 text-sm text-slate-800">
            Posted on {postMetaData.frontMatter.date}
          </div>
          <div className="text-md">Excerpt will come here</div>
        </div>
        <Link href={`/blog/${postMetaData.slug}`}>
          <button className="mb-4 rounded-sm bg-black text-white py-2 px-2 w-32">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
