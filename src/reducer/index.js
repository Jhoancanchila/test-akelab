export const reducer = (state, action) => {
  switch (action.type) {

    case 'SET_MOVIES_LIST': {
      return {
        ...state,
        movieList: action.payload
      }
    }
    case 'FILTER_BY_SEARCH_CONTENT': {
      let list

      const charactersSearch = action.payload
      if (state.orderByItem !== '') {
        list = state.moviesOrderByDateCalification
      } else if (state.filterByGender.length > 0) {
        list = state.filterByGender
      } else {
        list = state.movieList
      }
      //validamos que el charactersSearch tenga alguna cadena de texto
      const filteredListByName = charactersSearch !== '' ? list.filter(item => item.title.toLowerCase().includes(charactersSearch.toLowerCase())) : state.filterByGender || state.movieList
      return {
        ...state,
        filteredListByName,
        orderByItem: ''

      }
    }
    case 'ORDER_BY_DATE_CALIFICATION': {
      const itemSelect = action.payload

      let list

      if (state.filteredListByName.length > 0) {
        list = state.filteredListByName
      } else if (state.filterByGender.length > 0) {
        list = state.filterByGender
      } else if (state.orderByItem !== '') {
        list = state.moviesOrderByDateCalification
      }
      else {
        list = state.movieList
      }

      switch (itemSelect) {
        case '0-10 Puntos': {
          const moviesOrderByDateCalification = list.sort(function (a, b) { return (a.vote_average - b.vote_average) })
          return {
            ...state,
            moviesOrderByDateCalification,
            orderByItem: itemSelect,
            filteredListByName: [],
          }
        }
        case '10-0 Puntos': {
          const moviesOrderByDateCalification = list.sort(function (a, b) { return (b.vote_average - a.vote_average) })
          return {
            ...state,
            moviesOrderByDateCalification,
            orderByItem: itemSelect,
            filteredListByName: []
          }
        }
        case 'Nuevas-Antiguas': {
          const moviesOrderByDateCalification = list.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
          return {
            ...state,
            moviesOrderByDateCalification,
            orderByItem: itemSelect,
            filteredListByName: []
          }
        }
        case 'Antiguas-Nuevas': {
          const moviesOrderByDateCalification = list.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
          return {
            ...state,
            moviesOrderByDateCalification,
            orderByItem: itemSelect,
            filteredListByName: []
          }
        }
        default: {
          return {
            ...state,
            moviesOrderByDateCalification: [],
            orderByItem: ''
          }
        }
      }
    }
    case 'FILTER_BY_GENDER': {
      const idsChecked = action.payload
      console.log(idsChecked)
      let list
      if (state.filteredListByName.length > 0) {
        list = state.filteredListByName
      } else if (state.orderByItem !== '') {
        list = state.moviesOrderByDateCalification
      } else {
        list = state.movieList
      }

      const filterByGender = idsChecked.length > 0 ? list.filter(movie => movie.genre_ids.filter(item => idsChecked.includes(item)).length > 0).map(movie => movie) : state.movieList
      return {
        ...state,
        filterByGender,
        filteredListByName: [],
        orderByItem: '',
      }
    }
    default: {
      return state
    }
  }
}
