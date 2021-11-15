export const reducer = (state, action) => {
  switch (action.type) {

    case 'SET_FUCTION_SORT':{
      return{
        ...state,
        functionSort:action.payload
      }
    }

    case 'SET_MOVIES_LIST': {
      return {
        ...state,
        movieList: action.payload
      }
    }
    case 'FILTER_BY_SEARCH_CONTENT': {
      let list
      if (state.filterByGender.length > 0) {
        list = state.filterByGender
      } else {
        list = state.movieList
      }
      const filteredListByName = list.filter(item =>item.title.toLowerCase().includes(action.payload.toLowerCase())) 
      return {
        ...state,
        filteredListByName,
      }
    }
    case 'FILTER_BY_GENDER': {
      const idsChecked = action.payload
      let list
      if (state.filteredListByName.length > 0) {
        list = state.filteredListByName
      } else {
        list = state.movieList
      }

      const filterByGender = idsChecked.length > 0 ? list.filter(movie => movie.genre_ids.filter(item => idsChecked.includes(item)).length > 0).map(movie => movie) : state.movieList

      return {
        ...state,
        filterByGender,
        filteredListByName: [],
      }
    }
    default: {
      return state
    }
  }
}
