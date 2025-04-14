import styled from 'styled-components';
import Link from 'next/link';

import type { PostBasicInfo } from '@/utils/types';
import { QUERIES } from '@/styles/theme';
import { color, fontSize } from '@/styles/helpers';
import { getFormattedDate } from '@/utils/helperts';

interface PostListItemProps extends PostBasicInfo {
  row?: boolean;
  formatDate?: boolean;
}

const PostListItem: React.FC<PostListItemProps> = ({
  title,
  slug,
  createdAt,
  tags,
  row = true,
  formatDate = false,
  ...rest
}) => {
  const Container = row ? PostItem : PostItemColumn;
  const DateContainer = row ? Date : DateInColumn;

  return (
    <Link href={`/blog/${slug}`} passHref>
      <Wrapper {...rest}>
        <Container>
          <PostContent>
            <PostTitle>{title}</PostTitle>
            {tags && tags.length > 0 ? (
              <PostTags>
                {tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </PostTags>
            ) : null}
          </PostContent>
          <DateContainer>
            {formatDate ? getFormattedDate(createdAt) : createdAt}
          </DateContainer>
        </Container>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  --bg-color: ${color('base.100')}
  --border-color: transparent;
  --box-shadow-color: transparent;
  background-color: var(--bg-color);
  border: 2px solid var(--border-color);
  border-radius: 4px;
  display: block;
  transition: box-shadow 300ms, border 200ms;
  box-shadow:
  1px 1px 0 0 var(--box-shadow-color),
  2px 2px 0 0 var(--box-shadow-color),
  3px 3px 0 0 var(--box-shadow-color),
  4px 4px 0 0 var(--box-shadow-color),
  5px 5px 0 0 var(--box-shadow-color),
  6px 6px 0 0 var(--box-shadow-color);
  
  &:hover {
    box-shadow: none;
    border-width: 1px;
  }
  `;

const PostItem = styled.article`
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

const PostItemColumn = styled(PostItem)`
  flex-direction: column-reverse;
  align-items: stretch;
`;

const PostContent = styled.div``;

const PostTitle = styled.h3`
  font-size: ${fontSize('xxxl')};
  max-width: 36ch;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const PostTags = styled.div`
  font-size: ${fontSize('sm')};
`;

const Tag = styled.span`
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

const Date = styled.div`
  width: 120px;
  text-align: right;
  color: ${color('text.light')};
  font-size: ${fontSize('md')};
`;

const DateInColumn = styled(Date)`
  text-align: left;
  width: auto;
`;

export default PostListItem;
