import { getMyBankAmountService, getTransactionsHistoryService, transferBalanceService } from '../services/getAccount.service';

import { from, Subject } from 'rxjs';

const subject = new Subject();
const initialState = {
  transactionsHistory: [],
  bankAmount: 0
};

let state = initialState;

const transactionsHistoryChanel = {
  subscribe: (setState: any) => subject.subscribe(setState),
  getTransactionsHistory: () => {
    from(getTransactionsHistoryService()).subscribe((e: any) => {
      state = {
        ...state,
        transactionsHistory: e
      };
      subject.next(state);
    });
  },
  getMyBankAmount: () => {
    from(getMyBankAmountService()).subscribe((amount: number) => {
      state = {
        ...state,
        bankAmount: amount
      };
      subject.next(state);
    });
  },
  transferBalance: (amount: number, accountNumber: string) => {
    from(transferBalanceService(amount, accountNumber)).subscribe((result: any) => {
        state = {
          ...state,
          transactionsHistory: result.transactionsHistory,
          bankAmount: result.myBankAmount
        };
        subject.next(state);
    });
  }
};

export default transactionsHistoryChanel;
