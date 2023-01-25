import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Container } from '../styles';
import { CategoriesIcon } from '../styles/Categories'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
import {IoIosArrowDropleftCircle} from 'react-icons/io'

//import icons
import bunch from '../img/categories/bunch.png'
import car from '../img/categories/car.png'
import cris from '../img/categories/cris.png'
import mother from '../img/categories/mother.png'
import valen from '../img/categories/valen.png'
import noruz from '../img/categories/noruz.png'
import tak from '../img/categories/tak.png'

const categories = [
    {
        id: 1,
        name: "bunch",
        src: bunch,
    },
    {
        id: 2,
        name: "car",
        src: car,
    },
    {
        id: 3,
        name: "cris",
        src: cris,
    },
    {
        id: 4,
        name: "mother",
        src: mother,
    },
    {
        id: 5,
        name: "valen",
        src: valen,
    },
    {
        id: 6,
        name: "noruz",
        src: noruz,
    },
    {
        id: 7,
        name: "tak",
        src: tak,
    },
]

const slideHolder = {
    textAlign: 'center',
    padding: '20px 0',
}

const buttonStyle = {
    width: "40px",
    background: 'none',
    border: '0px',
    fontSize: '35px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><IoIosArrowDropleftCircle/></button>,
    nextArrow: <button style={{ ...buttonStyle }}><IoIosArrowDroprightCircle/></button>
}

const CategoriesSlides = () => {
  return (
    <section >
        <Container style={{overflowY:"hidden"}}>
            <Slide {...properties} slidesToScroll={4} slidesToShow={4} indicators={true}>
                {categories.map(item=>
                    <div key={item.id} style={ slideHolder }>
                        <CategoriesIcon src={item.src} alt={item.name} />
                    </div>
                )}
            </Slide>
        </Container>
    </section>
  )
}

export default CategoriesSlides