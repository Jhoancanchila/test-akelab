import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import ArrowIcon from '../../assets/icons/ArrowIcon.png'
import ArrowIconOpen from '../../assets/icons/ArrowIconOpen.png'
import { FilterActionByItemAction } from './styles'

export const FilterAction = () => {
  const [dropdown, setdropdown] = useState(false)
  const dispatch = useDispatch()

  const handleClickItem = (itemSelect) => {
    dispatch({
      type: 'ORDER_BY_DATE_CALIFICATION',
      payload: itemSelect
    })
  }

  return (
    <FilterActionByItemAction>
      <p>Ordenar</p>
      <div className={`${dropdown ? 'dropdown open' : 'dropdown'}`} onClick={() => setdropdown(!dropdown)} >
        <i className='icon__action '><img src={!dropdown ? ArrowIcon : ArrowIconOpen} alt="" /></i>
        <ul>
          <li><strong>Fecha</strong></li>
          <li onClick={() => handleClickItem('Nuevas-Antiguas')}>Nuevas-Antiguas</li>
          <li onClick={() => handleClickItem('Antiguas-Nuevas')}>Antiguas-Nuevas</li>
          <li><strong>Calificación</strong></li>
          <li onClick={() => handleClickItem('0-10 Puntos')}>0-10 Puntos</li>
          <li onClick={() => handleClickItem('10-0 Puntos')}>10-0 Puntos</li>
        </ul>
      </div>
    </FilterActionByItemAction>
  )
}