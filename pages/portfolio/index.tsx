import type { NextPage } from "next";
import styled from "styled-components";
import Image from "next/image";

import { Layout } from "@/components/Layout";
import SectionTitle from "@/components/SectionTitle";
import Emoji from "@/components/Emoji";
import { ALBUMS, fcc, REACT_PROJECTS } from "@/data/projects";
import { ButtonLink, ExternalButtonLink } from "@/components/Button";
import { QUERIES } from "@/styles/constants";
import VisuallyHidden from "@/components/VisuallyHidden";

const Portfolio: NextPage = () => {
  return (
    <Layout title="Portfolio | React Projects">
      <Wrapper>
        <SectionTitle variant="khaki" position="center">
          Portfolio <Emoji name="Atom Symbol">⚛️</Emoji>
        </SectionTitle>
        <PageDescription>Projects learning by doing.</PageDescription>

        {/* Featured Section */}
        <FeaturedSection>
          {ALBUMS.map((project) => (
            <FeaturedProjectContainer key={project.id}>
              <FeaturedProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectExcerpt>{project.excerpt}</ProjectExcerpt>
                <CheckoutButton>
                  <ButtonLink variant="primary" href={project.link}>
                    View More
                  </ButtonLink>
                </CheckoutButton>
              </FeaturedProjectContent>
              <ProjectMedia>
                <Image
                  src={project.cover!.imageUrl!}
                  alt=""
                  width={project.cover!.width!}
                  height={project.cover!.height!}
                  layout="responsive"
                />
              </ProjectMedia>
            </FeaturedProjectContainer>
          ))}
        </FeaturedSection>

        {/* Small React Projects */}
        <ReactProjectSection>
          <VisuallyHidden>
            <h2 id="react-apps">React Apps</h2>
          </VisuallyHidden>
          {REACT_PROJECTS.map((project) => (
            <ReactProjectContainer key={project.id}>
              <ReactProjectMedia>
                <Image
                  src={project.screenshots[0].src}
                  alt=""
                  width={600}
                  height={337}
                  layout="responsive"
                />
              </ReactProjectMedia>
              <ReactProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectExcerpt>{project.excerpt}</ProjectExcerpt>
                <ButtonGroup>
                  <ExternalButtonLink variant="primary" href={project.link}>
                    View More
                  </ExternalButtonLink>
                  <ExternalButtonLink href={project.demo!}>
                    Live Demo
                  </ExternalButtonLink>
                </ButtonGroup>
              </ReactProjectContent>
            </ReactProjectContainer>
          ))}
        </ReactProjectSection>

        {/* Fcc */}
        <FccSection>
          <FccContent>
            <ProjectTitle>{fcc.title}</ProjectTitle>
            <ProjectExcerpt>{fcc.excerpt}</ProjectExcerpt>
            <List>
              {fcc.contentList?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </List>
            <ButtonLink variant="primary" href="/portfolio/fcc">
              Details
            </ButtonLink>
          </FccContent>
          <FccMedia>
            <Image
              src={fcc.cover}
              alt=""
              width={534}
              height={300}
              layout="responsive"
            />
          </FccMedia>
        </FccSection>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  --padding-x: 2rem;
  max-width: 1440px;
  padding-left: var(--padding-x);
  padding-right: var(--padding-x);
  padding-bottom: 6rem;
  margin: 0 auto;
`;

const PageDescription = styled.p`
  font-size: var(--font-size-lg);
  text-align: center;
  max-width: 50ch;
  margin: 1.6em auto 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`;

const Media = styled.div`
  position: relative;
`;

// Featured Section
const FeaturedSection = styled.section`
  background-color: var(--clr-white);
  padding: calc(var(--padding-x) + 2rem);
  margin-left: calc(var(--padding-x) * -1);
  margin-right: calc(var(--padding-x) * -1);
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 4rem;

  @media ${QUERIES.laptopAndSmaller} {
    grid-template-columns: 1fr;
    padding-left: 0;
    padding-right: 0;
  }
`;

const FeaturedProjectContainer = styled.article`
  border-radius: 0.5em;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  row-gap: 3rem;
  transition: background 300ms ease;

  &:hover {
    background-color: var(--clr-purple-light);
  }

  @media ${QUERIES.laptopAndSmaller} {
    padding-left: 0;
    padding-right: 0;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    row-gap: 0;
    column-gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 0 2rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    row-gap: 2rem;
    grid-template-areas:
      "featuredMedia"
      "featuredContent";
  }
`;

const FeaturedProjectContent = styled(Content)`
  grid-area: 2 / 1 / -1 / -1;

  @media ${QUERIES.laptopAndSmaller} {
    grid-area: 1 / 2 / -1 / 6;
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-area: featuredContent;
  }
`;

const ProjectTitle = styled.h3`
  margin-top: 0;
`;

const ProjectExcerpt = styled.p``;

const CheckoutButton = styled.div``;

const ProjectMedia = styled(Media)`
  grid-area: 1 / 1 / 2 / -1;

  @media ${QUERIES.laptopAndSmaller} {
    grid-area: 1 / 6 / -1 / -2;
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-area: featuredMedia;
  }
`;

// Small React Projects
const ReactProjectSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;

  @media ${QUERIES.tabletAndSmaller} {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 4rem;
  }
`;

const ReactProjectContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  row-gap: 3rem;
`;

const ReactProjectMedia = styled(Media)`
  flex: 1;
`;

const ReactProjectContent = styled(Content)`
  gap: 1.25rem;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
`;

// Fcc
const FccSection = styled.section`
  background-color: var(--clr-white);
  padding: 4rem 0;
  margin-left: calc(var(--padding-x) * -1);
  margin-right: calc(var(--padding-x) * -1);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  row-gap: 0;
  column-gap: 64px;

  @media ${QUERIES.laptopAndSmaller} {
    column-gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-rows: auto 1fr;
    row-gap: 4rem;
  }
`;

const FccContent = styled(Content)`
  grid-area: 1 / 2 / -1 / 7;

  @media ${QUERIES.phoneAndSmaller} {
    grid-area: 1 / 2 / 2 / -2;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
`;

const FccMedia = styled(Media)`
  grid-area: 1 / 7 / -1 / -2;

  @media ${QUERIES.phoneAndSmaller} {
    grid-area: 2 / 1 / -1 / -1;
  }
`;

export default Portfolio;
