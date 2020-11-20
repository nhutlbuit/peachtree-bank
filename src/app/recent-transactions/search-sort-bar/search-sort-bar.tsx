import React, { useEffect, useLayoutEffect, useState } from 'react';
import './search-sort-bar.scss';
import transactionsHistoryChanel from '../../../chanel/transactions-history.chanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

function SearchSortBar() {

    const [state, setState] = useState<any>();
    const [orderBy, setOrderBy] = useState<string>('all');
    const types = [
        { value: 'asc', label: 'Ascending' },
        { value: 'desc', label: 'Descending ' },
    ];

    useLayoutEffect(() => {
        transactionsHistoryChanel.getTransactionsHistory();
        transactionsHistoryChanel.subscribe(setState);
    }, []);

    useEffect(() => {
       // transactionsHistoryChanel.getTransactionsHistory();
    }, [orderBy]);

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

    const onChangeDate = () => {
        const reverseSortType = orderBy === 'desc' || orderBy === 'all' ? 'asc' : 'desc';
        setOrderBy(reverseSortType);
        sortByDate();
    };

    const sortByDate = (): JSX.Element | undefined => {
        let icon;
        let cssContainer = 'fa-stack';

        if (orderBy === 'asc') {
            icon = <FontAwesomeIcon icon={faCaretUp} />;
            cssContainer = ' asc';
        } else if (orderBy === 'desc') {
            icon = <FontAwesomeIcon icon={faCaretDown} />;
            cssContainer = ' desc';
        } else {
            icon = <> <FontAwesomeIcon icon={faCaretUp} /><FontAwesomeIcon icon={faCaretDown} /> </>;
        }

        return (
            <span className={cssContainer}> {icon} </span>
        );
    };

    return (
        <>
            <div className='search-sort-bar-container'>
                <div className='left'>
                    <input type='text' placeholder='Search by typing...' />
                </div>
                <div className='between'>
                    <label>Sort by</label>
                </div>
                <div className='right'>
                    <a onClick={onChangeDate}>DATE {sortByDate()}</a>
                    <a>BENEFICIARY</a>
                    <a>AMOUNT</a>

                </div>


            </div>
        </>
    );
}

export default SearchSortBar;
