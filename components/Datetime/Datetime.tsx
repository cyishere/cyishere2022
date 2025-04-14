import { color } from '@/styles/helpers';
import { getFormattedDate } from '@/utils/helperts';
import styled from 'styled-components';

type DatetimeProps = {
  createdAt: string;
  updatedAt?: string;
};

const Datetime: React.FC<DatetimeProps> = ({ createdAt, updatedAt }) => {
  const formattedCreatedDate = getFormattedDate(createdAt);

  if (updatedAt) {
    const formattedUpdatedDate = getFormattedDate(updatedAt);

    return (
      <>
        Published on{' '}
        <TheDateTime dateTime={createdAt}>{formattedCreatedDate}</TheDateTime>.
        Last updated on{' '}
        <TheDateTime dateTime={updatedAt}>{formattedUpdatedDate}</TheDateTime>.
      </>
    );
  } else {
    return (
      <>
        Published on{' '}
        <TheDateTime dateTime={createdAt}>{formattedCreatedDate}</TheDateTime>.
      </>
    );
  }
};

export default Datetime;

const TheDateTime = styled.time`
  color: ${color('text.main')};
  font-style: normal;
`;
