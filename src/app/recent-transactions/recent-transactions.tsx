import React, { useLayoutEffect, useState } from 'react';
import Item from './item/item';
import './recent-transactions.scss';

function RecentTransactions() {

    return (
        <>
            <div className='transactions-container'>
                <div className='title'>Recent Transactions</div>
                <div className='table'><Item /></div>
            </div>
        </>
    );
}

export default RecentTransactions;
