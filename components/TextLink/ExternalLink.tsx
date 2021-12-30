import styled from "styled-components";
import { ExternalLink as ExternalIcon } from "react-feather";

interface ExternalLinkProps {
  href: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <Wrapper href={href} target="_blank" rel="noreferrer">
      {children}
      <IconWrapper>
        <ExternalIcon size={16} />
      </IconWrapper>
    </Wrapper>
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

export default ExternalLink;
