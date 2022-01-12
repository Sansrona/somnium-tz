import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { searchBook, setInput, fetchBooks } from '../redux/actions/books';

import searchIcon from '../assets/img/search.svg';
import closeIcon from '../assets/img/close.svg';

const Search = () => {
    const { books, input } = useSelector(({ books }) => ({ books: books.items, input: books.inputValue }))
    const [active, setActive] = useState(false);
    const bookRef = useRef('');
    const dispatch = useDispatch();
    const onSearch = () => {
        dispatch(searchBook(input.toLowerCase()));
    }

    const onInputValueChange = (e) => { dispatch(setInput(e.target.value))}
    

    const onClear = () => {
        dispatch(setInput(''));
        setActive(false);
        bookRef.current.value = '';
    }

    console.log(books,input, '1');

    useEffect(() => {
        input && setActive(true);
        !input && setActive(false);
        !input && dispatch(fetchBooks());
    }, [input])

    return (
        <div className='search'>
            <div className="search--input">
                <input type='text' ref={bookRef}  onInput={onInputValueChange} placeholder='Введите название книги' />
                {active && <img className='search--input-closeIcon' onClick={() => onClear()} src={closeIcon} alt='Значок закрыть поиск' />}
            </div>
            <button onClick={onSearch} className='search--button'>
                <img className='search--button-icon' src={searchIcon} alt='Значок поиска' />
            </button>
        </div>
    )
}

export default Search
