import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from 'react-feather';
import type { CSSProperties } from 'react';

import { ALBUMS } from '@/data/projects';
import { QUERIES } from '@/styles/theme';
import SectionTitle from '../SectionTitle';
import Album from '../Album';
import UnstyledButton from '../UnstyledButton';
import Button from '../Button';
import VisuallyHidden from '../VisuallyHidden';
import ShowMore from '../ShowMore';

const FeaturedProjects: React.FC = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  const handleClick = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : ALBUMS.length - 1);
    } else {
      setSlideIndex(slideIndex < ALBUMS.length - 1 ? slideIndex + 1 : 0);
    }
  };

  /**
   * Fully hide non-visible slides by adding aria-hidden="true"
   * and tabindex="-1" when they go out of view.
   * And show the current one.
   */
  function showCurrentSlide() {
    // Hiding all the projects and their content
    projectsRef.current.forEach((project) => {
      if (project) {
        project.setAttribute('aria-hidden', 'true');

        project.querySelector('a')?.setAttribute('tabindex', '-1');
      }
    });

    // Make sure the current project not hide
    projectsRef.current[slideIndex].removeAttribute('aria-hidden');
    projectsRef.current[slideIndex]
      .querySelector('a')
      ?.removeAttribute('tabindex');
  }

  useEffect(() => {
    if (projectsRef.current.length > 0) {
      showCurrentSlide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex]);

  return (
    <Wrapper>
      <SectionTitle position="center">Projects</SectionTitle>

      <SectionContent aria-label="carousel">
        <VisuallyHidden>
          Carousel with one project at a time. Use the Previous and Next buttons
          to navigate, or the slide dot buttons at the end to jump to slides.
        </VisuallyHidden>
        <LeftArrowWrapper onClick={() => handleClick('left')}>
          <VisuallyHidden>Previous project</VisuallyHidden>
          <ArrowLeft size={64} aria-hidden="true" />
        </LeftArrowWrapper>
        <SliderContainer>
          <Slider
            style={
              {
                '--translateX': `-${slideIndex * 100}%`,
              } as CSSProperties
            }
          >
            {ALBUMS.map((album) => (
              <Album
                key={album.id}
                album={album}
                featured={true}
                totalNum={ALBUMS.length}
                projectsRef={projectsRef}
              />
            ))}
          </Slider>
        </SliderContainer>
        <RightArrowWrapper onClick={() => handleClick('right')}>
          <VisuallyHidden>Next project</VisuallyHidden>
          <ArrowRight size={64} aria-hidden="true" />
        </RightArrowWrapper>
      </SectionContent>

      <ShowMore>
        <Button href="/portfolio">More Project</Button>
      </ShowMore>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 10rem;
  padding-bottom: 6rem;
  box-shadow: 0px -5px 25px 1px hsl(216 65% 18% / 0.1);
`;

const SectionContent = styled.div`
  margin-top: 2rem;
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

  &:hover,
  &:focus {
    opacity: 1;
    transition: opacity 500ms;
  }

  @media ${QUERIES.desktopAndSmaller} {
    top: auto;
    bottom: -128px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    bottom: 0;
  }
`;

const LeftArrowWrapper = styled(ArrowWrapper)`
  left: 2rem;
`;

const RightArrowWrapper = styled(ArrowWrapper)`
  right: 2rem;

  @media ${QUERIES.desktopAndSmaller} {
    right: auto;
    left: calc(3rem + 64px);
  }
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
