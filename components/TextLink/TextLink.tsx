import styled from "styled-components";
import Link from "next/link";

interface ExternalLinkProps {
  href: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
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

export default ExternalLink;
