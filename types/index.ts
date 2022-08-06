export type PostMetaData = {
  slug: string;
  frontMatter: FrontMatter;
};

export type FrontMatter = {
  date: string;
  title: string;
  excerpt: string;
  cover_image: string; //path to cover image
};

export type PostMetaDataWithContent = PostMetaData & { context: string };
