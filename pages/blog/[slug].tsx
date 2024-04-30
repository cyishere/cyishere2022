import { MDXProvider } from '@mdx-js/react';
import type { MDXComponents } from 'mdx/types';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import styled from 'styled-components';

import { FlexCenter } from '@/components/Container';
import CustomComponents from '@/components/CustomComponents';
import Emoji from '@/components/Emoji';
import Figure from '@/components/Figure';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PostLayout from '@/components/Post';
import SEO from '@/components/SEO';
import TableOfContents from '@/components/TableOfContents';
import Video from '@/components/Video';
import { color, fontSize } from '@/styles/helpers';
import { getBg } from '@/utils/helperts';
import {
  getBasicPostInfo,
  getPostBySlug,
  postFilePaths,
} from '@/utils/mdxUtils';
import type { PostBasicInfo, PostMetaType } from '@/utils/types';
import FeaturedPosts from '@/components/FeaturedPosts';

interface PostPageProps {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMetaType;
  slug: string;
  relatedPosts: PostBasicInfo[];
}

const PostPage: React.FC<PostPageProps> = ({
  source,
  meta,
  slug,
  relatedPosts,
}) => {
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
      <Header pathname={pathname} bg={getBg(pathname)} />
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
        {relatedPosts.length > 0 && (
          <FeaturedPosts posts={relatedPosts} title="Related Posts" />
        )}
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
    margin-top: var(--space-flow, 1.6em);
  }
`;

const Title = styled.h1`
  font-size: ${fontSize('xxxl')};
`;

const Date = styled.p`
  font-size: ${fontSize('sm')};
  color: ${color('text.light')};
`;

const Excerpt = styled.p`
  font-size: ${fontSize('lg')};
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
    .map((path) => path.replace(/\.mdx?$/, ''))
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
  const { content, data } = getPostBySlug(params.slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
    },
    scope: data as any,
  });

  const relatedPosts: PostBasicInfo[] = [];

  if (data.related && data.related.length > 0) {
    data.related.forEach((slug) => {
      const post = getPostBySlug(slug);

      relatedPosts.push({ ...getBasicPostInfo(post), slug });
    });
  }

  return {
    props: {
      source: mdxSource,
      meta: data,
      slug: params.slug,
      relatedPosts,
    },
  };
};
