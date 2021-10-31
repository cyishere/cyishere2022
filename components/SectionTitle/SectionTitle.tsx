import { CSSProperties } from "react";
import styled from "styled-components";

interface SectionTitleProps {
  variant: "khaki" | "cyan" | "salmon";
  position?: "left" | "center" | "right";
}

const STYLES = {
  khaki: {
    backgroundImage: "url(/images/decorator-khaki-large.svg)",
  },
  cyan: {
    backgroundImage: "url(/images/decorator-cyan-large.svg)",
  },
  salmon: {
    backgroundImage: "url(/images/decorator-salmon-large.svg)",
  },
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  variant,
  position = "left",
}) => {
  const wrapperStyles = {
    "--text-align": position,
  } as CSSProperties;

  const textStyles = {
    "--background-image": STYLES[variant].backgroundImage,
  } as CSSProperties;

  return (
    <Wrapper style={wrapperStyles}>
      <Text style={textStyles}>{children}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.h2`
  font-size: ${48 / 16}rem;
  margin-top: 0;
  text-align: var(--text-align);
`;

const Text = styled.span`
  display: inline-block;
  padding: 8px 16px;
  background-image: var(--background-image);
  background-position: left center;
  background-repeat: no-repeat;
`;

export default SectionTitle;
