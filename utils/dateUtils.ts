import { PostMetaData } from "../types";

export function sortPostByDate(a: PostMetaData, b: PostMetaData) {
  return Math.abs(
    new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );
}
