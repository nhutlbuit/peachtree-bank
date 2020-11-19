import { getTransactionsHistoryService } from './../services/getAccount.service';

import { Subject } from 'rxjs';

const subject = new Subject();
const initialState = {
  transactionsHistory: [],
};

let state = initialState;

const shareChanel = {
  subscribe: (setState: any) => subject.subscribe(setState),
  sendMessage: () => {
    getTransactionsHistoryService().then((e: any) => {
      state = {
        ...state,
        transactionsHistory: e
      };
      subject.next(state);
    });
  },

  initialState
};

export default shareChanel;
