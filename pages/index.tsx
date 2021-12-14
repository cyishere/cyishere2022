import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";

const Home: NextPage = () => {
  return (
    <Layout title="Home | Chen Yang, aka CY">
      <main>
        <Hero />
        <FeaturedProjects />
        <Intro />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
