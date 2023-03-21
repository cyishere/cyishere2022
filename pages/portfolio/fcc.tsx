import styled from "styled-components";
import Image from "next/image";

import { ExternalLink } from "@/components/TextLink";
import { PortfolioLayout } from "@/components/Layout";
import { fcc as meta, fccProjects as projects } from "@/data/projects";
import { QUERIES } from "@/styles/theme";

const fcc = () => {
  return (
    <PortfolioLayout meta={meta} otherProjectName="The Clone Webs">
      <Wrapper>
        {projects.map((project) => (
          <Section key={project.id}>
            <Grid>
              <Content>
                <Heading2>{project.category}</Heading2>
                <List>
                  {project.projects.map((p) =>
                    p.url ? (
                      <li key={p.name}>
                        <ExternalLink href={p.url}>{p.name}</ExternalLink>
                      </li>
                    ) : (
                      <li key={p.name}>{p.name}</li>
                    )
                  )}
                </List>
              </Content>
              <Media>
                <Image
                  src={project.imageUrl}
                  alt={`${project.category} Certification`}
                  width={600}
                  height={466}
                  layout="responsive"
                />
              </Media>
            </Grid>
          </Section>
        ))}
      </Wrapper>
    </PortfolioLayout>
  );
};

const Wrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 3rem auto;
`;

const Grid = styled.div`
  --gap: 4rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "media content";
  gap: var(--gap);

  @media ${QUERIES.desktopAndSmaller} {
    --gap: 2.5rem;
  }

  @media ${QUERIES.laptopAndSmaller} {
    --gap: 1.75rem;
    grid-template-columns: 300px 1fr;
  }

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "media media"
      "content content";
  }
`;
const Section = styled.section`
  max-width: 1440px;
  margin: 5rem auto;
  padding-left: 72px;
  padding-right: 72px;

  &:nth-of-type(2n) ${Grid} {
    grid-template-areas: "content media";

    @media ${QUERIES.tabletAndSmaller} {
      grid-template-areas:
        "media media"
        "content content";
    }
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 0;
    padding-right: 0;
  }
`;

const Content = styled.article`
  grid-area: content;
  padding-left: var(--gap);
  padding-right: var(--gap);
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    margin-top: 1.6em;
  }
`;

const Media = styled.div`
  grid-area: media;
  position: relative;
`;

const Heading2 = styled.h2`
  font-size: var(--font-size-xl);
`;

const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
`;

export default fcc;
