import React from 'react';
import { BackgroundIcon } from '../BackgroundIcon/BackgroundIcon';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './GoBack.css';


export const GoBack = () => {
const history = useHistory();
  const goBackClick = () => {
    history.push('/');
  }
  return (
    <div className='GoBack__container_icon' onClick={goBackClick}>
      <BackgroundIcon
        name='LeftArrow'
        className={'GoBack__content_icon'}
        setFillColor={'#6D6E70'}
      />
    </div>
  )
};
