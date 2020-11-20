import React, { useLayoutEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import transactionsHistoryChanel from '../../chanel/transactions-history.chanel';
import ConfirmInformation from '../shared/model-confirm/model-confirm';
import './new-transfer.scss';


function NewTransfer() {

    const [state, setState] = useState<any>();
    const [accountName, setAccountName] = useState<string>('');
    const [accountSelected, setAccountSelected] = useState<any>();
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const [isConfirm, setConfirm] = useState(false);


    useLayoutEffect(() => {
        transactionsHistoryChanel.subscribe(setState);
        transactionsHistoryChanel.getMyBankAmount();
    }, []);

    const transfer = () => {
        setConfirm(true);
    };

    const onChangeAccountName = (event: any) => {
        const name = event.target.value;
        state?.transactionsHistory.map((e: any) => {
            if (e.merchant.name === name) {
                setAccountNumber(e.merchant.accountNumber);
                setAccountSelected(e);
            }
        });
        setAccountName(name);
    };

    const handleTransfer = () => {
        transactionsHistoryChanel.transferBalance(Number(amount), accountNumber);
        setAccountName('');
        setAmount('');
        setConfirm(false);
    };

    return (
        <>
            <div className='new-transfer-container'>
                <div className='title'>
                    Make a Transfer
                </div>
                <div className='body'>
                    <div> FROM ACCOUNT</div>
                    <input type='text' placeholder={`Free Checking 4692 - $${state?.bankAmount || 0}`} readOnly/>

                    <div> TO ACCOUNT</div>
                    <input onChange={onChangeAccountName} value={accountName} type='text' placeholder='Georgia Power Electric Company'/>

                    <div> AMOUNT</div>
                    <input onChange={(e) => setAmount(e.target.value)} value={amount} type='text' placeholder='$0.00'/>
                </div>
                <div className='footer'>
                    <Button onClick={transfer}>SUBMIT</Button>
                </div>
            </div>

            { isConfirm &&
                    <ConfirmInformation
                        onNo={() => setConfirm(false)}
                        onYes={handleTransfer}
                        title={ 'Confirm Information!'}
                        accountSelected= {accountSelected}
                        amount = {amount}
                        bankAmount = {state?.bankAmount}
                    />
                }

        </>
    );
}

export default NewTransfer;

