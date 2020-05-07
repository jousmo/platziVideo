import React from 'react'
import IconPlay from '../assets/static/play-icon.png'
import IconPlus from '../assets/static/plus-icon.png'
import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = props => {
  const { cover = '', title = '', year = 0, contentRating = '', duration = 0 } = props

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={IconPlay} alt='Play Icon' />
          <img className='carousel-item__details--img' src={IconPlus} alt='Plus Icon' />
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration} minutos`}</p>
      </div>
    </div>
  )
}

export default CarouselItem
