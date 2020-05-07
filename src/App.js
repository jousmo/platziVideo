import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Categories from './components/Categories'
import Carousel from './components/Carousel'
import CarouselItem from './components/CarouselItem'
import Footer from './components/Footer'
import useMovies from './hooks/useMovies'
import './assets/styles/App.scss'

const App = () => {
  const movies = useMovies('http://localhost:3001/movies')

  return (
    <>
      <Header />
      <Search />
      {movies.mylist.lenght > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {movies.mylist.map(movie => (
              <CarouselItem key={movie.id} {...movie} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {movies.trends.map(movie => (
            <CarouselItem key={movie.id} {...movie} />
          ))}
        </Carousel>
      </Categories>
      <Categories title='Originales'>
        <Carousel>
          {movies.originals.map(movie => (
            <CarouselItem key={movie.id} {...movie} />
          ))}
        </Carousel>
      </Categories>
      <Footer />
    </>

  )
}

export default App
