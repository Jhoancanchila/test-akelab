import React, { useState, useEffect } from 'react'
import { Wrapper } from '../../Components/Wrapper'
import { SearchMovies } from '../../Components/SearchMovies'
import { ActionListStyled } from './styles'
// import { FilterAction } from '../FilterAction'
import { FilterCheckboxAction } from '../checkboxAction'
import { BackgroundIcon } from '../BackgroundIcon/BackgroundIcon'
import Sort from '../Sort'
import { useDispatch } from 'react-redux'


export const ActionList = () => {
  const dispatch = useDispatch()
  const [showSort, setShowSort] = useState(false)
  const [ordenSelected, setOrdenSelected] = useState('Ascendente')
  const [dataSort, setDataSort] = useState([
    {
      id: 1,
      name: 'Fecha',
      ref: 'date',
      SELECTED: 1
    },
    {
      id: 2,
      name: 'Calificación',
      ref: 'raiting',
      SELECTED: 0
    }
  ])

  const sortMovies = (a, b) => {
    let sort = dataSort.filter(item => item.SELECTED === 1)[0]
    if (sort.ref === 'date') {
      return ordenSelected === 'Ascendente' ? new Date(b.release_date) - new Date(a.release_date) : new Date(a.release_date) - new Date(b.release_date)
    }
    else if (sort.ref === 'raiting') {
      return ordenSelected === 'Ascendente' ? a.vote_average - b.vote_average : b.vote_average - a.vote_average
    }
    return 0;
  }
  dispatch({
    type:'SET_FUCTION_SORT',
    payload: sortMovies
  })
  
  return (
    <Wrapper>
      <ActionListStyled>
        <div className="container__action">
          <h5>Películas</h5>
          <SearchMovies />
        </div>
        <FilterCheckboxAction />
        {showSort &&
          <Sort
            top='85px'
            right='700px'
            setShowSort={setShowSort}
            description={'Ordena tus películas por fecha y Calificación'}
            dataSort={dataSort}
            setDataSort={setDataSort}
            ordenSelected={ordenSelected}
            setOrdenSelected={setOrdenSelected}
          />
        }

        <div className="ActionList__Order_icons" onClick={() => setShowSort(!showSort)}>
          <BackgroundIcon
            name='Order'
            className='ActionList__Order_icons_item '
            setFillColor={'#6D6E70'}
          />
          {showSort &&
            <span className="Sort__arrow"></span>
          }

        </div>
        {/* <FilterAction /> */}
      </ActionListStyled>
    </Wrapper>
  )
}
