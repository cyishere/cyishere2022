import styled from "styled-components";
import Link from "next/link";

import { QUERIES } from "@/styles/constants";
import { PostMetaType } from "@/utils/types";

interface PostListItemProps {
  post: {
    slug: string;
    module: {
      meta: PostMetaType;
      default?: any;
    };
  };
}

const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  const {
    slug,
    module: { meta },
  } = post;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <Wrapper>
        <PostItem>
          <PostContent>
            <PostTitle>{meta.title}</PostTitle>
            <PostTags>
              {meta.tags.map((tag: string) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </PostTags>
          </PostContent>
          <Date>{meta.createdAt}</Date>
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

  &:hover {
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
