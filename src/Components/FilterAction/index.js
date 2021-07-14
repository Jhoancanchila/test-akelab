import React, { useState } from 'react';
import ArrowIcon from '../../assets/icons/ArrowIcon.png'
import { FilterActionByItemAction } from './styles'

export const FilterAction = () => {
  const [dropdown, setdropdown] = useState(false)

  return (
    <>
      <FilterActionByItemAction>
        <div className={`${dropdown ? 'dropdown open' : 'dropdown'}`} onClick={() => setdropdown(!dropdown)} >
          Ordenar
          <i className='icon__action '><img src={ArrowIcon} alt="" /></i>
          <ul>
            <li><strong>Fecha</strong></li>
            <li>Nuevas-Antiguas</li>
            <li>Antiguas-Nuevas</li>
            <li><strong>Calificación</strong></li>
            <li>0-10 Puntos</li>
            <li>10-0 Puntos</li>
          </ul>
        </div>
      </FilterActionByItemAction>
    </>
  )
}