
export const CONSTANT = Object.freeze({
    TOAST_TIMEOUT: 5000,
    TIME_RESPONSE_API: 400,
    DEBOUNCE_TIME_SEARCH: 400,
    FORMAT_DATE: 'MMM. dd'
});

export const initialFilter = Object.freeze({
    titles: [
        { name: 'DATE', sortType: 0, isSort: false },
        { name: 'BENEFICIARY', 0: '', isSort: false },
        { name: 'AMOUNT', 0: '', isSort: false }
    ],
    searchName: ''
});

export const transactionsRecent = Object.freeze([{
    'categoryCode': '#12a580',
    'dates': {
        'valueDate': 1600493600000
    },
    'transaction': {
        'amountCurrency': {
            'amount': 5000,
            'currencyCode': 'EUR'
        },
        'type': 'Salaries',
        'creditDebitIndicator': 'CRDT'
    },
    'merchant': {
        'name': 'Backbase',
        'accountNumber': 'SI64397745065188831'
    }
    }, {
        'categoryCode': '#12a580',
        'dates': {
            'valueDate': 1600387200000
        },
        'transaction': {
            'amountCurrency': {
                'amount': '82.02',
                'currencyCode': 'EUR'
            },
            'type': 'Card Payment',
            'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
            'name': 'The Tea Lounge',
            'accountNumber': 'SI64397745065188830'
        }
    }, {
        'categoryCode': '#d51271',
        'dates': {
            'valueDate': 1600214400000
        },
        'transaction': {
            'amountCurrency': {
                'amount': '84.64',
                'currencyCode': 'EUR'
            },
            'type': 'Card Payment',
            'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
            'name': 'Texaco',
            'accountNumber': 'SI64397745065188829'
        }
    }, {
        'categoryCode': '#12a580',
        'dates': {
            'valueDate': 1600300800000
        },
        'transaction': {
            'amountCurrency': {
                'amount': '84.76',
                'currencyCode': 'EUR'
            },
            'type': 'Card Payment',
            'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
            'name': 'The Tea Lounge',
            'accountNumber': 'SI64397745065188828'
        }
    }, {
        'categoryCode': '#c12020',
        'dates': {
            'valueDate': 1600370800000
        },
        'transaction': {
            'amountCurrency': {
                'amount': '22.10',
                'currencyCode': 'EUR'
            },
            'type': 'Online Transfer',
            'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
            'name': 'Amazon Online Store',
            'accountNumber': 'SI64397745065188827'
        }
    }, {
        'categoryCode': '#c89616',
        'dates': {
            'valueDate': 1600214400000
        },
        'transaction': {
            'amountCurrency': {
                'amount': '46.25',
                'currencyCode': 'EUR'
            },
            'type': 'Card Payment',
            'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
            'name': '7-Eleven',
            'accountNumber': 'SI64397745065188826'
        }
    }, {
        'categoryCode': '#e25a2c',
        'dates': {
            'valueDate': 1600041600000
        },
        'transaction': {
            'amountCurrency': {
                'amount': '19.72',
                'currencyCode': 'EUR'
            },
            'type': 'Online Transfer'
        },
        'merchant': {
            'name': 'H&M Online Store',
            'accountNumber': 'SI64397745065188825'
        }
    }, {
        'categoryCode': '#1180aa',
        'dates': {
            'valueDate': 1599868800000
        },
        'transaction': {
            'amountCurrency': {
                'amount': '68.87',
                'currencyCode': 'EUR'
            },
            'type': 'Transaction',
            'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
            'name': 'Jerry Hildreth',
            'accountNumber': 'SI64397745065188824'
        }
    }, {
        'categoryCode': '#1180aa',
        'dates': {
            'valueDate': 1600041600000
        },
        'transaction': {
            'amountCurrency': {
                'amount': '52.36',
                'currencyCode': 'EUR'
            },
            'type': 'Transaction',
            'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
            'name': 'Lawrence Pearson',
            'accountNumber': 'SI64397745065188823'
        }
    }, {
        'categoryCode': '#12a580',
        'dates': {
            'valueDate': 1599955200000
        },
        'transaction': {
            'amountCurrency': {
                'amount': '75.93',
                'currencyCode': 'EUR'
            },
            'type': 'Card Payment',
            'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
            'name': 'Whole Foods',
            'accountNumber': 'SI64397745065188822'
        }
    }, {
        'categoryCode': '#fbbb1b',
        'dates': {
            'valueDate': 1599868800000
        },
        'transaction': {
            'amountCurrency': {
                'amount': '142.95',
                'currencyCode': 'EUR'
            },
            'type': 'Online Transfer',
            'creditDebitIndicator': 'DBIT'
        },
        'merchant': {
            'name': 'Southern Electric Company',
            'accountNumber': 'SI64397745065188821'
        }
    }
]);

export const myBankInfo = Object.freeze({account: 'Free Checking 4692', amount: 5824.76});
