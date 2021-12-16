import Head from "next/head";

interface Props {
  title: string;
  altTitle?: string;
  description?: string;
  pathname: string;
}

const SEO: React.FC<Props> = ({ title, altTitle, description, pathname }) => {
  const domainUrl = "https://cyishere.dev";

  const titleContent = altTitle ? altTitle : title;

  const descripitonContent = description
    ? description
    : "Frontend Developer: React, Gatsby, JavaScript, TypeScript, CSS-in-Js, Storybook, TDD & a tiny bit of Apollo/GraphQL/Prisma";
  const canonical = pathname !== "/" ? `${domainUrl}${pathname}` : domainUrl;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{titleContent}</title>
      <meta name="description" content={descripitonContent} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical} />
      <meta
        name="image"
        content={`${domainUrl}/images/cyishere-site-image.jpg`}
      />
      <meta name="image:alt" content={descripitonContent} />
    </Head>
  );
};

export default SEO;
