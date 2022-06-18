export interface PostMetaType {
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
  seoTitle?: string;
  excerpt?: string;
  canonical?: string;
  pageImage?: string;
}

export interface Post {
  data: PostMetaType;
  content: string;
  slug: string;
}
