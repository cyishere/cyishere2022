import { useEffect, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

import { AlbumType } from "@/data/projects";
import { QUERIES } from "@/styles/constants";

interface AlbumProps {
  album: AlbumType;
}

const Album: React.FC<AlbumProps> = ({ album }) => {
  const mediaItemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (mediaItemsRef.current) {
      mediaItemsRef.current.forEach((item) => {
        const x = 25 * Math.floor(Math.random() * 5) - 50;
        const y = 25 * Math.floor(Math.random() * 5) - 50;

        item.style.transform = `translate(${x}px, ${y}px)`;
      });
    }
  }, [mediaItemsRef]);

  return (
    <Link href={album.link} passHref>
      <Wrapper as="a">
        <Content>
          <Title>{album.title}</Title>
          <Excerpt>{album.excerpt}</Excerpt>
        </Content>
        <Media>
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
                width={500}
                height={300}
                layout="fixed"
              />
            </MediaItem>
          ))}
        </Media>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  color: var(--clr-text-primary);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 64px;

  @media ${QUERIES.laptopAndSmaller} {
    gap: 49px;
  }
`;

const Content = styled.div`
  grid-area: 1 / 2 / -1 / 6;
`;

const Title = styled.h3`
  font-size: var(--font-size-xxl);
`;

const Excerpt = styled.div`
  margin-top: 1em;
`;

const Media = styled.div`
  grid-area: 1 / 7 / -1 / -1;
  height: 30rem;
  position: relative;
`;

const MediaItem = styled.div`
  box-shadow: 0 0 10px hsl(0deg 0% 0% / 0.1);
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 500ms;

  &:first-of-type {
    z-index: 1;
  }
`;

export default Album;
