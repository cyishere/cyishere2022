import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Intro from "@/components/Intro";
import FeaturedPosts from "@/components/FeaturedPosts";

const Home: NextPage = () => {
  return (
    <Layout title="Chen Yang, aka CY">
      <main>
        <Hero />
        <FeaturedProjects />
        <Intro />
        <FeaturedPosts />
      </main>
    </Layout>
  );
};

export default Home;
