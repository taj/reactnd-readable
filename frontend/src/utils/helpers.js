import Moment from 'moment';

export const readableDate = (timestamp) => {
  return new Moment(timestamp).startOf('hour').fromNow()
}

export const isEmptyObject = (obj) => {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}