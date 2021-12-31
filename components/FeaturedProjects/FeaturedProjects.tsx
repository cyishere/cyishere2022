import { CSSProperties, useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "react-feather";

import { ALBUMS } from "@/data/projects";
import { COLORS, QUERIES } from "@/styles/constants";
import SectionTitle from "../SectionTitle";
import Album from "../Album";
import UnstyledButton from "../UnstyledButton";

const FeaturedProjects: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : ALBUMS.length - 1);
    } else {
      setSlideIndex(slideIndex < ALBUMS.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Wrapper>
      <SectionTitle variant="khaki" position="center">
        Projects
      </SectionTitle>

      <SectionContent>
        <LeftArrowWrapper>
          <ArrowLeft size={64} onClick={() => handleClick("left")} />
        </LeftArrowWrapper>
        <RightArrowWrapper>
          <ArrowRight size={64} onClick={() => handleClick("right")} />
        </RightArrowWrapper>
        <SliderContainer>
          <Slider
            style={
              {
                "--translateX": `-${slideIndex * 100}%`,
              } as CSSProperties
            }
          >
            {ALBUMS.map((album) => (
              <Album key={album.id} album={album} featured={true} />
            ))}
          </Slider>
        </SliderContainer>
      </SectionContent>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 10rem;
  padding-bottom: 6rem;
  background-color: var(--clr-yellow-light);
  box-shadow: 0px -5px 25px 1px hsl(${COLORS.textSecondary} / 0.1);
`;

const SectionContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  /* padding: 64px 96px; */
  position: relative;
`;

const ArrowWrapper = styled(UnstyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  transition: opacity 200ms;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;

  &:hover {
    opacity: 1;
    transition: opacity 500ms;
  }

  @media ${QUERIES.laptopAndSmaller} {
    top: auto;
    bottom: -64px;
  }
`;

const LeftArrowWrapper = styled(ArrowWrapper)`
  left: 2rem;
`;

const RightArrowWrapper = styled(ArrowWrapper)`
  right: 2rem;
`;

const SliderContainer = styled.div`
  padding-left: calc(4rem + 64px);
  padding-right: calc(4rem + 64px);
  overflow: hidden;
`;

const Slider = styled.div`
  width: ${ALBUMS.length * 100}vw;
  margin-left: calc((4rem + 64px) * -1);
  display: grid;
  grid-template-columns: repeat(${ALBUMS.length}, 100%);
  transform: translateX(var(--translateX));
  transition: transform 1000ms ease-in;
`;

export default FeaturedProjects;
