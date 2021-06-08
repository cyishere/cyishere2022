import { ButtonLink, TextLink } from "./Link";
import { Icon, ChevronRight } from "./Icon";

const FeaturedProjects = ({ featuredProjects }) => (
  <>
    <div className="bg-green-100 py-20">
      <div className="w-full mx-auto grid grid-cols-1 px-6 lg:w-2/3 lg:grid-cols-2 lg:px-0">
        <article className="pr-20 mb-10 lg:mb-0">
          <h3 className="text-3xl font-semibold mb-4">
            <TextLink href={featuredProjects[0].href}>
              {featuredProjects[0].name}
            </TextLink>
          </h3>
          <p className="mb-4">{featuredProjects[0].description}</p>
          <div className="icons-group flex flex-row justify-start items-center mb-10">
            <Icon text="Express" iconUrl="/icons/express.svg" />
            <Icon text="MongoDB" iconUrl="/icons/mongodb.svg" />
            <Icon text="React" iconUrl="/icons/react.svg" />
            <Icon text="Redux" iconUrl="/icons/redux.svg" />
            <Icon
              text="styled-components"
              width="48"
              height="48"
              iconUrl="/icons/styled-components.svg"
            />
          </div>
          <p>
            <ButtonLink
              classes="bg-pink-500 px-4 py-2 text-gray-100 hover:bg-pink-300 hover:text-gray-600"
              href={featuredProjects[0].href}
            >
              Project Details <ChevronRight />
            </ButtonLink>
          </p>
        </article>
        <img
          className="w-full shadow-lg"
          src={featuredProjects[0].imageUrl}
          alt={`${featuredProjects[0].name} screenshot`}
        />
      </div>
    </div>

    <div className="w-full mx-auto grid grid-cols-1 py-20 px-6 lg:w-2/3 lg:grid-cols-2 lg:px-0">
      <img
        className="w-full shadow-lg mb-10 lg:mb-0"
        src={featuredProjects[1].imageUrl}
        alt={`${featuredProjects[1].name} screenshot`}
      />
      <article className="pl-20">
        <h3 className="text-3xl font-semibold mb-4">
          <TextLink href={featuredProjects[1].href}>
            {featuredProjects[1].name}
          </TextLink>
        </h3>
        <p className="mb-4">{featuredProjects[1].description}</p>
        <div className="icons-group flex flex-row justify-start items-center mb-10">
          <Icon text="React" iconUrl="/icons/react.svg" />
          <Icon text="TailwindCSS" iconUrl="/icons/tailwindcss.svg" />
          <Icon text="Apollo" iconUrl="/icons/apollographql.svg" />
          <Icon text="GraphQL" iconUrl="/icons/graphql.svg" />
          <Icon text="Prisma" iconUrl="/icons/prisma.svg" />
          <Icon text="PostgreSQL" iconUrl="/icons/postgresql.svg" />
        </div>
        <p>
          <ButtonLink
            classes="bg-green-500 px-4 py-2 text-gray-100 hover:bg-green-300 hover:text-gray-600"
            href={featuredProjects[1].href}
          >
            Project Details <ChevronRight />
          </ButtonLink>
        </p>
      </article>
    </div>
  </>
);

export default FeaturedProjects;
