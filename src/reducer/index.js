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
      }
    }
    case 'FILTER_BY_ITEM': {
      const itemSelect = action.payload

      let list

      if (state.filteredListByName.length > 0) {
        list = state.filteredListByName
      } else if (state.filterByGender.length > 0) {
        list = state.filterByGender
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
        case 'Nuevas-Antiguas': {
          const newArrayOrder = list.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
          const moviesfilteredByItem = newArrayOrder.map(item => item)
          return {
            ...state,
            moviesfilteredByItem,
            filterByItem: itemSelect,
            filteredListByName: []
          }
        }
        case 'Antiguas-Nuevas': {
          const newArrayOrder = list.sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
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
    case 'FILTER_BY_GENDER': {
      const idChecked = action.payload.map(item => item.id)
      let list
      if (state.filteredListByName.length > 0) {
        list = state.filteredListByName
      } else if (state.filterByItem !== '') {
        list = state.moviesfilteredByItem
      } else {
        list = state.movieList
      }
      const newArrayGender = []
      list.forEach(item => {
        idChecked.forEach(element => {
          item.genre_ids.forEach(e => {
            if (element === e) {
              newArrayGender.push(item)
            }
          })
        })
      })
      const ids = newArrayGender.map(item => item.id)

      //filtro ids para que no hallan repetidos dentro del array
      const filterIds = ids.filter((valor, index) => {
        return ids.indexOf(valor) === index;
      })
      const filterByGender = []
      filterIds.forEach(element => {
        const filterMovies = state.movieList.find(item => item.id === element)
        filterByGender.push(filterMovies)
      })
      // console.log(filterByGender)
      return {
        ...state,
        filterByGender,
        filteredListByName: []
      }
    }
    default: {
      return state
    }
  }
}
