import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import transactionsHistoryChanel from '../../chanel/transactions-history.chanel';
import ConfirmInformation from './model-confirm/model-confirm';
import './new-transfer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { CONSTANT } from '../../common/constants/CommonConst';


function NewTransfer() {

    const [state, setState] = useState<any>();
    const [accountName, setAccountName] = useState<string>('');
    const [accountSelected, setAccountSelected] = useState<any>();
    const [amount, setAmount] = useState('');
    const [isConfirm, setConfirm] = useState(false);
    const [checkValid, setCheckValid] = useState<any>({isValidToAccount: false, isValidAmount: false, error: ''});
    const typingTimeOutRef = useRef<any>(null);

    useLayoutEffect(() => {
        transactionsHistoryChanel.subscribe(setState);
        transactionsHistoryChanel.getMyBankAmount();
    }, []);

    const transfer = () => {
        setConfirm(true);
    };

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            transfer();
         }
    };

    useEffect(() => {
        if (state?.accountExisted && !state?.accountExisted?.initial) {
            if (state?.accountExisted && Object.keys(state?.accountExisted).length > 0) {
                setCheckValid({...checkValid, isValidToAccount: true, error: ''});
                setAccountSelected(state?.accountExisted);
            } else {
                setCheckValid({...checkValid, isValidToAccount: false, error: 'Account is not existed in Beneficiary list.'});
            }
        }
    }, [state]);

    const onChangeAccountName = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.value;
        setAccountName(name);

        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef?.current);
        }

        typingTimeOutRef.current = setTimeout(() => {
            if (name !== '') {
                transactionsHistoryChanel.checkAccountExistedBeneficiaryList(name);
            } else {
                setCheckValid({...checkValid, isValidToAccount: false, error: ''});
            }
        }, CONSTANT.DEBOUNCE_TIME_SEARCH);
    };

    const handleTransfer = () => {
        transactionsHistoryChanel.transferBalance(Number(amount), accountSelected);
        setAccountName('');
        setAmount('');
        setConfirm(false);
        setCheckValid({checkValid, isValidToAccount: false, isValidAmount: false, error: ''});
    };

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amountInput = e.target.value;
        setAmount(amountInput);

        if (isNaN(Number(amountInput))) {
            setCheckValid({...checkValid, isValidAmount: false, error: 'Invalid amount.'});
        } else if (Number(amountInput) > state.myBank.amount) {
            setCheckValid({...checkValid, isValidAmount: false, error: 'Amount can\'t greater than total balance.'});
        } else {
            setCheckValid({...checkValid, isValidAmount: true, error: ''});
        }
    };

    return (
        <>
            <div className='new-transfer-container'>
                <div className='title'>
                    <FontAwesomeIcon icon={faSyncAlt} size='lg'/>
                    Make a Transfer
                </div>
                <div className='body'>
                    <div> FROM ACCOUNT</div>
                    <input type='text' placeholder={`Free Checking 4692 - $${state?.myBank?.amount || 0}`} readOnly/>

                    <div> TO ACCOUNT</div>
                    <input onChange={onChangeAccountName} value={accountName} type='text' placeholder='Georgia Power Electric Company'/>

                    <div> AMOUNT</div>
                    <input onChange={handleAmount} value={amount} type='text' autoFocus placeholder='$0.00' disabled={!checkValid?.isValidToAccount}
                    onKeyDown={handleKeyDown}/>

                    {checkValid && <span className='required-msg' dangerouslySetInnerHTML= {{__html: checkValid.error}}/>}
                </div>
                <div className='footer'>
                    <Button onClick={transfer} disabled={!(checkValid?.isValidToAccount && checkValid?.isValidAmount)}>SUBMIT</Button>
                </div>
            </div>

            { isConfirm &&
                <ConfirmInformation
                    onNo={() => setConfirm(false)}
                    onYes={handleTransfer}
                    title={ 'Confirm Information!'}
                    accountSelected= {accountSelected}
                    amount = {amount}
                    myBank = {state?.myBank}
                />
            }
        </>
    );
}

export default NewTransfer;

