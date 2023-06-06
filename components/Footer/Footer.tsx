import styled from 'styled-components';
import Link from 'next/link';
import { Twitter, GitHub, Codepen } from 'react-feather';

import Emoji from '../Emoji';
import BuyMeCoffee from '../BuyMeCoffee';
import { QUERIES } from '@/styles/theme';
import { color } from '@/styles/helpers';

const Footer: React.FC = () => {
  const createdAt = new Date('2021').getFullYear();
  const today = new Date();
  const thisYear = today.getFullYear();

  return (
    <Wrapper>
      <Container>
        <Copyright>
          <p>
            &copy;{' '}
            {createdAt === thisYear ? thisYear : `${createdAt} - ${thisYear}`}
          </p>
          <p>
            Made with <Emoji name="coffee">☕</Emoji> &{' '}
            <Emoji name="cat">🐈</Emoji> in Tianjin, China.
          </p>
        </Copyright>
        <SocialLinks>
          <Link href="https://twitter.com/cyishere" passHref>
            <SocialIcon>
              <Twitter size={30} />
            </SocialIcon>
          </Link>
          <Link href="https://github.com/cyishere" passHref>
            <SocialIcon>
              <GitHub size={30} />
            </SocialIcon>
          </Link>
          <Link href="https://codepen.io/cyishere" passHref>
            <SocialIcon>
              <Codepen size={30} />
            </SocialIcon>
          </Link>
          <BuyMeCoffee />
        </SocialLinks>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 0.5rem 2rem;
  background-color: ${color('base.200')};
`;

const Container = styled.div`
  max-width: min(1100px, 100%);
  margin: 0 auto;
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media ${QUERIES.phoneAndSmaller} {
    flex-direction: column;
    justify-content: center;
  }
`;

const Copyright = styled.div`
  display: flex;
  gap: 1rem;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  @media ${QUERIES.phoneAndSmaller} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  background-color: ${color('base.100')};
  color: ${color('text.main')};
  border-radius: 50%;
  width: 46px;
  height: 46px;
  display: grid;
  place-content: center;
  transition: background 500ms ease-in, transform 500ms ease-in;

  &:hover {
    background-color: ${color('accent.main')};
    transform: rotate(360deg);
  }
`;

export default Footer;
