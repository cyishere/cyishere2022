import styled from 'styled-components';

interface MaxWidthWrapperProps {
  className?: string;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <Wrapper className={className} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1100px;
  padding-left: 32px;
  padding-right: 32px;
  margin-left: auto;
  margin-right: auto;
`;

export default MaxWidthWrapper;
