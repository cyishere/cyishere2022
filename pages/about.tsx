import styled from "styled-components";
import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";
import Post from "@/components/Post";
import Emoji from "@/components/Emoji";
import TextLink from "@/components/TextLink";

const About: NextPage = () => (
  <Layout title="About CY">
    <Wrapper as="main">
      <SectionTitle position="center">
        About Me <Emoji name="Woman Technologist">👩🏻‍💻</Emoji>
      </SectionTitle>
      <Content>
        <p>
          <Emoji name="vulcan salute">🖖🏻</Emoji> Hello, my name is{" "}
          <em>Chen Yang</em>, CY for short.
        </p>
        <p>
          I am a self-taught <em>front-end developer</em> who also makes{" "}
          <em>full-stack</em> stuff.
        </p>
        <p>
          The first time I encountered “web development” was about 15 years ago
          when I changed my blogpost blog’s background color with CSS, that’s
          amazed me a lot!{" "}
          <strong>I thought it’s very cool, the internet is the future!</strong>{" "}
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
          tutorials on{" "}
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

const Wrapper = styled(MaxWidthWrapper)`
  background-color: var(--clr-white);
  padding: 2rem 2rem 10rem 2rem;
`;

const Content = styled(Post)`
  margin-top: 4rem;
`;

export default About;
