import styled from 'styled-components';
import Link from 'next/link';
import { ExternalLink as ExternalIcon } from 'react-feather';

interface TextLinkProps {
  href: string;
}

const TextLink: React.FC<TextLinkProps> = ({ href, children }) => {
  if (href.startsWith('http')) {
    return (
      <Wrapper href={href} target="_blank" rel="noreferrer">
        {children}
        <IconWrapper>
          <ExternalIcon size={16} />
        </IconWrapper>
      </Wrapper>
    );
  }

  return (
    <Link href={href} passHref>
      <Wrapper>{children}</Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
  padding-left: 2px;
  padding-right: 2px;
`;

const IconWrapper = styled.span`
  color: var(--clr-text-light);
  margin-left: 3px;
  display: line-block;
`;

export default TextLink;
