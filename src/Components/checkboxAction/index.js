import React, { useState } from 'react'
import { initialState } from '../../json/Movies'
import { FilterByCheckboxAction } from './styles'
import FilterIcon from '../../assets/icons/FilterIcon.png'
import { useDispatch } from 'react-redux'

export const FilterCheckboxAction = () => {

  const [checkbox, setCheckbox] = useState(false)
  const [idsChecked, setIdsChecked] = useState([])
  const genres = initialState.genres
  const dispatch = useDispatch()

  const filteritemsChecked = (id) => {
    let newIds = [...idsChecked]
    if (newIds.includes(id)) {
      newIds = idsChecked.filter(item => item !== id)
    } else {
      newIds.push(id)
    }
    setIdsChecked(newIds)

    dispatch({
      type: 'FILTER_BY_GENDER',
      payload: newIds
    })

  }

  return (
    <FilterByCheckboxAction>
      <div className={`${checkbox ? 'checkbox open' : 'checkbox'}`} onClick={() => setCheckbox(!checkbox)} >
        <i className='icon__action '><img src={FilterIcon} alt="" /></i>
          <div className="filter__close_container" onClick={() => setCheckbox(false)} />
        <div className="div__filterMenu"  >
          <span> Genero </span>
          {genres.map((g) =>
            <div className='checkbox__container_input' key={g.id} >
              <label> <input className='input__Action' type="checkbox" value={idsChecked.includes(g.id)} onChange={() => {filteritemsChecked(g.id); setCheckbox(true) }} /> {g.name} </label>
            </div>
          )}
        </div>
        {checkbox &&
            <span className="filter__arrow"></span>
          }
      </div>
    </FilterByCheckboxAction>
  )
}
