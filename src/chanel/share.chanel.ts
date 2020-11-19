
import { Subject } from 'rxjs';

const subject = new Subject();
const initialState = {
  message: '',
};

let state = initialState;

const shareChanel = {
  subscribe: (setState: any) => subject.subscribe(setState),
  sendMessage: (message: any) => {
    state = {
      ...state,
      message: message
    };
    subject.next(state);
  },

  initialState
};

export default shareChanel;
