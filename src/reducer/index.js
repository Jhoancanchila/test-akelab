export const reducer = (state, action) => {
  switch (action.type) {

    case 'SET_MOVIES_LIST': {
      return {
        ...state,
        movieList: action.payload
      }
    }
    case 'SEARCH_CONTENT': {
      let list = state.movieList
      const filteredListByName = list.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase()))
      return {
        ...state,
        filteredListByName
      }
    }
    default: {
      return state
    }
  }
}