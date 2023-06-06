import type { NextPage } from 'next';
import styled from 'styled-components';

import type { Post } from '@/utils/types';
import { Layout } from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import PostListItem from '@/components/PostListItem';
import { getPosts } from '@/utils/mdxUtils';
import { color } from '@/styles/helpers';

interface HomePageProps {
  posts: Post[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  const PAGE_TITLE = 'Blog Posts';

  return (
    <Layout title={PAGE_TITLE}>
      <Wrapper>
        <Container>
          <SectionTitle position="center">{PAGE_TITLE}</SectionTitle>
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
  background-color: ${color('base.200')};
  padding: 2rem;
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

// =========

export function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
