import Link from "next/link";
import Layout from "./Layout";
import { ExternalLink } from "./Link";
import { ArrowNarrowRight } from "./Icon";

import { projects } from "@/utils/data";
import Emoji from "./Emoji";

const PortfolioLayout = ({ meta, children, otherProjectName }) => {
  let otherProject = null;
  if (otherProjectName) {
    otherProject = projects.find(
      (project) => project.name === otherProjectName
    );
  }

  return (
    <Layout seoTitle={meta.title} seoDescription={meta.description}>
      <main className="mb-20 w-full">
        {/* HEADER */}
        <header className="w-full grid gap-4 grid-cols-1 mb-10 lg:grid-cols-2">
          <div className="mb-4 px-6 flex flex-col justify-center items-start lg:mb-0 lg:pl-16">
            <h1 className="text-5xl font-black mb-6">{meta.title}</h1>
            <div className="font-mono text-gray-500">
              <p>{meta.description}</p>
            </div>
          </div>
          <img className="w-full" src={meta.cover} alt={meta.title} />
        </header>

        {/* TECH STACK */}
        {meta.techStack ? (
          <div className="px-8 mx-auto lg:w-4/5 lg:px-0 xl:w-2/3">
            <section className="mb-10">
              <h3 className="text-3xl font-bold mb-4">Tech Stack</h3>
              <div className="flex flex-col justify-start item-start sm:flex-row">
                <div className="mb-6 sm:mr-10">
                  <h4 className="text-2xl font-semibold mb-2">Backend:</h4>
                  <ul className="list-inside list-disc">
                    {meta.techStack.backend.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6 sm:mr-10">
                  <h4 className="text-2xl font-semibold mb-2">Frontend:</h4>
                  <ul className="list-inside list-disc">
                    {meta.techStack.frontend.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="sm:pt-10">
                  <ExternalLink href={meta.techStack.github}>
                    Code on Github
                  </ExternalLink>
                </div>
              </div>
            </section>
          </div>
        ) : null}

        {children}
      </main>

      {/* Other Project */}
      {otherProject ? (
        <section className="mb-20 px-8 lg:px-0">
          <h2 className="mb-6 text-3xl text-center">
            <Emoji name="sparkles">✨</Emoji> Other Project{" "}
            <Emoji name="sparkles">✨</Emoji>
          </h2>
          <Link href={otherProject.href}>
            <a className="block bg-gray-100 rounded-md p-8 mx-auto lg:w-4/5 xl:w-2/3 hover:bg-yellow-50">
              <h2 className="post-title text-3xl inline">
                {otherProject.name}
                <span className="text-green-400">
                  <ArrowNarrowRight />
                </span>
              </h2>
              <p className="mt-4 text-base text-gray-500">
                {otherProject.description}
              </p>
            </a>
          </Link>
        </section>
      ) : null}
    </Layout>
  );
};

export default PortfolioLayout;
