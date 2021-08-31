export const reducer = (state, action) => {
  switch (action.type) {

    case 'SET_MOVIES_LIST': {
      return {
        ...state,
        movieList: action.payload
      }
    }
    case 'SEARCH_CONTENT': {
      let list

      const charactersSearch = action.payload
      if (state.filterByItem !== '') {
        list = state.moviesfilteredByItem
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
        filterByItem: ''

      }
    }
    case 'FILTER_BY_ITEM': {
      const itemSelect = action.payload

      let list

      if (state.filteredListByName.length > 0) {
        list = state.filteredListByName
      } else if (state.filterByGender.length > 0) {
        list = state.filterByGender
      } else if (state.filterByItem !== '') {
        list = state.moviesfilteredByItem
      }
      else {
        list = state.movieList
      }

      switch (itemSelect) {
        case '0-10 Puntos': {
          const moviesfilteredByItem = list.sort(function (a, b) { return (a.vote_average - b.vote_average) })
          return {
            ...state,
            moviesfilteredByItem,
            filterByItem: itemSelect,
            filteredListByName: [],
          }
        }
        case '10-0 Puntos': {
          const moviesfilteredByItem = list.sort(function (a, b) { return (b.vote_average - a.vote_average) })
          return {
            ...state,
            moviesfilteredByItem,
            filterByItem: itemSelect,
            filteredListByName: []
          }
        }
        case 'Nuevas-Antiguas': {
          const moviesfilteredByItem = list.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
          return {
            ...state,
            moviesfilteredByItem,
            filterByItem: itemSelect,
            filteredListByName: []
          }
        }
        case 'Antiguas-Nuevas': {
          const moviesfilteredByItem = list.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
          return {
            ...state,
            moviesfilteredByItem,
            filterByItem: itemSelect,
            filteredListByName: []
          }
        }
        default: {
          return {
            ...state,
            moviesfilteredByItem: [],
            filterByItem: ''
          }
        }
      }
    }
    case 'FILTER_BY_GENDER': {
      const idsChecked = action.payload
      let list
      if (state.filteredListByName.length > 0) {
        list = state.filteredListByName
      } else if (state.filterByItem !== '') {
        list = state.moviesfilteredByItem
      } else {
        list = state.movieList
      }

      const filterByGender = list.filter(movie => idsChecked.length === 0 ? true : movie.genre_ids.filter(item => idsChecked.includes(item)).length > 0).map(movie => movie)
      return {
        ...state,
        filterByGender,
        filteredListByName: [],
        filterByItem: '',
      }
    }
    default: {
      return state
    }
  }
}
