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
          <SectionTitle>{PAGE_TITLE}</SectionTitle>
          <PostList>
            {posts.map((post: any) => (
              <PostItem
                key={post.slug}
                post={post}
                row={false}
                formatDate={true}
              />
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
  max-width: ${860 / 16}rem;
  margin: 0 auto;
`;

const PostList = styled.div`
  margin-top: 3rem;
`;

const PostItem = styled(PostListItem)`
  border-bottom: 1px dashed ${color('hr.main')};
  margin: 0;
  padding: 2.5rem 0;
`;

export default Home;

// =========

export function getStaticProps() {
  const posts = getPosts();

  return { props: { posts } };
}
