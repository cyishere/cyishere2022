import styled from "styled-components";

const Toc: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <SectionTitle>Table of Content</SectionTitle>
      <List>{children}</List>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  border-top: 2px solid var(--clr-purple-primary);
  padding: 4rem 2rem;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-lg);
  color: var(--clr-purple-secondary);
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0.2rem;
`;

const List = styled.ul`
  color: var(--clr-text-primary);
  line-height: 1.7;
  list-style-position: outside;
  list-style-type: disc;

  li {
    margin-bottom: 1em;

    a {
      display: block;
    }

    p {
      color: var(--clr-text-light);
    }
  }
`;

export default Toc;
