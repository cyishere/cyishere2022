import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <main>
        <Hero />
        <FeaturedProjects />
      </main>
    </Layout>
  );
};

export default Home;
