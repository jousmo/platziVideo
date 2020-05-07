import React from 'react'

const initState = {
  mylist: [],
  trends: [],
  originals: []
}

const useMovies = (API) => {
  const [movies, setMovies] = React.useState(initState)

  React.useEffect(() => {
    window.fetch(API)
      .then(response => response.json())
      .then(data => setMovies(data))
  }, [API])

  return movies
}

export default useMovies
