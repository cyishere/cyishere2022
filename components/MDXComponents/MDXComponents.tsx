import styled from "styled-components";
import { Hash } from "react-feather";

/**
 * The component of <h2 />
 */
interface Heading2Props {
  children: string;
}

const Heading2: React.FC<Heading2Props> = ({ children }) => {
  const idText = children.replace(/ /g, "_").toLowerCase();

  return (
    <H2Wrapper id={idText}>
      {children}{" "}
      <Anchor href={`#${idText}`} className="hashtag hidden text-gray-300">
        <Hash />
      </Anchor>
    </H2Wrapper>
  );
};

const Anchor = styled.a`
  color: var(--clr-text-light);
  display: none;
`;

const H2Wrapper = styled.h2`
  font-size: var(--font-size-xl);

  &:hover ${Anchor} {
    display: inline-block;
  }
`;

/**
 * The component of <hr />
 */
export const Hr = styled.hr`
  background-image: url(/images/hr-line.svg);
  background-position: center top;
  background-repeat: no-repeat;
  border: 0;
  height: 50px;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

/**
 * The component of <code />
 */
export const CodeInLine = styled.code`
  --bg-color: #ccc5f6;
  font-family: var(--ff-mono);
  background-color: var(--bg-color);
  color: var(--clr-purple-primary);
  border-radius: 4px;
  padding-left: 4px;
  padding-right: 4px;
`;

/**
 * The default component
 */
const MDXComponents = {
  h2: Heading2,
  hr: Hr,
  inlineCode: CodeInLine,
};

export default MDXComponents;
