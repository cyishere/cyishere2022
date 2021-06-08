import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import FeaturedProjects from "@/components/FeaturedProjects";
import FeaturedPosts from "@/components/FeaturedPosts";
import { ButtonLink } from "@/components/Link";
import { ChevronRight } from "@/components/Icon";
import { projects } from "@/utils/data";

const Home = () => {
  const featuredProjects = projects.slice(0, 2);

  return (
    <Layout seoTitle="Hello">
      <Intro />

      <section>
        <FeaturedProjects featuredProjects={featuredProjects} />
        <div className="flex justify-center items-center pb-20 mb-20">
          <ButtonLink
            classes="bg-pink-500 px-8 py-4 text-white hover:bg-pink-300 hover:text-black"
            href="/portfolio#moreProjects"
          >
            More Projects <ChevronRight />
          </ButtonLink>
        </div>
      </section>

      <FeaturedPosts />
    </Layout>
  );
};

export default Home;
