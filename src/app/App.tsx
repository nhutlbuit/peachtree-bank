import React from 'react';
import './app.scss';
import RecentTransactions from './recent-transactions/recent-transactions';
import NewTransfer from './new-transfer/new-transfer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CONSTANT } from '../common/constants/CommonConst';
import logo from '../assets/images/logo.jpg';

const App = () => {

    return (
        <>
            <div className='header-container'>
                <img src={logo} />
            </div>
            <div className='body-container'>
                <div className='main-container'>
                    <div className='new-transfer'>
                        <NewTransfer />
                    </div>
                    <div className='recent-transactions'>
                        <RecentTransactions />
                    </div>
                </div>
            </div>
            <ToastContainer
                position='top-right'
                autoClose={CONSTANT.TOAST_TIMEOUT}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default App;
