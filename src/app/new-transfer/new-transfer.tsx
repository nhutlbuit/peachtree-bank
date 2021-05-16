import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useLayoutEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import { toast } from 'react-toastify';
import transactionsHistoryChanel from '../../chanel/transactions-history.chanel';
import { CONSTANT } from '../../common/constants/CommonConst';
import ConfirmInformation from './model-confirm/model-confirm';
import './new-transfer.scss';

function NewTransfer() {

    const [state, setState] = useState<any>();
    const [accountSelected, setAccountSelected] = useState<any>({value: ''});
    const [amount, setAmount] = useState('');
    const [isConfirm, setConfirm] = useState(false);
    const [checkValid, setCheckValid] = useState<any>({isValidAmount: false, error: ''});

    useLayoutEffect(() => {
        transactionsHistoryChanel.subscribe(setState);
        transactionsHistoryChanel.getMyBankAmount();
    }, []);

    const transfer = () => {
        if (accountSelected.value === '') {
            toast.warning('Please select at least a bank account.');
            return;
        }
        setConfirm(true);
    };

    const handleKeyDown = (event: any): void => {
        if (event.key === 'Enter') {
            transfer();
         }
    };

    const handleTransfer = (): void => {
        transactionsHistoryChanel.transferBalance(Number(amount), accountSelected);
        setAccountSelected({value: ''});
        setAmount('');
        setConfirm(false);
        setCheckValid({checkValid, isValidToAccount: false, isValidAmount: false, error: ''});
    };

    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const amountInput = e.target.value;
        setAmount(amountInput);

        if (isNaN(Number(amountInput))) {
            setCheckValid({...checkValid, isValidAmount: false, error: 'Invalid amount.'});
        } else if (Number(amountInput) < 0) {
            setCheckValid({...checkValid, isValidAmount: false, error: 'Amount can\'t a negative number.'});
        } else if (Number(amountInput) === 0) {
            setCheckValid({...checkValid, isValidAmount: false, error: 'Amount must be greater than 0.'});
        }  else if (Number(amountInput) > state.myBank.amount) {
            setCheckValid({...checkValid, isValidAmount: false, error: 'Amount can\'t greater than total balance.'});
        } else {
            setCheckValid({...checkValid, isValidAmount: true, error: ''});
        }
    };

    const merchantSelected = CONSTANT.MERCHANT.filter(e => e.value === accountSelected.value);

    const onSelectedMerchant = (bankSelected: any): void => {
        setAccountSelected(bankSelected);
    }

    return (
        <>
            <div className='new-transfer-container'>
                <div className='title'>
                    <FontAwesomeIcon icon={faSyncAlt} size='lg'/>
                    Make a Transfer
                </div>
                <div className='body'>
                    <div className='title-line'> FROM ACCOUNT</div>
                    <input className='from-account' type='text' placeholder={`Free Checking 4692 - $${state?.myBank?.amount || 0}`} readOnly/>

                    <div className='title-line'> TO ACCOUNT</div>
                    <div className='merchant'>
                        <Select
                        options={CONSTANT.MERCHANT}
                        value={merchantSelected}
                        onChange={onSelectedMerchant}
                        name='bankName'
                        className='merchant-select' />
                    </div>

                    <div className='title-amount'> AMOUNT</div>
                    <input className='from-account' onChange={handleAmount} value={amount} type='text' autoFocus placeholder='$0.00'
                    onKeyDown={handleKeyDown}/>

                    {checkValid && <span className='required-msg' dangerouslySetInnerHTML= {{__html: checkValid.error}}/>}
                </div>
                <div className='footer'>
                    <Button onClick={transfer} disabled={!checkValid?.isValidAmount}>SUBMIT</Button>
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

