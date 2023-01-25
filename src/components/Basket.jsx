import React , {useContext} from 'react'
import {ProductsContext} from '../context/products-context'
import { Divider } from '@mui/material'
import {RiDeleteBin2Line} from 'react-icons/ri'

export default function Basket() {
  const addCart = useContext(ProductsContext).toggleAddCart
  const basketProd = useContext(ProductsContext).products.filter(p => p.isAddCart === true)

  return(
    <div>
      {basketProd.length > 0 ?
        basketProd.map( p =>(
          <div key={p.id}>
            <div className='d-flex p-3 ps-4 pe-4' >
              <img className='imgBasket me-3' src={p.src} alt={p.name}/>
              <div>
                <p className='mt-3 me-2'>{p.name}</p>
                <p><b>{p.price} ₺</b></p>
              </div>
              <RiDeleteBin2Line 
                role='button'
                className='m-2 h2'
                onClick={()=>addCart(p.id)}
              />
            </div>
            <Divider/>
          </div>
        ))
        :
        <p className='p-4'>No Flower</p>
      }
    </div>
  )
}