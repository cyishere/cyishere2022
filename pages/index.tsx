import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <main>
        <Hero />
      </main>
    </Layout>
  );
};

export default Home;
