import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import FeaturedPosts from "@/components/FeaturedPosts";

const Home: NextPage = () => {
  return (
    <Layout title="Blog Posts">
      <main>
        <h1>Blog Posts</h1>
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
