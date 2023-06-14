import styled from 'styled-components';

import Emoji from '../Emoji';
import BouncingLogos from '../BouncingLogos';
import { MaxWidthWrapper } from '../MaxWidthWrapper';
import { color, font, fontSize, fontWeight } from '@/styles/helpers';

const Hero = () => {
  return (
    <Wrapper>
      <MaxWidthContainer>
        <BouncingLogos />
        <IntroWraper>
          <Greeting>
            <Emoji name="Vulcan Salute">🖖🏻</Emoji> I make website.
          </Greeting>

          <Callout>Chen Yang</Callout>

          <Intro>
            I am a self-taught <Frontend>front-end</Frontend> developer who also
            makes <Fullstack>full-stack</Fullstack> stuff.
          </Intro>
        </IntroWraper>
      </MaxWidthContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-left: 32px;
  padding-right: 32px;
  border-bottom: 2px solid ${color('text.main')};
`;

const MaxWidthContainer = styled(MaxWidthWrapper)`
  position: relative;
  padding-top: 80px;
  padding-bottom: 180px;
  isolation: isolate;
`;

const IntroWraper = styled.div`
  max-width: 70ch;
  margin: auto;
`;

const Greeting = styled.p`
  font-size: ${fontSize('lg')};
  letter-spacing: 2px;
  color: ${color('accent.main')};
  font-weight: ${fontWeight('medium')};
`;

const Callout = styled.h1`
  --color-shadow-letter: ${color('button.text')};
  font-family: ${font('special')};
  font-size: ${96 / 16}rem;
  font-weight: ${fontWeight('bold')};
  margin-top: 0.5em;
  text-shadow: 7.25px 0.25px 0 var(--color-shadow-letter),
    0.5px 0.5px 0 var(--color-shadow-letter),
    0.75px 0.75px 0 var(--color-shadow-letter),
    1px 1px 0 var(--color-shadow-letter),
    1.25px 1.25px 0 var(--color-shadow-letter),
    1.5px 1.5px 0 var(--color-shadow-letter),
    1.75px 1.75px 0 var(--color-shadow-letter),
    2px 2px 0 var(--color-shadow-letter),
    2.25px 2.25px 0 var(--color-shadow-letter),
    2.5px 2.5px 0 var(--color-shadow-letter),
    2.75px 2.75px 0 var(--color-shadow-letter),
    3px 3px 0 var(--color-shadow-letter),
    3.25px 3.25px 0 var(--color-shadow-letter),
    3.5px 3.5px 0 var(--color-shadow-letter),
    3.75px 3.75px 0 var(--color-shadow-letter),
    4px 4px 0 var(--color-shadow-letter),
    5.25px 5.25px 0 var(--color-shadow-letter),
    5.5px 5.5px 0 var(--color-shadow-letter),
    5.75px 5.75px 0 var(--color-shadow-letter),
    6px 6px 0 var(--color-shadow-letter);
`;

const Intro = styled.p`
  font-size: ${fontSize('xxl')};
  margin-top: 0.5em;
`;

const Em = styled.em`
  font-style: italic;
  font-family: ${font('heading')};
  font-weight: ${fontWeight('medium')};
`;

const Frontend = styled(Em)`
  color: ${color('primary.main')};
`;

const Fullstack = styled(Em)`
  color: ${color('secondary.main')};
`;

export default Hero;
