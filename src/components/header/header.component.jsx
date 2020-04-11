import React from 'react';
import {SearchBox} from '../search-box/search-box.component';
import '../../App.css';


export const Header = ({onSearchChange}) => (
    <div className='item1'>
        <h1>pepperfry</h1>
        <SearchBox onSearchChange={onSearchChange} />
    </div>
);

export const HeaderProd = () => (
    <div className='item1'>
        <h1>pepperfry</h1>
        <SearchBox />
    </div>
);