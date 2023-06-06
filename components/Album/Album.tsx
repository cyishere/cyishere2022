import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import type { CSSProperties, MutableRefObject } from 'react';

import { AlbumType } from '@/data/projects';
import { QUERIES } from '@/styles/theme';
import Button from '../Button';

interface AlbumProps {
  album: AlbumType;
  featured?: boolean;
  totalNum: number;
  projectsRef: MutableRefObject<HTMLDivElement[]>;
}

interface AlbumStyleType {
  featured: boolean;
}

const Album: React.FC<AlbumProps> = ({
  album,
  featured = false,
  totalNum,
  projectsRef,
}) => {
  const mediaItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (mediaItemsRef.current && mediaItemsRef.current.length > 1) {
      mediaItemsRef.current.forEach((item) => {
        const x = 20 * Math.floor(Math.random() * 5) - 50;
        const y = 20 * Math.floor(Math.random() * 5) - 50;

        if (item) {
          item.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    }
  }, [mediaItemsRef]);

  return (
    <Wrapper
      role="group"
      aria-label={`project ${album.id} of ${totalNum}`}
      style={
        {
          '--width': featured ? `100vw` : `100%`,
        } as CSSProperties
      }
      ref={(element: HTMLDivElement) => projectsRef.current.push(element)}
    >
      <Content featured={featured}>
        <Title>{album.title}</Title>
        <Excerpt>{album.excerpt}</Excerpt>
        <ButtonWrapper>
          <Button href={album.link}>Checkout</Button>
        </ButtonWrapper>
      </Content>
      <Media featured={featured}>
        {album.screenshots.map((screenshot) => (
          <MediaItem
            key={screenshot.alt}
            ref={(element: HTMLDivElement) =>
              mediaItemsRef.current.push(element)
            }
          >
            <Image
              src={screenshot.src}
              alt={`Clone of ${screenshot.alt}`}
              layout="fill"
              property="true"
            />
          </MediaItem>
        ))}
      </Media>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: var(--clr-text-primary);
  width: var(--width);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 64px;
  align-items: center;

  @media ${QUERIES.laptopAndSmaller} {
    /* gap: 49px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const Content = styled.div<AlbumStyleType>`
  grid-area: ${(props) =>
    props.featured ? `1 / 3 / -1 / 6` : `1 / 2 / -1 / 6`};

  @media ${QUERIES.laptopAndSmaller} {
    grid-area: auto;
    width: min(30rem, 100%);
  }
`;

const Title = styled.h3`
  font-size: var(--font-size-xxl);
`;

const Excerpt = styled.div`
  margin-top: 1em;
`;

const ButtonWrapper = styled.div`
  margin-top: 1em;
`;

const Media = styled.div<AlbumStyleType>`
  grid-area: ${(props) =>
    props.featured ? `1 / 6 / -1 / -2` : `1 / 7 / -1 / -1`};
  height: 300px;
  padding: 50px;
  position: relative;

  @media ${QUERIES.laptopAndSmaller} {
    grid-area: auto;
    width: min(500px, 100%);
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 300px;
    height: auto;
    aspect-ratio: 5 / 3;
  }
`;

const MediaItem = styled.div`
  /* box-shadow: 0 0 10px 6px hsl(0deg 0% 0% / 0.1); */
  box-shadow: 5px 10px 8px hsl(0deg 0% 0% / 0.15);
  height: 300px;
  aspect-ratio: 5 / 3;
  position: absolute;
  top: 50px;
  left: 50px;
  transition: transform 500ms;

  &:first-of-type {
    z-index: 1;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 300px;
    height: auto;
    aspect-ratio: 5 / 3;
  }
`;

export default Album;
