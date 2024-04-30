import type { NextPage } from 'next';
import styled from 'styled-components';

import { Layout } from '@/components/Layout';
import PostListItem from '@/components/PostListItem';
import SectionTitle from '@/components/SectionTitle';
import { color } from '@/styles/helpers';
import { getBasicPostInfo, getPosts } from '@/utils/mdxUtils';
import { generateRssFeed } from '@/utils/rss';
import type { PostBasicInfo } from '@/utils/types';

interface HomePageProps {
  posts: PostBasicInfo[];
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
                row={false}
                formatDate={true}
                {...post}
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

export async function getStaticProps() {
  const posts = getPosts();
  await generateRssFeed(posts);

  return { props: { posts: posts.map((post) => getBasicPostInfo(post)) } };
}
