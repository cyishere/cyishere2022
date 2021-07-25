import Layout from "@/components/Layout";
import Intro from "@/components/Intro";
import FeaturedProjects from "@/components/FeaturedProjects";
import FeaturedPosts from "@/components/FeaturedPosts";
import { ButtonLink } from "@/components/Link";
import { ChevronRight } from "@/components/Icon";

const Home = () => {
  return (
    <Layout seoTitle="Hello">
      <Intro />

      <section>
        <FeaturedProjects />
        <div className="flex justify-center items-center pb-10 my-10 lg:pb-20 lg:my-20">
          <ButtonLink
            classes="bg-pink-500 text-white px-4 py-2 hover:bg-pink-300 hover:text-black lg:px-8 lg:py-4"
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
