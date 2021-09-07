import type { NextPage } from "next";
import styled from "styled-components";

import SEO from "@/components/SEO";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <SEO title="Home" />
      <Header />
      <Hero />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1.5rem;
`;

export default Home;
