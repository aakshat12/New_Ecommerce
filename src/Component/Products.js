import React from 'react'
import {useStateValue} from './StateProvider'

function Products( props) {

  const[state,dispatch] = useStateValue();
 
  function addProduct() {
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id: props.id,
        title: props.title,
        image: props.image,
        rating: props.rating,
        price: props.price
      }
    }

    )

  }

 

  return (
    <div className='d-flex flex-column'>
      <h4 >{props.title}</h4>
      <strong>${props.price}</strong>
      <p>
        {Array(props.rating) .fill().map((_,i) =>(
          <span>⭐</span>
        ))}
      </p>
      <div className='d-flex flex-column align-items-center' >
      <img src={`/Assests/${props.image}`} className='w-50 mt-1' alt="PC"  />
      <button onClick={addProduct} className='btn btn-warning w-auto mt-3'>Add Product</button>
      </div>
    </div>

  )
}

export default Products