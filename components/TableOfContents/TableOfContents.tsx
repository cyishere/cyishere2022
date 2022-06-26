import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export interface HeadingType {
  text: string;
  anchor: string;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<HeadingType[]>([]);
  const tocLinksRef = useRef<HTMLAnchorElement[]>([]);
  const firstVisibleLink = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const obsvCallback: IntersectionObserverCallback = (entries) => {
      const links = tocLinksRef.current;

      entries.forEach((entry) => {
        const activeHeading = entry.target;

        links.forEach((link) => {
          const href = link?.href.split("#")[1];

          if (entry.isIntersecting && href === activeHeading.id) {
            links.forEach((l) => l?.classList.remove("active"));
            link?.classList.add("active");
          }
        });

        if (!firstVisibleLink.current) {
          links[0]?.classList.add("active");
          firstVisibleLink.current = links[0];
        }
      });
    };

    const observer = new IntersectionObserver(obsvCallback, {
      rootMargin: "0px 0px -70% 0px",
      threshold: [1.0],
    });

    const h2Headings = Array.from(
      document.querySelectorAll("article > h2")
    ) as HTMLElement[];

    const h2s: HeadingType[] = h2Headings.map((h2) => {
      observer.observe(h2);

      return {
        text: h2.dataset.text!,
        anchor: "#" + h2.id,
      };
    });

    setHeadings(h2s);

    return () => {
      h2Headings.map((h2) => {
        observer.unobserve(h2);
      });
    };
  }, []);

  return (
    <Wrapper>
      <TocTitle>Table of Contents</TocTitle>
      {headings.length > 0 ? (
        <>
          {headings.map((heading) => (
            <TocLink
              key={heading.text}
              ref={(el: HTMLAnchorElement) => tocLinksRef.current.push(el)}
              href={heading.anchor}
            >
              {heading.text}
            </TocLink>
          ))}
        </>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  --borderW: 5px;
  --paddingX: 20px;
`;

const TocTitle = styled.h2`
  margin: 0 auto 1rem calc(var(--borderW) + var(--paddingX));
`;

const TocLink = styled.a`
  --_borderColor: var(--clr-purple-light);
  --borderColor: var(--_borderColor);
  --_bgColor: transparent;
  --bgColor: var(--_bgColor);
  display: block;
  font-size: var(--font-size-sm);
  color: var(--clr-text-primary);
  background-color: var(--bgColor);
  border-left: 5px solid var(--borderColor);
  padding: 9px var(--paddingX);
  transition: background 500ms linear, border 500ms linear;

  &:hover {
    color: var(--clr-purple-primary);
  }

  &:focus {
    outline-offset: -4px;
  }

  &.active {
    --borderColor: var(--clr-purple-primary);
    --bgColor: var(--clr-purple-light);
  }
`;

export default TableOfContents;
