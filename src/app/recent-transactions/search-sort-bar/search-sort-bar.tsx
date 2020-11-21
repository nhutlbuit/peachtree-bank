import React, { useEffect, useRef, useState } from 'react';
import './search-sort-bar.scss';
import transactionsHistoryChanel from '../../../chanel/transactions-history.chanel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { SortOrder } from '../../../common/enums/SortTypeEnum';
import { CONSTANT, initialFilter } from '../../../common/constants/CommonConst';


function SearchSortBar() {

    const [filter, setFilter] = useState(initialFilter);
    const [searchValue, setSearchValue] = useState('');
    const typingTimeOutRef = useRef<any>(null);

    const onSearchValueChange = (e: any) => {
        const valueTemp = e.target.value;
        setSearchValue(e.target.value);

        if (typingTimeOutRef.current) {
            clearTimeout(typingTimeOutRef?.current);
        }

        typingTimeOutRef.current = setTimeout(() => {
            setFilter({ ...filter, searchName: valueTemp });
        }, CONSTANT.DEBOUNCE_TIME_SEARCH);
    };

    useEffect(() => {
        transactionsHistoryChanel.getTransactionsHistory(filter);
    }, [filter]);

    const onSort = (title: any) => {
        const reverseSortType = title.sortType === SortOrder.DESC || title.sortType === SortOrder.DEFAULT ? SortOrder.ASC : SortOrder.DESC;
        const newTitle: any = filter.titles.map((el: any) => {
            if (el.name === title.name) {
                el.isSort = true;
                el.sortType = reverseSortType;
            } else {
                el.isSort = false;
                el.sortType = SortOrder.DEFAULT;
            }
            return el;
        });

        setFilter({ ...filter, titles: newTitle });
    };

    const sortIcon = (e: any): JSX.Element | undefined => {
        let icon;
        let cssContainer = 'fa-stack ';

        if (e.sortType === SortOrder.ASC) {
            icon = <FontAwesomeIcon icon={faCaretUp} />;
            cssContainer = 'asc';

        } else if (e.sortType === SortOrder.DESC) {
            icon = <FontAwesomeIcon icon={faCaretDown} />;
            cssContainer = 'desc';

        } else {
            icon = (
                <>
                    <FontAwesomeIcon icon={faCaretUp} />
                    <FontAwesomeIcon icon={faCaretDown} />
                </>
            );
        }

        return (
            <span className={cssContainer}> {icon} </span>
        );
    };

    const clearFilter = () => {
        setSearchValue('')
        setFilter({...filter, searchName: ''});
    };

    return (
        <div className='search-sort-bar-container'>
            <div className='left'>
                <input type='text' value={searchValue} onChange={onSearchValueChange} placeholder='Search by typing...' />
                {searchValue.length > 0 && <a onClick={clearFilter}>x</a>}
            </div>
            <div className='between'>
                <label>Sort by</label>
            </div>
            <div className='right'>
                {filter?.titles?.map((title: any) => (
                    <a key={title.name} onClick={() => onSort(title)}> {title.name} {sortIcon(title)} </a>
                ))}
            </div>
        </div>
    );
}

export default SearchSortBar;
