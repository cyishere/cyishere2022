import type { NextPage } from "next";

import type { Post } from "@/utils/types";
import { getPosts } from "@/utils/mdxUtils";
import { Layout } from "@/components/Layout";
import Hero from "@/components/Hero";
// import FeaturedProjects from "@/components/FeaturedProjects";
import Intro from "@/components/Intro";
import FeaturedPosts from "@/components/FeaturedPosts";

interface HomePageProps {
  posts: Post[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <Layout title="Chen Yang, aka CY - Frontend developer who also does full-stack stuff">
      <main>
        <Hero />
        {/* <FeaturedProjects /> */}
        <Intro />
        <FeaturedPosts posts={posts} />
      </main>
    </Layout>
  );
};

export function getStaticProps() {
  const posts = getPosts(6);

  return { props: { posts } };
}

export default Home;
