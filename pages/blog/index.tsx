import type { NextPage } from "next";
import styled from "styled-components";

import { Layout } from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import PostListItem from "@/components/PostListItem";
import { posts } from "@/utils/getAllPosts";

const Home: NextPage = () => {
  const PAGE_TITLE = "Blog Posts";

  return (
    <Layout title={PAGE_TITLE}>
      <Wrapper>
        <Container>
          <SectionTitle variant="cyan" position="center">
            {PAGE_TITLE}
          </SectionTitle>
          <PostList>
            {posts.map((post: any) => (
              <PostListItem key={post.slug} post={post} />
            ))}
          </PostList>
        </Container>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 10rem;
`;

const Container = styled.div`
  max-width: ${800 / 16}rem;
  margin: 0 auto;
`;

const PostList = styled.div`
  padding-top: 3rem;
`;

export default Home;
