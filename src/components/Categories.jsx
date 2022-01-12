import React from 'react'

const Categories = React.memo(function Categories({items,onClickItem,categoryIndex}) {
  
  const onSelectItem = (category) =>{
    onClickItem(category);
  }
  
  return (
      <div className="categories">
            <ul>
              <li className={categoryIndex===null && 'active'} onClick={()=>onSelectItem(null)}>Все</li>
              {items && items.map((name, i)=>
                  <li className={categoryIndex===i ? 'active' : ''} onClick={()=>onSelectItem(i)} key={`${name}_${i}`}>{name}</li>
              )}                
            </ul>
          </div>
  )
})

export default Categories
