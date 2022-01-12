import axios from 'axios';

export const setLoaded = isLoaded => ({
    type: 'SET_ISLOADED',
    isLoaded
})


export const fetchBooks = (category, sortBy) => dispatch => {
    const address = category === null ? `/books?_sort=${sortBy}&_order=${sortBy === 'rating' ? 'desc' : 'asc'}` : `/books?category=${category}&_sort=${sortBy}&_order=${sortBy === 'rating' ? 'desc' : 'asc'}`
    dispatch(setLoaded(false))
    axios.get(address).then(response =>
        dispatch(setBooks(response.data)))
}

export const setBooks = (books) => ({
    type: 'SET_BOOKS',
    books
})

export const searchBook = (name) => ({
    type: 'SEARCH_BOOK',
    payload: name
})

export const setInput = (value) => ({
    type: 'SET_INPUT',
    payload: value
})
