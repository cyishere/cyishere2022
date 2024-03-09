import styled from 'styled-components';

import { color, fontSize } from '@/styles/helpers';
import SectionTitle from '../SectionTitle/SectionTitle';
import TextLink from '../TextLink';

const Intro: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <SectionTitle position="center">The bit about myself</SectionTitle>
        <p>
          I was a frontend developer from 2007-2010 and{' '}
          <strong>a UX designer</strong> from 2010-2012. Then I changed my
          career path, and in recent years I&#39;d worked as a screenwriter and
          producer.
        </p>
        <p>
          I began re-building my knowledge and learning React in March 2020. In
          three months, I received{' '}
          <TextLink href="/portfolio/fcc">4 certifications</TextLink> from{' '}
          <TextLink href="https://www.freecodecamp.org">
            freeCodeCamp.org
          </TextLink>
          . Since May 2022, I had been a <strong>frontend engineer</strong> in{' '}
          <TextLink href="https://flixed.io">Flixed</TextLink> for almost two
          years.
        </p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: ${color('button.text')};
  padding: 10rem 2rem;
`;

const Container = styled.article`
  font-size: ${fontSize('lg')};
  max-width: ${1000 / 16}rem;
  margin: 0 auto;

  & > * + * {
    margin-top: 1em;
  }

  & a {
    color: ${color('base.200')};
    border-bottom: 1px solid var(--clr-text-main);
    transition: border 200ms ease-in, color 300ms ease;
  }

  & a:hover {
    color: ${color('text.main')};
    background-size: 100% 100%;
    border-width: 3px;
    border-color: currentColor;
  }
`;

export default Intro;
