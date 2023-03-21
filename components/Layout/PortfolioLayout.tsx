import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "react-feather";

import { ALBUMS, AlbumType, ProjectType } from "@/data/projects";
import { Layout } from ".";
import { ExternalLink } from "../TextLink";
import Emoji from "../Emoji";
import { QUERIES } from "@/styles/theme";

interface PortfolioLayoutProps {
  meta: ProjectType;
  otherProjectName?: string;
}

const PortfolioLayout: React.FC<PortfolioLayoutProps> = ({
  meta,
  children,
  otherProjectName,
}) => {
  let otherProject: AlbumType | null | undefined = null;
  if (otherProjectName) {
    otherProject = ALBUMS.find((project) => project.title === otherProjectName);
  }
  return (
    <Layout title={meta.seoTitle ? meta.seoTitle : meta.title}>
      <Wrapper>
        {/* HEADER SECTION */}
        <Header>
          <HeaderContent>
            <Title>{meta.title}</Title>
            <Excerpt>{meta.description}</Excerpt>
          </HeaderContent>
          <CoverWrapper>
            <Image src={meta.cover} layout="fill" alt="" property="true" />
          </CoverWrapper>
        </Header>

        {/* TECH STACK */}
        {meta.techStack ? (
          <TechStackSection>
            <TechStackWrapper>
              <h3>Tech Stack</h3>
              <TechStackContent>
                <TechStackColumn>
                  <h4>Backend:</h4>
                  <TechStackList>
                    {meta.techStack.backend.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </TechStackList>
                </TechStackColumn>
                <TechStackColumn>
                  <h4>Frontend:</h4>
                  <TechStackList>
                    {meta.techStack.frontend.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </TechStackList>
                </TechStackColumn>
                <TechStackColumn>
                  <ExternalLink href={meta.techStack.github}>
                    Code on GitHub
                  </ExternalLink>
                </TechStackColumn>
              </TechStackContent>
            </TechStackWrapper>
          </TechStackSection>
        ) : null}

        {children}

        {/* OTHER PROJECT */}
        {otherProject ? (
          <OtherProjectSection>
            <OtherProjectSectionTitle>
              <Emoji name="sparkles">✨</Emoji> Other Project{" "}
              <Emoji name="sparkles">✨</Emoji>
            </OtherProjectSectionTitle>
            <Link href={otherProject.link} passHref>
              <OtherProjectWrapper>
                <OtherProjectTitle>
                  {otherProject.title}{" "}
                  <IconWrapper>
                    <ArrowRight />
                  </IconWrapper>
                </OtherProjectTitle>
                <OtherProjectExcerpt>
                  {otherProject.excerpt}
                </OtherProjectExcerpt>
              </OtherProjectWrapper>
            </Link>
          </OtherProjectSection>
        ) : null}
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.main`
  background-color: var(--clr-white);
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Header = styled.header`
  max-width: 1100px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media ${QUERIES.laptopAndSmaller} {
    grid-template-columns: 1fr 300px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: var(--font-size-xxxl);
  margin-top: 0;
`;

const Excerpt = styled.p`
  font-size: var(--font-size-md);
`;

const CoverWrapper = styled.div`
  width: 100%;
  aspect-ratio: 5 / 3;
  position: relative;
`;

const TechStackSection = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
`;

const TechStackWrapper = styled.div`
  line-height: 1.8;
  max-width: 800px;
  margin: auto;

  & > * + * {
    margin-top: 1.6em;
  }
`;

const TechStackContent = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
`;

const TechStackColumn = styled.div`
  h4 {
    margin-top: 0;
  }

  & > * + * {
    margin-top: 1.2em;
  }
`;

const TechStackList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
`;

const OtherProjectSection = styled.section`
  max-width: 800px;
  padding-top: 5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;

  & > * + * {
    margin-top: 1.6em;
  }
`;
const OtherProjectSectionTitle = styled.h2`
  text-align: center;
  font-size: var(--font-size-xl);
`;

const OtherProjectWrapper = styled.a`
  background-color: var(--clr-purple-light);
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  display: block;

  &:hover {
    background-color: var(--clr-khaki-light);
  }
`;

const OtherProjectTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const IconWrapper = styled.span`
  display: inline-block;
`;

const OtherProjectExcerpt = styled.p`
  color: var(--clr-text-light);
`;

export default PortfolioLayout;
