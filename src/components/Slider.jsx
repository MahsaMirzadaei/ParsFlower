import React,{useContext} from 'react'
import {ProductsContext} from '../context/products-context'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


export default function MinimumDistanceSlider(props) {

  const {products} = useContext(ProductsContext)
  const mono = useContext(ProductsContext).filterMono
  const salon = useContext(ProductsContext).filterSalon

    const minDistance = 100;
    const [price, setPrice] = React.useState([1000, 2000]);
  
    const handleChange1 = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
      } else {
        setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
      }
    };

    const filter = (e) =>{
        mono()
        console.log(products)
    }
  
    return (
        <>
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
                <p onClick={mono} >Mono Flower</p>
                <p onClick={mono} >Salon Flowers</p>
                <p>Bridal</p>
                <p>Wedding Car</p>
                <p>Noruz</p>
                <p>New Year</p>
                <p>Valentines</p>
            </div>
        </>
    );
}
