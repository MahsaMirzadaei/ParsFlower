import React,{useContext, useState} from 'react'
import {ProductsContext} from '../context/products-context'
import {IoBagAdd} from 'react-icons/io5'
import {RiDeleteBin2Line} from 'react-icons/ri'


const Cart = (props) => {
    const addCart = useContext(ProductsContext).toggleAddCart
    
    const addToCart = (id) =>{
        addCart(id)
    }
  return (
    <div className='m-3'>
        <img className={props.img} src={props.item.src} alt={`new${props.item.id}`} />
        <div className='more-info'>
            <p><b>{props.item.price} ₺</b></p>
            <p>{props.item.name}</p>
            
            <div role="button"
                className={`${props.item.isAddCart ? 'added':'notAdded'} h1`}
                onClick={()=>addToCart(props.item.id)}>
                    {props.item.isAddCart? <RiDeleteBin2Line/>:<IoBagAdd/> }
                
            </div>
        </div>
        <div className='end-line'></div> 
    </div>
  )
}

export default Cart