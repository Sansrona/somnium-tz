import React from 'react'
import Button from '../Button';



function Book({ id, name, imageUrl,  price, addbookToCart, bookAmount }) {
  
  const addBookToBasket = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
    }
    addbookToCart(obj)
  }
  return (
    <>
      <div className="book-block">
        <img
          className="book-block__image"
          src={imageUrl}
          alt="book"
        />
        <h4 className="book-block__title">{name}</h4>
        <div className="book-block__bottom">
          <div className="book-block__price">от {price} ₸</div>
          <Button className="button--add" outline onClick={addBookToBasket}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {bookAmount && <i>{bookAmount}</i>}
          </Button>
        </div>
      </div>

    </>
  )
}


export default Book

