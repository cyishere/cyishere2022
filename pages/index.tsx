import type { NextPage } from 'next';

import type { PostBasicInfo } from '@/utils/types';
import { getBasicPostInfo, getPosts } from '@/utils/mdxUtils';
import { HomeLayout } from '@/components/Layout';
import Hero from '@/components/Hero';
// import FeaturedProjects from "@/components/FeaturedProjects";
import Intro from '@/components/Intro';
import FeaturedPosts from '@/components/FeaturedPosts';

interface HomePageProps {
  posts: PostBasicInfo[];
}

const Home: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <HomeLayout title="Chen Yang, aka CY">
      <main>
        <Hero />
        <FeaturedPosts
          data-component-position="homepage"
          posts={posts}
          title="Blog Posts"
          showMore={true}
        />
        {/* <FeaturedProjects /> */}
        <Intro />
      </main>
    </HomeLayout>
  );
};

export function getStaticProps() {
  const posts = getPosts(6);

  const postInfos = posts.map((post) => {
    return getBasicPostInfo(post);
  });

  return { props: { posts: postInfos } };
}

export default Home;
