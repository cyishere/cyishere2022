import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "react-feather";

import { COLORS } from "@/styles/constants";
import SectionTitle from "../SectionTitle";
import Album from "../Album";
import { ALBUMS } from "@/data/projects";
import { CSSProperties, useEffect, useRef, useState } from "react";

interface FeaturedProjectsProps {}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = () => {
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);
  const widthRef = useRef<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : ALBUMS.length - 1);
    } else {
      setSlideIndex(slideIndex < ALBUMS.length - 1 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    if (sliderContainerRef.current) {
      widthRef.current = sliderContainerRef.current.offsetWidth;
    }
  }, [sliderContainerRef]);

  return (
    <Wrapper>
      <SectionTitle variant="khaki" position="center">
        Projects
      </SectionTitle>
      <SliderWrapper>
        <LeftArrowWrapper>
          <ArrowLeft size={64} onClick={() => handleClick("left")} />
        </LeftArrowWrapper>
        <SliderContainer>
          <Slider
            style={
              {
                "--translateX": `-${slideIndex * 100}%`,
              } as CSSProperties
            }
          >
            {ALBUMS.map((album) => (
              <Album key={album.id} album={album} />
            ))}
          </Slider>
        </SliderContainer>
        <RightArrowWrapper>
          <ArrowRight size={64} onClick={() => handleClick("right")} />
        </RightArrowWrapper>
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
  padding: 64px 96px;
  position: relative;
`;

const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  transition: opacity 200ms;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    opacity: 1;
    transition: opacity 500ms;
  }
`;

const LeftArrowWrapper = styled(ArrowWrapper)`
  left: 0;
`;

const RightArrowWrapper = styled(ArrowWrapper)`
  right: 0;
`;

const SliderContainer = styled.div`
  width: var(--width);
  overflow-x: hidden;
`;

const Slider = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${ALBUMS.length}, 100%);
  transform: translateX(var(--translateX));
  transition: transform 1000ms ease-in;
`;

export default FeaturedProjects;
