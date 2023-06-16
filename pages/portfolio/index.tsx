import type { NextPage } from 'next';
import styled from 'styled-components';
import Image from 'next/image';

import { QUERIES } from '@/styles/theme';
import { color } from '@/styles/helpers';
import { Layout } from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import Emoji from '@/components/Emoji';
import { ALBUMS, fcc, REACT_PROJECTS } from '@/data/projects';
import Button from '@/components/Button';
import VisuallyHidden from '@/components/VisuallyHidden';
import BlockQuote from '@/components/BlockQuote/BlockQuote';

const Portfolio: NextPage = () => {
  return (
    <Layout title="Portfolio | React Projects">
      <Wrapper>
        <Hero>
          <SectionContainer>
            <SectionTitle position="center">
              Portfolio <Emoji name="Atom Symbol">⚛️</Emoji>
            </SectionTitle>
            <PageDescription>Projects learning by doing.</PageDescription>
            <SpecialInfo variant="info">
              These projects were all completed between 2021 and the first half
              of 2022 which are all out of date now since I&#39;ve made big
              progress with React and Next.js. I&#39;m working on some new
              projects to demonstrate my expertise.
            </SpecialInfo>
          </SectionContainer>
        </Hero>

        {/* Featured Section */}
        <FeaturedSection>
          <FeaturedSectionContainer>
            {ALBUMS.map((project) => (
              <FeaturedProjectContainer key={project.id}>
                <FeaturedProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectExcerpt>{project.excerpt}</ProjectExcerpt>
                  <CheckoutButton>
                    <Button href={project.link}>View More</Button>
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
          </FeaturedSectionContainer>
        </FeaturedSection>

        {/* Small React Projects */}
        <ReactProjectSection id="react-apps">
          <ReactSectionContainer>
            <VisuallyHidden>
              <h2>React Apps</h2>
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
                    <Button href={project.link}>View More</Button>
                  </ButtonGroup>
                </ReactProjectContent>
              </ReactProjectContainer>
            ))}
          </ReactSectionContainer>
        </ReactProjectSection>

        {/* Fcc */}
        <FccSection>
          <FccSectionContainer>
            <FccContent>
              <ProjectTitle>{fcc.title}</ProjectTitle>
              <ProjectExcerpt>{fcc.excerpt}</ProjectExcerpt>
              <List>
                {fcc.contentList?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </List>
              <Button href="/portfolio/fcc">Details</Button>
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
          </FccSectionContainer>
        </FccSection>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  --px: 32px;
  --py: 64px;
  --border-t: 2px solid ${color('hr.main')};
  margin: 0 auto;
`;

const Hero = styled.section`
  background-color: ${color('reverse.main')};
  padding-bottom: var(--py);
`;

const SectionContainer = styled.div`
  max-width: var(--max-w);
  padding: 0 var(--px);
  margin: 0 auto;
`;

const SpecialInfo = styled(BlockQuote)`
  max-width: 800px;
  margin: 2em auto 0 auto;
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
  background-color: ${color('button.text')};
  border-top: var(--border-t);
  padding: var(--py) 0;
`;

const FeaturedSectionContainer = styled(SectionContainer)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: var(--py);
  column-gap: var(--py);

  @media ${QUERIES.laptopAndSmaller} {
    grid-template-columns: 1fr;
    padding-left: 0;
    padding-right: 0;
  }
`;

const FeaturedProjectContainer = styled.article`
  border-radius: 0.5em;
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
      'featuredMedia'
      'featuredContent';
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
  padding: var(--py) var(--px);
  border-top: var(--border-t);
`;

const ReactSectionContainer = styled(SectionContainer)`
  margin: 0 auto;
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
  background-color: ${color('warning.main')};
  border-top: var(--border-t);
  padding: var(--py) var(--px);
`;

const FccSectionContainer = styled(SectionContainer)`
  margin: 0 auto;
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
