import React from 'react';
import './app.scss';
import RecentTransactions from './recent-transactions/recent-transactions';
import NewTransfer from './new-transfer/new-transfer';

const App = () => {

    return (
        <>
            <div className='main-container'>
                <div className='new-transfer'>
                    <NewTransfer />
                </div>
                <div className='recent-transactions'>
                    <RecentTransactions />
                </div>
            </div>
        </>
    );
};

export default App;
