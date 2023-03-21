import styled from "styled-components";
import Link from "next/link";

import type { Post } from "@/utils/types";
import { QUERIES } from "@/styles/theme";

interface PostListItemProps {
  post: Post;
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  const { slug, data } = post;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <Wrapper>
        <PostItem>
          <PostContent>
            <PostTitle>{data.title}</PostTitle>
            {data.tags?.length > 0 ? (
              <PostTags>
                {data.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </PostTags>
            ) : null}
          </PostContent>
          <Date>{data.createdAt}</Date>
        </PostItem>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  border-radius: 4px;
  display: block;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  &:hover,
  &:focus {
    background-color: var(--clr-purple-light);
  }
`;

const PostItem = styled.article`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const PostContent = styled.div``;

const PostTitle = styled.h3`
  font-size: var(--font-size-xl);
  max-width: 36ch;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const PostTags = styled.div``;

const Tag = styled.span`
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const Date = styled.div`
  color: var(--clr-text-primary);
  font-size: var(--font-size-base);
`;

export default PostListItem;
