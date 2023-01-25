import React,{useContext} from 'react'
import {ProductsContext} from '../context/products-context'
import { useTheme } from '@mui/material'

import { Button, ColumnsContainer, Container, Title } from '../styles'
import { CartContainer, CartStyle } from '../styles/Cart'
import Cart from './Cart'

const New = ({title}) => {

    const theme = useTheme()
    const {products} = useContext(ProductsContext)
    const showProducts = products.slice(0,6)

  return (
    <section>
        <ColumnsContainer>
            <Container>
                <Title>{title}</Title>
                <CartContainer>
                    {showProducts.map(item => 
                        <CartStyle key = {item.id}>
                            <Cart img = 'imgHome' item = {item}  />
                        </CartStyle>
                    )}
                </CartContainer>
                <Button className='d-block mx-auto'>Show more</Button>
            </Container>
        </ColumnsContainer>
    </section>
  )
}

export default New