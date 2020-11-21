import React, { useLayoutEffect, useState } from 'react';
import './content.scss';
import { format } from 'date-fns';
import transactionsHistoryChanel from '../../../chanel/transactions-history.chanel';
import { CONSTANT } from '../../../common/constants/CommonConst';

function Content() {

    const [state, setState] = useState<any>();

    useLayoutEffect(() => {
        transactionsHistoryChanel.getTransactionsHistory();
        transactionsHistoryChanel.subscribe(setState);
      }, []);

    const getImageName = (column: any): string => {
        const merchantName = column?.merchant?.name.toLowerCase().split(' ').join('-');
        return `assets/images/icons/${merchantName}.png`;
    };

    return (
        <>
            <table>
                <tbody>
                    {state?.transactionsHistory?.map((column: any, key: number) => (
                        <tr key={key}>
                            <td className='category' style={{ backgroundColor: column?.categoryCode, border: column?.categoryCode }} />
                            <td className='transfer-date'>{format(new Date(column?.dates?.valueDate), CONSTANT.FORMAT_DATE)}</td>
                            <td ><img src={getImageName(column)} /></td>
                            <td>
                                <div className='beneficiary'> {column?.merchant?.name}</div>
                                <div> {column?.transaction?.type}</div>
                            </td>
                            <td className='amount'>-${column?.transaction?.amountCurrency?.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Content;
