import { myBankInfo, transactionsRecent, CONSTANT, initialFilter } from './../common/constants/CommonConst';
import { SortOrder } from '../common/enums/SortTypeEnum';

const myBank = JSON.parse(JSON.stringify(myBankInfo));
const transactionsHistoryOrigin = JSON.parse(JSON.stringify(transactionsRecent));
const transactionsHistory = JSON.parse(JSON.stringify(transactionsRecent));

export const getMyBankAmountService = async (): Promise<object> => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            return resolve(myBank);
        }, CONSTANT.TIME_RESPONSE_API);
    });
};

export const transferBalanceService = async (amount: number, account: any) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            myBank.amount -= amount;
            let newTransaction: any = {};
            transactionsHistory.forEach((e: any) => {
                if (e.merchant.accountNumber === account.merchant.accountNumber) {
                    newTransaction = JSON.parse(JSON.stringify(e));
                    newTransaction.transaction.amountCurrency.amount = amount;
                    newTransaction.dates.valueDate = (new Date()).getTime();
                }
            });
            transactionsHistory.unshift(newTransaction);
            return resolve({myBank: myBank, transactionsHistory: transactionsHistory});
        }, CONSTANT.TIME_RESPONSE_API);
    });
};

export const checkAccountExistedBeneficiaryListService = async (name: string) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            let accountInput: any = {};
            transactionsHistoryOrigin.map((e: any) => {
                if (e.merchant.name === name) {
                    accountInput = e;
                }
            });
            return resolve(accountInput);
        }, CONSTANT.TIME_RESPONSE_API);
    });
};

export const getTransactionsHistoryService = async (filter: any) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {

            let result: any = transactionsHistory;
            if (filter?.searchName) {
                result = transactionsHistory.filter((e: any) =>
                    (e.merchant.name.toUpperCase().includes(filter.searchName.toUpperCase())
                    || e.transaction.type.toUpperCase().includes(filter.searchName.toUpperCase())));
            }

            filter?.titles?.forEach((title: any) => {
                if (title.isSort) {
                    result.sort(((a: any, b: any) =>  {
                        if (title.sortType === SortOrder.ASC) {
                            let sortBy = null;

                            if (title.name === initialFilter.titles[0].name) {
                                sortBy = a.dates.valueDate - b.dates.valueDate;

                            } else if (title.name === initialFilter.titles[1].name) {
                                sortBy = a.merchant.name.localeCompare(b.merchant.name);

                            } else if (title.name === initialFilter.titles[2].name) {
                                sortBy = a.transaction.amountCurrency.amount - b.transaction.amountCurrency.amount;
                            }
                            return sortBy;

                        } else if (title.sortType === SortOrder.DESC) {
                            let sortBy = null;

                            if (title.name === initialFilter.titles[0].name) {
                                sortBy = b.dates.valueDate - a.dates.valueDate;

                            } else if (title.name === initialFilter.titles[1].name) {
                                sortBy = b.merchant.name.localeCompare(a.merchant.name);

                            } else if (title.name === initialFilter.titles[2].name) {
                                sortBy = b.transaction.amountCurrency.amount - a.transaction.amountCurrency.amount;
                            }
                            return sortBy;
                        }
                    }));
                }
            });
            return resolve(result);
            // return reject(new Error(''));
        }, CONSTANT.TIME_RESPONSE_API);
    });
};





