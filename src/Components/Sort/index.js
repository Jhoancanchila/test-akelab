import React, { useState } from 'react';
import { BackgroundIcon } from '../BackgroundIcon/BackgroundIcon';
import Select from '../Select/Select'
import './Sort.css';

/**
 * @author [Jeison Vargas || Diego Savedra || Jhoan Canchila]
 * @version 1.0.0
 * @param {string} top - top: Pixeles para ubicar el modal en refencia del contendor padre. Ej: '100px'
 * @param {string} right - right: Pixeles para ubicar el modal en refencia del contendor padre. Ej: '100px'
 * @param {func} setShowSort - setShowSort: Función para actualizar el hook que muestra el componente.
 * @param {string} description - description: Descripción de ordenamiento para el componente. Puede ser null.
 * @param {array} dataSort - dataSort: Array con la información a de las variables para ordendar. Nota: Solo un elemento del array debe estar con la propiedad SELECTED en 1, los demás deben estar en 0.
 * @param {func} setDataSort setDataSort: Función para actualizar el hook dataSort. Ej:
 *  const [dataSort, setDataSort] = useState([
      {
        id: 1,
        name: t('ExpirationDate'),
        ref: 'Fecha',
        SELECTED: 1
      },
      {
        id: 2,
        name: t('Priority'),
        ref: 'Prioridad',
        SELECTED: 0
      },
      {
        id: 3,
        name: t('Progress'),
        ref: 'Progreso',
        SELECTED: 0
      },
      {
        id: 4,
        name: t('Alphabetical'),
        ref: 'Alfabetico',
        SELECTED: 0
      }
    ]);
 * @param {string} ordenSelected - ordenSelected: String con la variable ascendente o descendente.
 * @param {func} setOrdenSelected - setOrdenSelected: Función para actualizar el hook ordenSelected. Ej: const [ordenSelected, setOrdenSelected] = useState('Ascendente');
 *   
 *  Implementación: 
 *  // Hook para mostrar el componente.
 *  const [showSort, setShowSort] = useState(false); 
 * 
 *  // Llamado del componente dentro del div general.
 *  {showSort &&
      <Sort 
        top='115px'
        right='-100px'
        setShowSort={setShowSort}
        description={t('sortDescription')}
        dataSort={dataSort}
        setDataSort={setDataSort}
        ordenSelected={ordenSelected}
        setOrdenSelected={setOrdenSelected}
      />
    }
 *
 *  // Llamado de la cuña justo debajo del boton, icono o texto que va a desplegar el componente.
 *  {showSort &&
      <span className="Sort__arrow"></span>
    }
 */

const Sort = ({ top, right, setShowSort, description, dataSort, setDataSort, ordenSelected, setOrdenSelected }) => {
  const [showCategories, setShowCategories] = useState(false);
  const [showOrden, setShowOrden] = useState(false);
  
  const categories = dataSort.map(item => {
    return {
      NAME: item.name,
      SELECTED: '',
      VALIDATOR: item.name,
      ONCLICK: () => {handleDataSort(item)}
    }
  });

  const handleDataSort = (cat) => {
    setShowCategories(false);
    let newDataSort = dataSort.map(item => {
      if (item.id === cat.id) {
        return {...item, SELECTED: 1}
      } else {
        return {...item, SELECTED: 0}
      }
    });
    setDataSort(newDataSort);
  }

  const ordenData = [
    {
      NAME: 'Ascendente',
      SELECTED: 'start',
      VALIDATOR: 'Ascendente',
      ONCLICK: () => handleOrden('Ascendente')
    },
    {
      NAME: 'Descendente',
      SELECTED: 'fin',
      VALIDATOR: 'Descendente',
      ONCLICK: () => handleOrden('Descendente')
    }
  ]

  const handleOrden = (value) => {
    setShowOrden(false);
    setOrdenSelected(value);
  }

  return (
    <div style={{ top: top, right: right  }} className="Sort__general_container">
      <div className="Sort__close_container" onClick={() => setShowSort(false)} />
      <div className="Sort__content_container">
        <div className="Sort__close-header">
          <div className="Sort__close_header-button" onClick={() => setShowSort(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M13.142 10.0003L19.3484 3.79378C20.2172 2.92492 20.2172 1.52051 19.3484 0.651649C18.4795 -0.217216 17.0752 -0.217216 16.2063 0.651649L10 6.85814L3.79368 0.651649C2.92484 -0.217216 1.52047 -0.217216 0.65163 0.651649C-0.21721 1.52051 -0.21721 2.92492 0.65163 3.79378L6.85795 10.0003L0.65163 16.2068C-0.21721 17.0756 -0.21721 18.48 0.65163 19.3489C1.08494 19.7822 1.6538 20 2.22265 20C2.79151 20 3.36037 19.7822 3.79368 19.3489L10 13.1424L16.2063 19.3489C16.6396 19.7822 17.2085 20 17.7773 20C18.3462 20 18.9151 19.7822 19.3484 19.3489C20.2172 18.48 20.2172 17.0756 19.3484 16.2068L13.142 10.0003Z" fill="#6D6E70"/>
            </svg>
          </div>
        </div>
        <h3 className="Sort__title">Ordenar por:</h3>
        {description &&
          <p className="Sort__description">{description}</p>
        }
        <div className="Sort__selects_container">
          <div className="Sort__select_container" onClick={(e) => setShowCategories(!showCategories)}>
            <p className="Sort__select_text">{dataSort.filter(item => item.SELECTED === 1)[0]?.name}</p>
            <div className={`Sort__arrow_icon ${!showCategories && 'right'}`}>
              <BackgroundIcon
                name='ArrowDown'
                setFillColor='#EF8043'
                setStrokeColor='none'
              />
            </div>
            {
              showCategories &&
              <Select
                type="isFunction"
                color="purple"
                position={"right"}
                open={showCategories}
                onClose={() => setShowCategories(false)}
                dataOptions={categories}
                optionSelected={dataSort.filter(item => item.SELECTED === 1)[0]?.name}
              />
            }
          </div>
          <div className="Sort__select_container" onClick={(e) => setShowOrden(!showOrden)}>
            <div className="Sort__ascendente_container">
              <div className={`Sort__arrow_icon ${ordenSelected === 'Ascendente' ? 'up' : 'down'}`}>
                <BackgroundIcon
                  name='LeftArrow'
                  setFillColor='#6D6E70'
                  setStrokeColor='none'
                />
              </div>
              <p className="Sort__select_text">{ordenSelected}</p>
            </div>
            <div className={`Sort__arrow_icon ${!showOrden && 'right'}`}>
              <BackgroundIcon
                name='ArrowDown'
                setFillColor='#EF8043'
                setStrokeColor='none'
              />
            </div>
            {
              showOrden &&
              <Select
                type="isFunction"
                color="purple"
                position={"right"}
                open={showOrden}
                onClose={() => setShowOrden(false)}
                dataOptions={ordenData}
                optionSelected={ordenSelected}
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sort;
