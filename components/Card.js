import { ExternalLinkSolid } from "./Icon";
import { ExternalLink, TextLink } from "./Link";

const Card = ({ project }) => {
  const { href, name, imageUrl, description } = project;

  return (
    <article className="flex flex-col justify-start items-stretch text-center">
      <h3 className="text-3xl font-semibold mb-4">
        <TextLink href={href}>{name}</TextLink>
      </h3>
      <img
        className="w-full mb-4 shadow order-first"
        src={imageUrl}
        alt={name}
      />
      <p className="mb-4 text-gray-500">{description}</p>
      <p>
        <ExternalLink
          href={href}
          noBg={true}
          classes="flex flex-row justify-center items-center bg-yellow-400 text-white hover:bg-white hover:text-black"
        >
          read more
        </ExternalLink>
      </p>
    </article>
  );
};

export default Card;
