import styled from 'styled-components'

export const FilterByCheckboxAction = styled.div`
display:flex;
align-items:center;
.filter__close_container{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
}
.checkbox {
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  position: relative;
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
  width: 190px;
  z-index: 80;
}
.icon__action{
  display:flex;
  align-items:center;
  justify-content:center;
  width:40px;
  height:40px;
  border-radius:50%;
  margin-left: 5px;
}
.icon__action:hover{
background-color:#EFEFEF;
}
.checkbox.open .div__filterMenu {
  display: block;
}
.div__filterMenu span{
  font-weight:bold;
  font-size:1.3em
}

.checkbox .div__filterMenu  label {
  display :flex;
  margin: 5px 0;
  align-items:center;
  font-size:1.1em
}
.checkbox__container_input{
  padding-left:40px
}
.input__Action{
  margin-right:0.5rem;
  cursor:pointer
}

.filter__arrow {
  position: absolute;
  left:4px;
  top: 100%;
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
  background: #EFEFEF;
  box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
}

.ActionList__Filter_icons {
	width: 40px;
	height: 40px;
	position: relative;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin:30px 0 0;
	cursor: pointer;
  padding:10px
}
.ActionList__Filter_icons:hover {
	background: #EFEFEF;
}
ActionList__Filter_icons_item {
  height: 100%;
  width: 100%
}
`