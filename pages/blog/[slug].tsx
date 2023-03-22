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
import { FlexCenter } from "@/components/Container";
import TableOfContents from "@/components/TableOfContents";
import { color, fontSize } from "@/styles/helpers";

interface PostPageProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMetaType;
  slug: string;
}

const PostPage: React.FC<PostPageProps> = ({ source, meta, slug }) => {
  const pathname = `/blog/${slug}`;

  const { toc } = meta;

  const components = {
    ...CustomComponents,
    Figure,
    Emoji,
    Video,
    FlexCenter,
  } as MDXComponents;

  const sidebar = toc ? (
    <Sidebar>
      <TableOfContents />
    </Sidebar>
  ) : null;

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
        <PostHeader>
          <Title>{meta.title}</Title>
          <Date>
            <time>{meta.createdAt}</time>
          </Date>
          {meta.excerpt ? <Excerpt>{meta.excerpt}</Excerpt> : null}
        </PostHeader>
        <PostContainer>
          {sidebar}
          <PostLayout>
            <MDXProvider components={components}>
              <MDXRemote {...source} />
            </MDXProvider>
          </PostLayout>
        </PostContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default PostPage;

const Wrapper = styled.main`
  --maxW: 1100px;
  --spacingY: 96px;
  padding: 32px 32px var(--spacingY) 32px;
`;

const PostContainer = styled.div`
  max-width: var(--maxW);
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto;
`;

const PostHeader = styled.header`
  text-align: center;
  width: 100%;
  max-width: var(--maxW);
  margin: 0 auto 4rem auto;

  & > * + * {
    margin-top: 1.6em;
  }
`;

const Title = styled.h1`
  font-size: ${fontSize("xxxl")};
`;

const Date = styled.p`
  font-size: ${fontSize("sm")};
  color: ${color("text.light")};
`;

const Excerpt = styled.p`
  font-size: ${fontSize("lg")};
`;

const Sidebar = styled.aside`
  display: none;
  flex: 0 100000 250px;
  margin-left: auto;
  position: sticky;
  top: 148px;
  height: calc(100vh - 148px);
  overflow: auto;

  @media (min-width: 1084px) {
    display: block;
  }
`;

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
