import Head from "next/head";

interface Props {
  title: string;
  pathname: string;
  seoTitle?: string;
  description?: string;
  canonical?: string;
  pageImage?: string;
}

const SEO: React.FC<Props> = ({
  title,
  seoTitle,
  description,
  pathname,
  canonical,
  pageImage,
}) => {
  const domainUrl = "https://cyishere.dev";

  const titleContent = seoTitle ? seoTitle : title;

  const descripitonContent = description
    ? description
    : "Frontend Developer: React, Gatsby, JavaScript, TypeScript, CSS-in-Js, Storybook, TDD & a tiny bit of Apollo/GraphQL/Prisma";

  const canonicalLink = canonical
    ? canonical
    : pathname !== "/"
    ? `${domainUrl}${pathname}`
    : domainUrl;

  const image = pageImage ? pageImage : `${domainUrl}/images/og-default.png`;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{titleContent}</title>
      <meta name="description" content={descripitonContent} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonicalLink} />
      <meta name="image" content={image} />
      <meta name="image:alt" content={descripitonContent} />
      <meta property="og:title" content="Chen Yang, aka CY" />
      <meta
        property="og:description"
        content="Frontend Developer: React, Gatsby, JavaScript, TypeScript, CSS-in-Js, Storybook, TDD & a tiny bit of Apollo/GraphQL/Prisma"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta
        property="og:image:alt"
        content="Banner for cyishere.dev, featuring many tech stack icons"
      />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="675" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@cyishere" />
      <meta name="twitter:title" content="Chen Yang, aka CY" />
      <meta
        name="twitter:description"
        content="Articles about front-end and some full-stack development. Focus on React, CSS, and more!"
      />
      <meta name="twitter:image" content={image} />
      <meta name="theme-color" content="hsl(246deg 62.5% 96.9%)" />
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
  );
};

export default SEO;
