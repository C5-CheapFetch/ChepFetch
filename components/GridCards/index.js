import React from 'react'

import { Grid, Container, Title } from './styles'

import CardSquare from '../CardSquare'
import CardHorizontal from '../CardHorizontal'
import CardVertical from '../CardVertical'

const GridCards = () => {

  return(
    <Container>
      <Title>Trending Products</Title>
      <Grid>
        <div className='grid__vertical'>
          <CardVertical />
        </div>
        <div className='grid__square' >
          <CardSquare />
        </div>
        <div className='grid__horizontal'>
          <CardHorizontal />
        </div>
        <div className='grid__horizontal--second'>
          <CardHorizontal />
        </div>
        <div className='grid__square--second'>
          <CardSquare />
        </div>
        <div className='grid__square--third' >
          <CardSquare />
        </div>
        <div className='grid__squareTwo--third' >
          <CardSquare />
        </div>
        <div className="grid__vertical--third">
          <CardVertical />
        </div>
        <div className="grid__squareThree--thrid">
          <CardSquare />
        </div>
        <div className="grid__horizontal--fourth">
          <CardHorizontal />
        </div>
        <div className="grid__vertical--fourth">
          <CardVertical />
        </div>
        <div className="grid__square--fifth">
          <CardSquare />
        </div>
        <div className="grid__horizontal--fifth">
          <CardHorizontal />
        </div>
      </Grid>
    </Container>
  )
}

export default GridCards