import React, { useState } from 'react'
import { initialState } from '../../json/Movies'
import { FilterByCheckboxAction } from './styles'
import FilterIcon from '../../assets/icons/FilterIcon.png'
import { useDispatch } from 'react-redux'

export const FilterCheckboxAction = () => {
  const [checkbox, setCheckbox] = useState(false)
  const dispatch = useDispatch()
  const genres = initialState.genres.map(item => item)


  const filterByGeners = (gener) => {
    const valuesCheckeds = []

    for (let i = 0; i < genres.length; i++) {
      const itemsGenres = genres[i]
      const isChecked = document.getElementById(itemsGenres.id).checked
      const genderName = itemsGenres.name
      const objChecked = {
        isChecked: isChecked,
        name: genderName,
        id: itemsGenres.id
      }
      valuesCheckeds.push(objChecked)
    }
    const genresChecked = valuesCheckeds.filter(checked => checked.isChecked === true)
    dispatch({
      type: 'FILTER_BY_GENDER',
      payload: genresChecked
    })
  }

  return (
    <FilterByCheckboxAction>
      <div className={`${checkbox ? 'checkbox open' : 'checkbox'}`} onClick={() => setCheckbox(!checkbox)} >
        <i className='icon__action '><img src={FilterIcon} alt="" /></i>
        <div className="div__filterMenu" >
          <span> Genero </span>
          {genres.map(g =>
            <div key={g.id} >
              <label> <input type="checkbox" id={g.id} value={g.name} onChange={() => filterByGeners(g)} /> {g.name} </label>
            </div>
          )}
        </div>
      </div>
    </FilterByCheckboxAction>
  )
}
