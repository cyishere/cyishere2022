import styled from "styled-components";
import Link from "next/link";
import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import SectionTitle from "@/components/SectionTitle";
import Emoji from "@/components/Emoji";
import Post from "@/components/Post";

const HireMe: NextPage = () => (
  <Layout title="I am looking for a job">
    <Wrapper as="main">
      <SectionTitle variant="khaki" position="center">
        Hire Me <Emoji name="Woman Technologist">👩🏻‍💻</Emoji>
      </SectionTitle>
      <Content>
        <p>
          Hello there, and thank you for visiting this page.{" "}
          <Emoji name="Thank you">🙏🏻</Emoji>
        </p>
        <p>
          I am looking for a job as <em>junior/mid-level Front-end</em>{" "}
          developer, or a <em>junior full-stack</em> developer.
        </p>
        <p>
          You can see my works{" "}
          <Link href="/portfolio">
            <a>here</a>
          </Link>
          . More information about me can be found{" "}
          <Link href="/about">
            <a>on this page</a>
          </Link>
          .
        </p>
        <p>Please contact me at: cyishere[at]protonmail.com.</p>
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
