import styled from "styled-components";

interface EmojiProps {
  name: string;
}

const Emoji: React.FC<EmojiProps> = ({ name, children }) => {
  return (
    <Wrapper role="img" aria-label={name}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.span`
  font-size: inherit;
  display: inline-block;
  padding-left: 0.25rem;
  padding-right: 0.5rem;
`;

export default Emoji;
