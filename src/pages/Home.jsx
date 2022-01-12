import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  Categories, SortPopup, Book } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filter';
import { fetchBooks } from '../redux/actions/books';
import {BookLoadingBlock} from '../components/index'
import { addBookToCart } from '../redux/actions/cart';



const categoryNames = ["Комедии","Биографии",  "Драмы",  "Ужасы",  "Романтика"]
const sortItems = [
              {name:"популярности",type:'rating'},
              {name:"цене",type:'price'},
              {name:"алфавиту",type:'name'}]

function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector(({cart})=>cart.items)
  const {books,isLoaded} = useSelector(({books})=>({books:books.items, isLoaded:books.isLoaded}))
  const {sortBy, category} = useSelector(({filter})=>filter);
  const onSelectCategory = (catIndex) =>{
    dispatch(setCategory(catIndex));
  }
  const onSelectSortBy = (sortByType) =>{
    dispatch(setSortBy(sortByType));
  }

  const addbook = (obj) => {    
    dispatch(addBookToCart(obj));
  }

  React.useEffect(() => {
    dispatch(fetchBooks(category, sortBy))
  }, [category,sortBy])
    return (
        <div className="container">
          <div className="content__top">
            <Categories onClickItem={onSelectCategory} items={categoryNames} categoryIndex={category} />
            <SortPopup items={sortItems} sortBy={sortBy} onSortBy={onSelectSortBy}/>
          </div>
          <h2 className="content__title">Все книги</h2>
          <div className="content__items">
          {isLoaded && books ? (books.map(book=>(
             <Book key={book.id} {...book} addbookToCart={addbook} bookAmount = {cartItems[book.id] && cartItems[book.id].items.length} />
          ))):
            (Array(10).fill(0).map((_,index)=>(<BookLoadingBlock key={index} />)))
          }
            
          </div>
        </div>
    )
}

export default Home
