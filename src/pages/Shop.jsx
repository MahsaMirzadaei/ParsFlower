import React,{useContext, useEffect, useState} from 'react'
import {ProductsContext} from '../context/products-context'
import { useTheme } from '@mui/system'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import Pagination from '../components/Pagination';
import { CartStyle } from '../styles/Cart';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const Shop = () => {
  const theme = useTheme()
  const {products} = useContext(ProductsContext)

  const minDistance = 100;
  const [price, setPrice] = React.useState([50, 5000]);

    
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [filteredPro, setFilteredPro] = useState([]);

    // Get current posts
    const indexOfLastProducts = currentPage * productsPerPage;
    const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts);
   

  const filterItem = (curcat) => {
    const newItem = currentProducts.filter((newVal) => {
      return newVal.category === curcat && newVal.price > price[0] && newVal.price < price[1];
    });
    setFilteredPro(newItem);
  };

  const priceItem = () => {
    const newItem = currentProducts.filter((newVal) => {
      return newVal.price > price[0] && newVal.price < price[1];
    });
    setFilteredPro(newItem);
  };

  const filterAll = () => {
    priceItem()
    const newItem = currentProducts.filter((newVal) => {
      return newVal.price > price[0] && newVal.price < price[1];
    });
    setFilteredPro(newItem);
  };
  
  const handleChange1 = (event, newValue, activeThumb) => {
    priceItem()
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }
  };
 
    useEffect(()=>{
      setFilteredPro(currentProducts)
    },[products])
  
    // Change page
    const paginate = pageNumber => {
      setCurrentPage(pageNumber)
      setFilteredPro(currentProducts)
    }

  return (
    <>
    <Navbar fixBg = {theme.yellow} stickBg = {theme.yellow} />
    <div style={{margin: '150px 50px'}}>

      <div className='d-flex justify-content-between' style={{width: "65%"}}>
        <div>Showing 1–12 of 38 results</div>
        <div>Default sorting</div>
      </div>

      <div className="d-flex justify-content-center" >

        <div className='d-flex justify-content-center flex-wrap' style={{width: "75%"}}>
          {filteredPro.map(item => 
            <CartStyle key = {item.id}>
              <Cart img = 'imgShop' item = {item}  />
            </CartStyle>
          )}
        </div>

        <div style={{width: "25%",paddingLeft: "20px"}}>
          <h3>Price</h3>
          <Box sx={{ width: 200 }}>
              <Slider
                  min = {50}
                  max = {5000}
                  getAriaLabel={() => 'Minimum distance'}
                  value={price}
                  onChange={handleChange1}
                  valueLabelDisplay="off"
                  disableSwap
                  color = 'black'
              />
              
              <Typography >
                  Price: {price[0]}₺ - {price[1]}₺
              </Typography>
          </Box>

          <br/>
          <br/>

          <div>
              <h3>Categories</h3>
              <br/>
              <p onClick={()=>filterAll()} className='cursor-pointer'>All</p>
              <p onClick={()=>filterItem('mono')} className='cursor-pointer'>Mono Flower</p>
              <p onClick={()=>filterItem('salon')} className='cursor-pointer'>Salon Flowers</p>
              <p>Bridal</p>
              <p>Wedding Car</p>
              <p>Noruz</p>
              <p>New Year</p>
              <p>Valentines</p>
          </div>
        </div>
      </div>
      
      <div className='container mt-5'>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </div>

    </div>
    
    <Footer/>

    {/* <Filter/> */}
    </>
  )
}

export default Shop