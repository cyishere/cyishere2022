import styled from "styled-components";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "react-feather";

import { COLORS } from "@/styles/constants";
import SectionTitle from "../SectionTitle";
import Album from "../Album";
import { ALBUMS } from "@/data/projects";

interface FeaturedProjectsProps {}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = () => {
  return (
    <Wrapper>
      <SectionTitle variant="khaki" position="center">
        Projects
      </SectionTitle>
      <SliderWrapper>
        <ArrowWrapper>
          <ArrowLeft size={64} />
        </ArrowWrapper>
        <Slider>
          {ALBUMS.map((album) => (
            <Album key={album.id} album={album} />
          ))}
        </Slider>
        <ArrowWrapper>
          <ArrowRight size={64} />
        </ArrowWrapper>
      </SliderWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 10rem;
  padding-bottom: 6rem;
  background-color: var(--clr-yellow-light);
  box-shadow: 0px -5px 25px 1px hsl(${COLORS.textSecondary} / 0.1);
`;

const SliderWrapper = styled.div`
  margin: 2rem;
  display: grid;
  grid-template-columns: 64px 1fr 64px;
  column-gap: 32px;
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slider = styled.div``;

export default FeaturedProjects;
