export interface PostMetaType {
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
  seoTitle?: string;
  excerpt?: string;
  canonical?: string;
  pageImage?: string;
  toc?: boolean;
  related?: string[];
}

export interface Post {
  data: PostMetaType;
  content: string;
  slug: string;
}

export interface PostBasicInfo {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt?: string;
  tags?: string[];
}
