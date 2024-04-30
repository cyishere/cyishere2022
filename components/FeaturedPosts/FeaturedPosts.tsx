import styled from 'styled-components';

import type { PostBasicInfo } from '@/utils/types';
import { color } from '@/styles/helpers';
import SectionTitle from '../SectionTitle';
import PostListItem from '../PostListItem';
import Button from '../Button';
import ShowMore from '../ShowMore';

interface FeaturedPostsProps {
  posts: PostBasicInfo[];
  title: string;
  showMore?: boolean;
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({
  posts,
  title,
  showMore = false,
  ...rest
}) => {
  return (
    <Wrapper {...rest}>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <PostList>
          {posts.map((post) => (
            <PostItem key={post.slug} {...post} />
          ))}
        </PostList>
        {showMore && (
          <ShowMore>
            <Button href="/blog">Read more...</Button>
          </ShowMore>
        )}
      </Container>
    </Wrapper>
  );
};

export default FeaturedPosts;

const Wrapper = styled.section`
  background-color: var(--featuredPost-bg-color);
  padding: var(--featuredPost-padding, 8rem 0 3rem 0);

  &[data-component-position='homepage'] {
    --featuredPost-bg-color: ${color('base.200')};
    --featuredPost-padding: 10rem 2rem;
  }
`;

const Container = styled.div`
  max-width: ${860 / 16}rem;
  margin: 0 auto;
`;

const PostList = styled.div`
  padding-top: 3rem;

  & a:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const PostItem = styled(PostListItem)`
  --color: ${color('secondary.main')};
  --border-color: var(--color);
  --box-shadow-color: var(--color);
  padding: 2rem;
`;
