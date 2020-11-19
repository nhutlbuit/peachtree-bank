let accounts = [
    {
        id: 1112890, name: 'Kevin.os', partnerId: 'Fred Dan', level: 'Level 2', currency: 'GBP', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Peter Pan', statusAccount: 'pending', license: 'Curacao', credit: false, creditLimit: '',
        address: 'United KingDom', postalCode: '10000', language: 'en', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'us',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0

    },
    {
        id: 1112891, name: 'Rob.os', partnerId: 'Fred Dan', level: 'Level 3', currency: 'VND', email: 'corporate@js.com', status: 'INACTIVE',
        partnerLabelId: 'Peter Pan', statusAccount: 'verified', license: 'Curacao', credit: true, creditLimit: '100',
        address: 'United KingDom', postalCode: '10000', language: 'en', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'vn',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    },
    {
        id: 1112892, name: 'Kenny.os', partnerId: 'Fred Dan', level: 'Level 3', currency: 'USD', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Peter Pan', statusAccount: 'inactive', license: 'Curacao', credit: false, creditLimit: '',
        address: 'United KingDom', postalCode: '10000', language: 'vn', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'uk',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    },
    {
        id: 1112893, name: 'Ali.os', partnerId: 'Fred Dan', level: 'Level 2', currency: 'USD', email: 'corporate@js.com', status: 'INACTIVE',
        partnerLabelId: 'Conan Huynh', statusAccount: 'pending', license: 'Curacao', credit: true, creditLimit: '10000',
        address: 'United KingDom', postalCode: '10000', language: 'fr', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'us',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    },
    {
        id: 1112894, name: 'Nat.os', partnerId: 'Fred Dan', level: 'Level 2', currency: 'VND', email: 'corporate@js.com', status: 'ACTIVE',
        partnerLabelId: 'Conan Huynh', statusAccount: 'verified', license: 'Curacao', credit: false, creditLimit: '',
        address: 'United KingDom', postalCode: '10000', language: 'vn', phoneNumber: '0968868300', mobile: '0968868300',
        userName: 'nat.os', password: '1234qwer', questionnaireReceiptDate: new Date(), approvedDate: new Date(),
        country: 'vn',
        deposits: 'Yes', withdrawals: 'No', casino: 'Yes', sportsbook: 'No', parentId: 0
    }
];

let directors = [
    {
        id: 1112890, name: 'Kevin.os', dateOfBirth: new Date(), countryOfResidence: 'Malta', idType: 'passport', idNumber: '164 465 987',
        partnerLabelId: 'Peter PanNo1', passPort: true, nationalId: true, proofOfAddress: false, certificateOfIncumbency: false,
    },
    {
        id: 1112891, name: 'Rob.os', dateOfBirth: new Date(), countryOfResidence: 'Malta', idType: 'nationalID', idNumber: '165 465 987',
        partnerLabelId: 'Peter Pan1', passPort: true, nationalID: false, proofOfAddress: false, certificateOfIncumbency: false,
    },
    {
        id: 1112892, name: 'Kenny.os', dateOfBirth: new Date(), countryOfResidence: 'Malta', idType: 'proofOfAddress', idNumber: '166 465 987',
        partnerLabelId: 'Peter Pan1', passPort: true, nationalID: false, proofOfAddress: false, certificateOfIncumbency: false,
    },
    {
        id: 1112893, name: 'Ali.os', dateOfBirth: new Date(), countryOfResidence: 'Malta', idType: 'certificateOfIncumbency', idNumber: '167 465 987',
        partnerLabelId: 'Conan Huynh', passPort: true, nationalID: false, proofOfAddress: false, certificateOfIncumbency: false,
    },
    {
        id: 1112894, name: 'nat.os', dateOfBirth: new Date(), countryOfResidence: 'Malta', idType: 'passport', idNumber: '164 465 987',
        partnerLabelId: 'Conan Huynh', passPort: true, nationalID: false, proofOfAddress: false, certificateOfIncumbency: false,
    },

];

const downLines = [
    
    {
        id: 1113301, name: 'Sub 01', level: '2', subGroup:'', currency: 'GBP', status: 'ACTIVE', credit: 'No', creditLimit: 'N/A',
        userName: 'sub01.os', casino: 'YES', sportsBook: 'YES', deposits: 'NO', withdrawals: 'YES'
    },

    {
        id: 1113302, name: 'Sub 02', level: '2', subGroup:'', currency: 'GBP', status: 'ACTIVE', credit: 'No', creditLimit: 'N/A',
        userName: 'sub01.os', casino: 'YES', sportsBook: 'YES', deposits: 'NO', withdrawals: 'YES'
    }
];

export const getAccountListingService = async (account: any) => {

    const getAccounts = (type: String) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let result = accounts;
                switch (type) {
                    case 'id': {
                        result = accounts.filter(e => e.id.toString().includes(account.value));
                        break;
                    }
                    case 'name': {
                        result = accounts.filter(e => e.name?.toUpperCase().includes(account.value?.toUpperCase()));
                        break;
                    }
                    case 'partnerId':
                        result = accounts.filter(e => e.partnerLabelId.toUpperCase().includes(account.value.toUpperCase()));
                        break;
                    default: {
                        break;
                    }
                }
                return resolve(result);
            }, 1000);
        });
    };

    return await getAccounts(account.type);
};

export const getAccountDetailService = async (account: any) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            return resolve(accounts.filter(e => e.id == account.id)[0]);
            // return reject(new Error(''));
        }, 4000);
    });
};

export const createAccountService = async (account: any) => {

    const updateAccountSelected = (accountSelected: any) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let acc = accounts.filter((e: any) => e.id != accountSelected.id);
                if ( acc.length === accounts.length && accountSelected.level === 'Level 3') {
                    acc = acc.map((e: any) => {
                        if (e.id === accountSelected.parentId) {
                            e = {...e , 'parentId': accountSelected.id};
                        }
                        return e;
                    });
                }
                acc.push(accountSelected);
                accounts = acc;
                 return resolve('success');
               // return reject(new Error(''));
            }, 5000);
        });
    };
    return await updateAccountSelected(account);
};

export const updateAccountService = async (account: any) => {

    const updateAccountSelected = (accountSelected: any) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                const acc = accounts.filter((e: any) => e.id != accountSelected.id);
                acc.push(accountSelected);
                accounts = acc;
                 return resolve('success');
               // return reject(new Error(''));
            }, 5000);
        });
    };
    return await updateAccountSelected(account);
};

export const getDirectorsService = async (partnerLabelId: any) => {

    const getDirectorsByPartnerLabelId = (partnerLabelIdSelected: any) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                return resolve(directors.filter(e => e.partnerLabelId == partnerLabelIdSelected));
            }, 5000);
        });
    };

    return getDirectorsByPartnerLabelId(partnerLabelId);
};

export const addDirectorService = async (director: any) => {

    const addDirector = (aDirector: any) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                directors.push(aDirector);
                return resolve('success');
            }, 5000);
        });
    };

    return await addDirector(director);
};

export const updateDirectorService = async (director: any) => {

    const addDirector = (aDirector: any) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                const direc = directors.filter((e: any) => e.id != aDirector.id);
                direc.push(director);
                directors = direc;
               // return resolve('success');
                return reject(new Error(''));
            }, 3000);
        });
    };

    return await addDirector(director);
};

export const deleteDirectorService = async (directorId: number) => {

    const deleteDirectorSelected = (directorIdSelected: number) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                const direc = directors.filter((e: any) => e.id != directorIdSelected);
                directors = direc;
                // return resolve('success');
                return reject(new Error(''));
            }, 5000);
        });
    };
    return await deleteDirectorSelected(directorId);
};
export const getDownLineListing = async (filter: any) => {

    const getDownLines = (filter: any) => {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                let list = downLines.filter(a => matchingConditions(a, filter));
                return resolve({viewAccount: {}, downLines: list});
            }, 1000);
        });
    };

    const matchingConditions  = (account: any, filter: any) => {
       return (!filter.id || account.id.includes(filter.id)) &&
           (!filter.subGroup || account.subGroup.includes(filter.subGroup)) &&
           (!filter.credit || account.credit === filter.credit) &&
           (!filter.status || account.status === filter.status) &&
           (!filter.casino || account.casino === filter.casino) &&
           (!filter.sportsBook || account.sportsBook === filter.sportsBook) &&
           (!filter.deposits || account.deposits === filter.deposits) &&
           (!filter.withdrawals || account.withdrawals === filter.withdrawals)
    }

    return await getDownLines(filter);
};




