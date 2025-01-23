import { differenceInDays } from 'date-fns';

const convertDate = (lastMessageDate: String) => {
  const today = new Date();
  const messageDate = new Date(lastMessageDate as string);
  const timeDiff = differenceInDays(today, messageDate);
  if (timeDiff === 0) {
    return '방금전';
  } else if (timeDiff === 1) {
    return '1일전';
  } else if (timeDiff === 2) {
    return '2일전';
  } else if (timeDiff === 3) {
    return '3일전';
  } else {
    return lastMessageDate;
  }
};

export { convertDate };
