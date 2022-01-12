const initialState = {
    items: [],
    isLoaded: false,
    inputValue:''
}


const books = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOOKS':
            return {
                ...state,
                items: action.books,
                isLoaded: true
            }
        case 'SET_ISLOADED':
            return {
                ...state,
                isLoaded: action.isLoaded
            }
        case 'SEARCH_BOOK':
            const book = state.items.filter(book => book.name.split(' ').find(word=> word.toLowerCase() === action.payload));
            return {
                ...state,
                items: book,
                isLoaded: true
            }
        case 'SET_INPUT':
            return{
                ...state,
                inputValue: action.payload
            }
        default: return state;
    }
}

export default books;