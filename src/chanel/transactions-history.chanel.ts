import { initialFilter } from './../common/constants/CommonConst';
import { getMyBankAmountService,
  getTransactionsHistoryService,
  transferBalanceService,
  checkAccountExistedBeneficiaryListService
} from '../services/getAccount.service';

import { BehaviorSubject, from, Subject } from 'rxjs';
import { toast } from 'react-toastify';


const initialState = {
  transactionsHistory: [],
  myBank: {},
  accountExisted: {initial: true}
};

let state = initialState;
const subject = new BehaviorSubject(initialState);

const transactionsHistoryChanel = {
  subscribe: (setState: any) => subject.subscribe(setState),

  getTransactionsHistory: (filter?: any) => {
    if (!filter) {
      filter = initialFilter;
    }

    from(getTransactionsHistoryService(filter)).subscribe((e: any) => {
      state = {
        ...state,
        transactionsHistory: e
      };
      subject.next(state);
    });
  },

  getMyBankAmount: () => {
    from(getMyBankAmountService()).subscribe((myBank: any) => {
      state = {
        ...state,
        myBank: myBank
      };
      subject.next(state);
    });
  },

  transferBalance: (amount: number, account: any) => {
    from(transferBalanceService(amount, account)).subscribe((result: any) => {
        state = {
          ...state,
          transactionsHistory: result.transactionsHistory,
          myBank: result.myBank
        };
        subject.next(state);
        toast.success(`Transfer to account ${account.value} successfully!`);
    }, () => {
        toast.error('Transfer failed. Please contact admin!');
    });
  },

  checkAccountExistedBeneficiaryList: (nameInput: string) => {
    from(checkAccountExistedBeneficiaryListService(nameInput)).subscribe((result: any) => {
      state = {
        ...state,
        accountExisted: result
      };
      subject.next(state);
    });
  },

};

export default transactionsHistoryChanel;
