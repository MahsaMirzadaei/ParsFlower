import React from 'react'
import { Container , Button } from '../styles'
import { ConsultHolder } from '../styles/Consult'
import arezoo from '../img/arezoo.jpg'

const Consult = () => {
  return (
    <section>
      <Container>
        <ConsultHolder>
          <p>Difficult to choose? <br/>
            Write to our florist to create for you the most special bouquet.
          </p>
          <Button>Consult with us</Button>
          <div>
            <img src={arezoo} alt="arezoo"/>
          </div>
        </ConsultHolder>
      </Container>
    </section>
  )
}

export default Consult