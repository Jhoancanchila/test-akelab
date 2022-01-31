import React, { useState, useRef } from 'react'
import { BackgroundIcon } from '../BackgroundIcon/BackgroundIcon';

import './InputSearch.css'
/**
 * This is a componet to search information in what ever page you use
 * @author [Jeison Vargas Pinzon]
 * @version 1.0.0
 * @param  {String} placeholder Is the text into the placeholder input
 * @param  {String} value The value of the typing input
 * @param  {Function} setValue Is the function in the onChange the function send e.target.value
 * @param  {Bolean} disabled This is to desactivate the typing input default value is "false"
 * @param  {Bolean} showSearch This is to detect if the search bar is being shown or not, in the true state it will allow the LeftArrow (go back) icon to be visible, with which the bar can be hidden again and go back, if required
 * @param  {Function} setShowSearch This function allows you to change the value of showSerach to false, as well as hide the search bar
 */
function InputSearch({ 
  placeholder, 
  value,
  setValue,
  disabled = false,
  setShowSearch,
  showSearch,
  autoFocus = true
}) {
  const [searchOn, setSearchOn] = useState(false);
  let inputRef = useRef();

  // const handleClick = () => {
  //   if (searchOn || value.length > 0) {
  //     setValue(''); setSearchOn(false)
  //   } else {
  //     setValue('');
  //     inputRef.current.focus();
  //     setSearchOn(true);
  //   }
  // }

  return (
    <React.Fragment>
      <div className={disabled ? 'InputSearch__Container_True' : "InputSearch__Container"}>
        <div className="InputSearch_Image_Content" onClick={() => {
          setValue('');
          setSearchOn(false);
          showSearch && setShowSearch(false);
          }}>
          <BackgroundIcon
            className="InputSearch_Icon"
            name={searchOn || value.length > 0 || showSearch ? 'LeftArrow' : 'Search'}
            setFillColor={disabled ? '#BCBCBC' : '#6D6E70'}
            setStrokeColor={disabled ? '#BCBCBC' : '#6D6E70'}
          />
        </div>
        <input
          autoFocus 
          ref={inputRef}
          type="text"
          className={ disabled ? 'InputSearch_Input_True' : "InputSearch_Input" }
          value={value}
          onChange={(e) => disabled ? null : setValue(e.target.value)}
          placeholder={placeholder}
          onClick={()=>setSearchOn(true)}
          onBlur = {()=>setSearchOn(false)}
          disabled={disabled}
          autoFocus = {autoFocus}
        />
        <div className="InputSearch_Image_Content" onClick={() => {setValue(''); inputRef.current.focus(); setSearchOn(true)}}>
          {value.length > 0 &&
            <BackgroundIcon
              name='Close'
              className={'InputSearch_Icon'}
              setFillColor={disabled ? '#BCBCBC' : '#6D6E70'}
              setStrokeColor={disabled ? '#BCBCBC' : '#6D6E70'}
            />}
        </div>
      </div>
    </React.Fragment>
  )
}
export default InputSearch