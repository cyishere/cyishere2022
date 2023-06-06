import styled, { keyframes } from 'styled-components';

import BmcIcon from './BmcIcon';

const BuyMeCoffee = () => {
  return (
    <Link href="https://www.buymeacoffee.com/cyishere" target="_blank">
      <BmcIcon />
      <Text>Buy me a coffee</Text>
    </Link>
  );
};

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0) rotate(2deg);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0) rotate(-2deg);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0) rotate(2deg);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0) rotate(-2deg);
  }
`;

const Link = styled.a`
  font-family: 'Cookie', cursive;
  font-size: 32px;
  line-height: 1;
  color: #000;
  background-color: #fd0;
  border-radius: 12px;
  padding: 14px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 500ms ease;

  &:hover {
    color: #fff;
    background-color: rgb(255, 95, 95);

    @media (prefers-reduced-motion: no-preference) {
      animation: ${shake} 1000ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }
  }
`;

const Text = styled.span`
  margin-left: 8px;
`;

export default BuyMeCoffee;
