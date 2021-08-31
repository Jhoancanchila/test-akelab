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
    console.log(newIds)
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
        <div className="div__filterMenu" >
          <span> Genero </span>
          {genres.map((g) =>
            <div key={g.id} >
              <label> <input type="checkbox" value={idsChecked.includes(g.id)} onChange={() => filteritemsChecked(g.id)} /> {g.name} </label>
            </div>
          )}
        </div>
      </div>
    </FilterByCheckboxAction>
  )
}
