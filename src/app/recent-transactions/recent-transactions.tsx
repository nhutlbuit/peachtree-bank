import React from 'react';
import Content from './content/content';
import './recent-transactions.scss';
import SearchSortBar from './search-sort-bar/search-sort-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function RecentTransactions() {

    return (
        <>
            <div className='transactions-container'>
                <div className='title'>
                    <FontAwesomeIcon icon={faBriefcase} size='lg'/>
                     Recent Transactions
                </div>
                <SearchSortBar />
                <div className='table'>
                    <Content />
                </div>
            </div>
        </>
    );
}

export default RecentTransactions;
