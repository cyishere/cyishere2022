import { ExternalLink } from "@/components/Link";
import PortfolioLayout from "@/components/PortfolioLayout";
import { fcc as meta, fccProjects as projects } from "@/utils/data";

const fcc = () => {
  const content = projects.map((p) => {
    const even = p.id % 2 === 0;

    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:mb-16">
        <article className="portfolio flow">
          <h2 className="p-6 lg:p-0">{p.category}</h2>
          <ul>
            {p.projects.map((item) => (
              <ProjectItem key={item.name} item={item} />
            ))}
          </ul>
        </article>

        <img
          className={`md:mt-10 ${even ? "lg:order-first" : ""}`}
          src={p.imageUrl}
          alt={`${p.category} Certification`}
        />
      </div>
    );
  });

  return (
    <PortfolioLayout meta={meta} otherProjectName="digiKIT">
      <section className="w-full">
        <div className="portfolio flow mx-auto md:px-6 xl:w-2/3">{content}</div>
      </section>
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
