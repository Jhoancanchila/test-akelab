import React from 'react';
import PropTypes from 'prop-types';
import Overlay from '../Overlay';
import { BackgroundIcon } from '../BackgroundIcon/BackgroundIcon';

import './Select.css'

/*
Componente Select Recibe los siguientes valores:
 type: es el tipo que recibe, tenemos dos tipos
    1.isSimple, para renderizar las opciones con unica funcionalidad.
    2.isFunction, para renderizar las opciones con diferentes funcionalidades.
 color: es para pintar la opcion selecionada, tenemos estas tres opcines disponibles
    1.purple.
    2.blue.
    3.orange.
  position: es para renderizar la posicion de la pestaña que identifica de donde se desplego el select, tenemos estas tres opcines disponibles
    1.left.
    2.center.
    3.right.
  positionContainer: es para ajustar la posición "derecha" o "izquierda" de todo el select, es un valor entero.
  open: es la validacion que activa el menu y recibe un valor boleano.
  onClose: es el seteo del estado de open el cual me permite cambiar el valor.
  dataOptions: es la data de las opciones del select y debe ser de tipo array, dentro de array enviar la variable SELECTED igualandolo en la primera opcion con "start" y en la ultima opcion con "fin", esto es para que la opcion selecionada se ajuste con el border radius.
  optionSelected: es el que nos idica que opcion esta selecionada.
  Ejemlo array para un tipo de select simple:
    dataOptions = [
      {name:"", selected:bolean}
      {name:"", selected:bolean}
    ]
  Ejemlo array para un tipo de select isfunction:
    dataOptions = [
      {name:"", onclick:"", validator:"", selected:bolean}
      {name:"", selected:bolean}
    ]
*/
function Select({
  type,
  color,
  position,
  positionContainer,
  open,
  dataOptions,
  onClose,
  optionSelected,
  selectPosition,
  selectFrom,
}) {
  const handleClose = () => {
    if (open) {
      onClose(false);
    } else {
      onClose(true);
    }
  };

  let checkIcon = dataOptions.filter(option => option.ICON_NAME).length;

  return (
    <>
      <Overlay
        overlay={open}
        onClick={(e) => {
          console.log('Overlay Selects');
          e.stopPropagation();
          handleClose();
        }}
      />
      {open && (
        <div className={(selectPosition && (((selectPosition[1] - selectPosition[0]) / selectPosition[1]) > 0.30)) || !selectFrom ? "Select__container" : "Select__container__up"} style={checkIcon > 0 ? { width: "222px", right: positionContainer } : { right: positionContainer }}
        >
          <span className={`Select__options_${position}`}></span>
          <div className="Select__options">
            <div className="Select__options_box" style={checkIcon > 0 ? { width: "222px" } : null}>
              {type === 'isSimple' && (
                <>
                  {dataOptions.map((option, index) => (
                    <li
                      key={index}
                      className={`Dropdown__option Dropdown__option_${color}`}
                      value={option.ID}
                      onClick={option.ONCLICK}
                    >
                      {option.NAME}
                    </li>
                  ))}
                </>
              )}

              {type === 'isFunction' && (
                <>
                  {dataOptions.map((option, index) => (
                    <li
                      key={index}
                      style={index === 0 ? { borderRadius: "9px 9px 0px 0px" } : index === dataOptions.length - 1 ? { borderRadius: "0px 0px 9px 9px" } : null}
                      className={
                        optionSelected === option.VALIDATOR &&
                          option.SELECTED === 'start'
                          ? `Dropdown__option Selected__${color}_start`
                          : optionSelected === option.VALIDATOR &&
                            option.SELECTED === 'fin'
                            ? `Dropdown__option Selected__${color}_fin`
                            : optionSelected === option.VALIDATOR
                              ? `Dropdown__option Selected__${color}`
                              : 'Dropdown__option'
                      }
                      onClick={option.ONCLICK}
                    >
                      {
                        option && option.ICON_NAME &&
                        <span className="icon_svg_container" style={{ background: option.ICON_BACKGROUND }}>
                          <BackgroundIcon
                            name={option.ICON_NAME}
                            className="select_icons_svg"
                            selected={true}
                            setStrokeColor={'#ffffff'}
                            setFillColor={index === 1 ? '#ffffff' : null}
                          />
                        </span>
                      }
                      <p>{option.NAME}</p>
                    </li>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Select.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  dataOptions: PropTypes.array,
  optionSelected: PropTypes.string,
};

export default Select;
