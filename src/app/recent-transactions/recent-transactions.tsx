import React, { useLayoutEffect, useState } from 'react';
import Item from './item/item';
import './recent-transactions.scss';
import SearchSortBar from './search-sort-bar/search-sort-bar';

function RecentTransactions() {

    return (
        <>
            <div className='transactions-container'>
                <div className='title'>Recent Transactions</div>
                <div className=''>
                    <SearchSortBar />
                </div>
                <div className='table'>
                    <Item />
                </div>
            </div>
        </>
    );
}

export default RecentTransactions;
