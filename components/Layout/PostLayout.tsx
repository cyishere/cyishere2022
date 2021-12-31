import { useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { MDXProvider } from "@mdx-js/react";
import Prism from "prismjs";

import { PostMetaType } from "@/utils/types";
import SEO from "../SEO";
import Header from "../Header";
import Post from "../Post";
import MDXComponents from "../MDXComponents";
import Footer from "../Footer";

interface PostLayoutProps {
  meta: PostMetaType;
}

const PostLayout: React.FC<PostLayoutProps> = ({ meta, children }) => {
  const pathname = useRouter().pathname;

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        pathname={pathname}
      />
      <Header pathname="pathname" />
      <Wrapper>
        <Post>
          <PostHeader>
            <Title>{meta.title}</Title>
            <Date>
              <time>{meta.createdAt}</time>
            </Date>
            {meta.excerpt ? <Excerpt>{meta.excerpt}</Excerpt> : null}
          </PostHeader>
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </Post>
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

export default PostLayout;
