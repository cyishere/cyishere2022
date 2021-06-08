import Card from "@/components/Card";
import Emoji from "@/components/Emoji";
import FeaturedProjects from "@/components/FeaturedProjects";
import { ChevronRight } from "@/components/Icon";
import Layout from "@/components/Layout";
import { ButtonLink, TextLink } from "@/components/Link";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/utils/data";

const Portfolio = () => {
  const featuredProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  return (
    <Layout seoTitle="Portfolio">
      <div className="w-full px-6 mx-auto md:w-1/2 md:px-0">
        <PageHeader classes="text-yellow-500 text-center">
          <Emoji name="Atom Symbol">⚛️</Emoji> Learning by Doing Projects
        </PageHeader>
      </div>
      <main>
        <FeaturedProjects featuredProjects={featuredProjects} />

        {/* Three columns */}
        <div className="bg-gray-100 pt-20 pb-40" id="moreProjects">
          <div className="w-full mx-auto grid grid-cols-1 gap-8 px-6 lg:w-2/3 md:grid-cols-3 lg:px-0">
            {otherProjects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* FCC */}
        <div
          className="w-full mx-auto grid grid-cols-1 py-20 px-6 lg:w-2/3 lg:grid-cols-2 lg:px-0"
          id="fcc"
        >
          <article className="pr-20 mb-10 lg:mb-0">
            <h3 className="text-3xl font-semibold mb-6">
              <TextLink href="/portfolio/fcc">
                FreeCodeCamp Certifications
              </TextLink>
            </h3>
            <p className="mb-4">I got 4 certifications on freeCodeCamp.org.</p>
            <ul className="list-inside list-disc mb-6 ml-4">
              <li>Responsive Web Design</li>
              <li>JavaScript Algorithms and Data Structures</li>
              <li>Font End Libraries</li>
              <li>APIs and Microservices</li>
            </ul>
            <p>
              <ButtonLink
                classes="bg-green-500 px-4 py-2 text-gray-100 hover:bg-green-300 hover:text-gray-600"
                href="/portfolio/fcc"
              >
                Details <ChevronRight />
              </ButtonLink>
            </p>
          </article>
          <img
            className="w-full shadow-lg"
            src="/img/portfolio/fcc/freecodecamp-certifications-cover.jpg"
            alt="chat app screenshot"
          />
        </div>
      </main>
    </Layout>
  );
};

export default Portfolio;
