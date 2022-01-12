const initialState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
};

    const getTotalPrice = arr => arr.reduce((cur, acc) => acc.price + cur, 0);


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOKS': {
            const currentBook = !state.items[action.obj.id] ? [action.obj] : [
                ...state.items[action.obj.id].items,
                action.obj
            ];
            const newItems = {
                ...state.items,
                [action.obj.id]: {
                    items: currentBook,
                    totalPrice: getTotalPrice(currentBook)
                }
            }
            const allBooks = Object.values(newItems).map(obj => obj.items).flat();
            return {
                ...state,
                items: newItems,
                totalPrice: getTotalPrice(allBooks),
                totalCount: allBooks.length
            }
        }
        case 'CLEAR_BASKET': {
            return {
                items: {},
                totalCount: 0,
                totalPrice: 0
            }
        }
        case 'REMOVE_CART_ITEM': {
            const newCart = {
                ...state.items
            }
            const currentPrice = newCart[action.id].totalPrice;
            const currentCount = newCart[action.id].items.length
            delete newCart[action.id];
            return {
                ...state,
                items: newCart,
                totalPrice: state.totalPrice - currentPrice,
                totalCount: state.totalCount - currentCount
            }
        }
        case 'PLUS_CART_ITEM': {
            const newCart =  [...state.items[action.id].items, state.items[action.id].items[0]];
            const newItems = {
                    ...state.items,
                    [action.id]:{
                        items:newCart,
                        totalPrice:getTotalPrice(newCart)
                    } 
                }
            const allStar = Object.values(newItems).map(obj=>obj.items).flat()
            return {
                ...state,
                items: newItems,
                totalPrice: getTotalPrice(allStar),
                totalCount: allStar.length
            }
        }

        case 'MINUS_CART_ITEM': {
            const oldItem = state.items[action.id].items;
            const newObjItems = oldItem.length > 1 ? oldItem.slice(1) : oldItem;
            const newItems = {
                    ...state.items,
                    [action.id]:{
                        items:newObjItems,
                        totalPrice:getTotalPrice(newObjItems)
                    } 
                }
            const allStar = Object.values(newItems).map(obj=>obj.items).flat()
            return {
                ...state,
                items: newItems,
                totalPrice: getTotalPrice(allStar),
                totalCount: allStar.length
            }
        }
        default:
            return state;
    }
}

export default cartReducer;