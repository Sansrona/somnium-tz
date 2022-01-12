 export const addBookToCart = (obj) => ({
    type:'ADD_BOOKS',
    obj
}) 

export const clearBasket = () => ({
    type:'CLEAR_BASKET',
}) 

export const removeCartBook = (id) => ({
    type:'REMOVE_CART_ITEM',
    id
})


export const plusCartBook = (id) => ({
    type:'PLUS_CART_ITEM',
    id
})


export const minusCartBook = (id) => ({
    type:'MINUS_CART_ITEM',
    id
})