import React, { useLayoutEffect, useState } from 'react';
import './item.scss';
import { format } from 'date-fns';
import transactionsHistoryChanel from '../../../chanel/transactions-history.chanel';

function Item() {

    const [state, setState] = useState();

    useLayoutEffect(() => {
        transactionsHistoryChanel.getTransactionsHistory();
        transactionsHistoryChanel.subscribe(setState);
      }, []);

    const getImageName1 = async (column: any): Promise<string> => {
        const merchantName = column?.merchant?.name.toLowerCase().split(' ').join('-');
        const imageObj = await import(`../../../assets/icons/${merchantName}.png`);
        const imageName = imageObj.default;
        return imageName;
    };

    const getImageName = (column: any): string => {
        const merchantName = column?.merchant?.name.toLowerCase().split(' ').join('-');
        return `../images/${merchantName}.png`;
    };

    return (
        <>
            <table>
                <tbody>
                    {state?.transactionsHistory?.map((column: any, key: number) => (
                        <tr key={key}>
                            <td style={{ backgroundColor: column?.categoryCode, border: column?.categoryCode, borderStyle: 'solid' }} />
                            <td style={{ textAlign: 'center' }}>{format(new Date(column?.dates?.valueDate), 'MMM. dd')}</td>
                            <td ><img src={getImageName(column)} /></td>
                            <td>
                                <div style={{ fontWeight: 'bold' }}> {column?.merchant?.name}</div>
                                <div> {column?.transaction?.type}</div>
                            </td>
                    <td style={{ fontWeight: 'bold', fontSize: '13pt' }}>{column?.transaction?.creditDebitIndicator === 'DBIT' ? '+' : '-'}${column?.transaction?.amountCurrency?.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Item;
