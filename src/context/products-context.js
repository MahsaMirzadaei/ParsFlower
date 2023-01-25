import { createContext } from "react";
import { useState } from "react";
import new1 from '../img/new/post173.png'
import new2 from '../img/new/post184.png'
import new3 from '../img/new/post197.png'
import new4 from '../img/new/post181.png'
import new5 from '../img/new/post187.png'
import new6 from '../img/new/post196.png'

export const ProductsContext = createContext(
    {
        products : [],
        toggleAddCart : (id) => {}
    }
)

export default props => {
    const [productsList, setProductsList] = useState([
        {
            id:1,
            name: 'Bouquet1',
            category: 'mono',
            price: 122,
            src: new1,
            number: 1,
            isAddCart: false
        },
        {
            id:2,
            name: 'Bouquet2',
            category: 'salon',
            price: 68,
            src: new2,
            number: 1,
            isAddCart: false
        },
        {
            id:3,
            name: 'Bouquet3',
            category: 'mono',
            price: 1156.5,
            src: new3,
            number: 1,
            isAddCart: false
        },
        {
            id:4,
            name: 'Bouquet4',
            category: 'salon',
            price: 266.2,
            src: new4,
            number: 1,
            isAddCart: false
        },
        {
            id:5,
            name: 'Bouquet5',
            category: 'mono',
            price: 63,
            src: new5,
            number: 1,
            isAddCart: false
        },
        {
            id:6,
            name: 'Bouquet6',
            category: 'noruz',
            price: 3355,
            src: new6,
            number: 1,
            isAddCart: false
        },
        {
            id:7,
            name: 'Bouquet1',
            category: 'mono',
            price: 68,
            src: new1,
            number: 1,
            isAddCart: false
        },
        {
            id:8,
            name: 'Bouquet2',
            category: 'salon',
            price: 68,
            src: new2,
            number: 1,
            isAddCart: false
        },
        {
            id:9,
            name: 'Bouquet3',
            category: 'mono',
            price: 1156.5,
            src: new3,
            number: 1,
            isAddCart: false
        },
        {
            id:10,
            name: 'Bouquet4',
            category: 'salon',
            price: 266.2,
            src: new4,
            number: 1,
            isAddCart: false
        },
        {
            id:11,
            name: 'Bouquet5',
            category: 'mono',
            price: 63,
            src: new5,
            number: 1,
            isAddCart: false
        },
        {
            id:12,
            name: 'Bouquet6',
            category: 'noruz',
            price: 3355,
            src: new6,
            number: 1,
            isAddCart: false
        }
    ])

    const toggleAddToCart = productId => {
        setProductsList(currentProdList => {
          const prodIndex = currentProdList.findIndex(p => p.id === productId);
          const newCartStatus = !currentProdList[prodIndex].isAddCart;
          const updatedProducts = [...currentProdList];
          updatedProducts[prodIndex] = {
            ...currentProdList[prodIndex],
            isAddCart: newCartStatus
        };
          return updatedProducts;
        });
    };

    return(
        <ProductsContext.Provider value={
            {
                products: productsList , 
                toggleAddCart: toggleAddToCart ,
            }
        }>
            {props.children}
        </ProductsContext.Provider>
    )
}