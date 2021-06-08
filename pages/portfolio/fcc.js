import { ExternalLink } from "@/components/Link";
import PortfolioLayout from "@/components/PortfolioLayout";
import { fcc as meta, fccProjects as projects } from "@/utils/data";

const fcc = () => {
  const content = projects.map((p) => {
    const even = p.id % 2 === 0;

    return (
      <div className="flex flex-col justify-evenly items-center mb-16 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <article
            className={`portfolio flow p-6 lg:p-0 ${
              even ? "lg:pl-8" : "lg:pr-8"
            }`}
          >
            <h2>{p.category}</h2>
            <ul>
              {p.projects.map((item) => (
                <ProjectItem key={item.name} item={item} />
              ))}
            </ul>
          </article>
        </div>

        <img
          className={`w-full lg:w-1/2 ${even ? "lg:order-first" : ""}`}
          src={p.imageUrl}
          alt={`${p.category} Certification`}
        />
      </div>
    );
  });

  return (
    <PortfolioLayout meta={meta} otherProjectName="digiKIT">
      <article className="w-full">
        <div className="portfolio flow px-8 mx-auto lg:w-4/5 lg:px-0 xl:w-2/3">
          {content}
        </div>
      </article>
    </PortfolioLayout>
  );
};

const ProjectItem = ({ item }) => {
  const { name, url } = item;
  if (url) {
    return (
      <li>
        <ExternalLink href={url}>{name}</ExternalLink>
      </li>
    );
  }

  return <li>{name}</li>;
};

export default fcc;
