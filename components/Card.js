import { ExternalLink, TextLink } from "./Link";

const Card = ({ project }) => {
  const { href, name, imageUrl, description, demo } = project;

  return (
    <article className="flex flex-col justify-start items-stretch text-center gap-6">
      <h3 className="text-xl font-semibold lg:text-3xl">
        <TextLink href={href}>{name}</TextLink>
      </h3>
      <img className="w-full shadow order-first" src={imageUrl} alt={name} />
      <p className="text-gray-500">{description}</p>
      <p>
        <ExternalLink
          href={href}
          noBg={true}
          classes="flex flex-row justify-center items-center py-2 bg-green-400 text-white mb-2 hover:bg-white hover:text-black"
        >
          live demo
        </ExternalLink>
        <ExternalLink
          href={href}
          noBg={true}
          classes="flex flex-row justify-center items-center py-2 bg-indigo-400 text-white hover:bg-white hover:text-black"
        >
          read more
        </ExternalLink>
      </p>
    </article>
  );
};

export default Card;
