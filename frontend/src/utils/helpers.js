import Moment from 'moment';

export const readableDate = (timestamp) => {
  return new Moment(timestamp).startOf('hour').fromNow()
}
