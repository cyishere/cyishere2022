import styled from "styled-components";
import Link from "next/link";

import type { Post } from "@/utils/types";
import { QUERIES } from "@/styles/theme";
import { color, fontSize } from "@/styles/helpers";

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
  background-color: ${color("base.100")};
  border-radius: 4px;
  display: block;
  transition: transform 500ms;

  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }

  &:hover {
    transform: rotate(-0.5deg);
  }
`;

const PostItem = styled.article`
  padding: 2rem;
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
  font-size: ${fontSize("lg")};
  max-width: 36ch;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const PostTags = styled.div`
  font-size: ${fontSize("sm")};
`;

const Tag = styled.span`
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const Date = styled.div`
  color: ${color("text.light")};
  font-size: ${fontSize("sm")};
`;

export default PostListItem;
