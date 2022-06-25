import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import type { MDXComponents } from "mdx/types";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import styled from "styled-components";
import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";
import rehypePrism from "rehype-prism-plus";

import type { PostMetaType } from "@/utils/types";
import { postFilePaths, POSTS_PATH } from "@/utils/mdxUtils";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import PostLayout from "@/components/Post";
import Footer from "@/components/Footer";
import CustomComponents from "@/components/CustomComponents";
import Figure from "@/components/Figure";
import Emoji from "@/components/Emoji";
import Video from "@/components/Video";
import Toc from "@/components/Toc";
import { FlexCenter } from "@/components/Container";

interface PostPageProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMetaType;
  slug: string;
}

const PostPage: React.FC<PostPageProps> = ({ source, meta, slug }) => {
  const pathname = `/blog/${slug}`;

  const components = {
    ...CustomComponents,
    Figure,
    Emoji,
    Video,
    Toc,
    FlexCenter,
  } as MDXComponents;

  return (
    <>
      <SEO
        title={meta.title}
        pathname={pathname}
        description={meta.description}
        seoTitle={meta.seoTitle}
        canonical={meta.canonical}
        pageImage={meta.pageImage}
      />
      <Header pathname={pathname} />
      <Wrapper>
        <PostLayout>
          <PostHeader>
            <Title>{meta.title}</Title>
            <Date>
              <time>{meta.createdAt}</time>
            </Date>
            {meta.excerpt ? <Excerpt>{meta.excerpt}</Excerpt> : null}
          </PostHeader>
          <MDXProvider components={components}>
            <MDXRemote {...source} />
          </MDXProvider>
        </PostLayout>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.main`
  background-color: var(--clr-white);
  padding: 2rem 2rem 10rem 2rem;
`;

const PostHeader = styled.header`
  text-align: center;
  margin-bottom: 4rem;

  & > * + * {
    margin-top: 1.6em;
  }
`;

const Title = styled.h1`
  font-size: var(--font-size-xxxl);
`;

const Date = styled.p`
  font-size: var(--font-size-sm);
  color: var(--clr-text-light);
`;

const Excerpt = styled.p`
  font-size: var(--font-size-lg);
`;

export default PostPage;

// ===========

export const getStaticPaths = () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      meta: data,
      slug: params.slug,
    },
  };
};
