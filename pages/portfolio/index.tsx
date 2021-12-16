import type { NextPage } from "next";
import styled from "styled-components";

import { Layout } from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";

const Home: NextPage = () => {
  const PAGE_TITLE = "Portfolio";

  return (
    <Layout title={PAGE_TITLE}>
      <Wrapper>
        <Container>
          <SectionTitle variant="khaki" position="center">
            {PAGE_TITLE}
          </SectionTitle>
        </Container>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 10rem;
`;

const Container = styled.div`
  max-width: ${800 / 16}rem;
  margin: 0 auto;
`;

export default Home;
