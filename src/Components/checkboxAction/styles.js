import styled from 'styled-components'

export const FilterByCheckboxAction = styled.div`
display:flex;
align-items:center;
margin-top:30px;
.checkbox {
  border-left:1px solid #4F4F4F;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  position: relative;
  padding:.5em 1em;
}
.checkbox .div__filterMenu{
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  display: none;
  padding: 10px;
  position: absolute;
  top: 120%;
  left: -240%;
  list-style-type: none;
  background:  #EFEFEF;
  width: 8rem;
  z-index: 99;
}

.checkbox.open .div__filterMenu {
  display: block;
}

.checkbox .div__filterMenu  label {
  display :flex;
  margin: 5px 0;
  align-items:center
}
input{
  margin-right:0.5rem
}
`