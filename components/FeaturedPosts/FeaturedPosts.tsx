import styled from "styled-components";

import type { Post } from "@/utils/types";
import SectionTitle from "../SectionTitle";
import PostListItem from "../PostListItem";
import { color } from "@/styles/helpers";

interface FeaturedPostsProps {
  posts: Post[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ posts }) => {
  return (
    <Wrapper>
      <Container>
        <SectionTitle>Blog Posts</SectionTitle>
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
  background-color: ${color("base.200")};
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
