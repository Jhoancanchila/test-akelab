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
      } else {
        list = state.movieList
      }
      //validamos que el charactersSearch tenga alguna cadena de caracter
      const filteredListByName = charactersSearch !== '' ? list.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())) : state.movieList
      return {
        ...state,
        filteredListByName,
      }
    }
    case 'FILTER_BY_ITEM': {
      const itemSelect = action.payload

      let list

      if (state.filteredListByName.length > 0) {
        list = state.filteredListByName
      }
      else if (state.filterByItem !== '') {
        list = state.moviesfilteredByItem
      }
      else {
        list = state.movieList
      }

      switch (itemSelect) {
        case '0-10 Puntos': {
          const newArrayOrder = list.sort(function (a, b) { return (a.vote_average - b.vote_average) })
          const moviesfilteredByItem = newArrayOrder.map(item => item)
          return {
            ...state,
            moviesfilteredByItem,
            filterByItem: itemSelect,
            filteredListByName: []
          }
        }
        case '10-0 Puntos': {
          const newArrayOrder = list.sort(function (a, b) { return (b.vote_average - a.vote_average) })
          const moviesfilteredByItem = newArrayOrder.map(item => item)
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
    default: {
      return state
    }
  }
}
