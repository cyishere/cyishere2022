import styled from "styled-components";

import SectionTitle from "../SectionTitle";
import { posts as allPosts } from "@/utils/getAllPosts";
import PostListItem from "../PostListItem";

const FeaturedPosts: React.FC = () => {
  const posts: any[] = allPosts.slice(0, 6);

  return (
    <Wrapper>
      <Container>
        <SectionTitle variant="cyan">Blog Posts</SectionTitle>
        <PostList>
          {posts.map((post) => (
            <PostListItem key={post.slug} post={post} />
          ))}
        </PostList>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 2rem;
`;

const Container = styled.div`
  max-width: ${800 / 16}rem;
  margin: 0 auto;
`;

const PostList = styled.div`
  padding-top: 3rem;
`;

export default FeaturedPosts;
