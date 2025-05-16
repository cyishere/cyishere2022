import styled from 'styled-components';
import Link from 'next/link';
import type { NextPage } from 'next';

import { Layout } from '@/components/Layout';
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper';
import SectionTitle from '@/components/SectionTitle';
import Emoji from '@/components/Emoji';
import Post from '@/components/Post';

const HireMe: NextPage = () => (
  <Layout title="I am looking for a job">
    <Wrapper as="main">
      <SectionTitle position="center">
        Hire Me <Emoji name="Woman Technologist">👩🏻‍💻</Emoji>
      </SectionTitle>
      <Content>
        <p>
          Hello there, and thank you for visiting this page.{' '}
          <Emoji name="Thank you">🙏🏻</Emoji>
        </p>
        <p>
          I am looking for a <strong>part-time</strong> position as a{' '}
          <em>Front-end</em> developer or <em>full-stack</em> developer, with a
          focus on the JavaScript ecosystem.
        </p>
        <p>
          I&#39;ve been working with React, Next.js and Astro for the last three
          years. I&#39;ve built websites integrating MDX for content management,
          used Notion as a headless CMS, and developed{' '}
          <Link href="https://www.langtester.com/">
            applications leveraging AI technologies
          </Link>
          . I have experience creating accessible user interfaces and
          implementing modern web development best practices.
        </p>
        <p>
          You can see my works{' '}
          <Link href="/portfolio">
            <a>here</a>
          </Link>
          . More information about me can be found{' '}
          <Link href="/about">
            <a>on this page</a>
          </Link>
          .
        </p>
        <p>
          Please contact me at: <em>cyishere[at]proton.me</em>.
        </p>
      </Content>
    </Wrapper>
  </Layout>
);

const Wrapper = styled(MaxWidthWrapper)`
  background-color: var(--clr-white);
  padding: 2rem 2rem 10rem 2rem;
`;

const Content = styled(Post)`
  margin-top: 4rem;
`;

export default HireMe;
