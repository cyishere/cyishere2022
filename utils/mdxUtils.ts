import type { Post, PostBasicInfo } from './types';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const POSTS_PATH = path.join(process.cwd(), 'content/posts');

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.mdx?$/.test(path));

export const getPostBySlug = (slug: string) => {
  const source = fs.readFileSync(path.join(POSTS_PATH, `${slug}.mdx`));
  const { content, data } = matter(source);

  return { content, data } as Post;
};

export const getPosts = (n?: number) => {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      slug: filePath.split('.')[0],
    };
  }) as Post[];

  const sortedPosts = posts.sort(
    (a, b) => +new Date(b.data.createdAt) - +new Date(a.data.createdAt)
  );

  if (n) return sortedPosts.slice(0, n);

  return sortedPosts;
};

export const getBasicPostInfo = (post: Post) => {
  return {
    title: post.data.title,
    slug: post.slug,
    createdAt: post.data.createdAt,
    tags: post.data.tags,
  } as PostBasicInfo;
};
