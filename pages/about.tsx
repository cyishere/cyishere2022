import type { NextPage } from 'next';
import styled from 'styled-components';

import Emoji from '@/components/Emoji';
import { Layout } from '@/components/Layout';
import Post from '@/components/Post';
import SectionTitle from '@/components/SectionTitle';
import TextLink from '@/components/TextLink';
import { color, fontSize } from '@/styles/helpers';

const TECHNOLOGIES = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'GraphQL',
  'Prisma',
  'styled-components',
];

const About: NextPage = () => (
  <Layout title="About CY">
    <Wrapper>
      <Hero>
        <HeroContainer>
          <Title>
            About Me <Emoji name="Woman Technologist">👩🏻‍💻</Emoji>
          </Title>
          <HeroContent>
            <Emoji name="vulcan salute">🖖🏻</Emoji> Hello, my name is Chen Yang,{' '}
            <strong>CY</strong> for short. I am a self-taught front-end
            developer who also makes full-stack stuff.
          </HeroContent>
          <HeroContent>
            Currently I work at{' '}
            <TextLink href="https://flixed.io">Flixed</TextLink> as a front-end
            developer.
          </HeroContent>
          <HeroMeta>
            If you want to contact, please e-mail me at{' '}
            <HeroMetaLink href="mailto:cyishere@proton.me">
              cyishere@proton.me
            </HeroMetaLink>
            .
          </HeroMeta>
        </HeroContainer>
      </Hero>
      <Content>
        <p>
          I&#39;m passionate about web development. Now I&#39;m learning about
          accessibility, dataviz, and building ethical technology.
        </p>
        <Title>Skill Stack</Title>
        <TagList>
          {TECHNOLOGIES.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </TagList>
        <Title>How I Become a Developer</Title>
        <p>
          The first time I encountered “web development” was about 15 years ago
          when I changed my blogpost blog’s background color with CSS, that’s
          amazed me a lot!{' '}
          <strong>I thought it’s very cool, the internet is the future!</strong>{' '}
          Around that time, I just graduated from college, and despite I studied
          finance I decided to change my career to web development. So I started
          to learn programming by myself, reading books, articles, and
          discussions online.
        </p>
        <p>
          I got my first development job in 2007. From 2007 to 2012, I was a
          frontend developer and UX designer, most of my work was writing CSS
          hacks for IE6, and playing around with jQuery. Made a lot of templates
          for WordPress and e-commerce websites.
        </p>
        <p>
          Later I switched my career path and started a production company with
          my friends. I was a screenplay writer in the last four years (
          <strong>also self-taught</strong>). But I still love web development a
          lot. Developers work on code and take films as entertainment, I worked
          on films and take programming as entertainment. When I didn’t study
          films, I read articles about web development and follow along with the
          tutorials on{' '}
          <TextLink href="https://scotch.io">🥃 scotch.io</TextLink>.
        </p>
        <p>
          I spend the last two years catching up on the new tech stacks. Now,
          I&apos;m a fan of React, GraphQL and Prisma.
        </p>
        <p>(Last update on May 12, 2022.)</p>
      </Content>
    </Wrapper>
  </Layout>
);

const Wrapper = styled.main``;

const Hero = styled.section`
  background-color: ${color('reverse.main')};
  padding: 0 32px;
`;

const HeroContainer = styled.div`
  max-width: 80ch;
  margin: 0 auto;
  padding: 64px 0;

  & > * + * {
    margin-top: var(--flow-space, 1em);
  }
`;

const HeroContent = styled.p`
  font-size: ${fontSize('lg')};
`;

const HeroMeta = styled.p`
  font-size: ${fontSize('base')};
`;

const HeroMetaLink = styled(TextLink)`
  color: inherit;
  text-decoration: underline;
`;

const Content = styled(Post)`
  margin-top: 64px;
  padding-bottom: 64px;
`;

const Title = styled(SectionTitle)`
  --mt: 1em;
`;

const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
`;

const Tag = styled.li`
  padding: 8px 16px;
  background-color: ${color('reverse.main')};
  border: 1px solid ${color('text.light')};
  border-radius: 3px;
`;

export default About;
