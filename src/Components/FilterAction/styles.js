import styled from 'styled-components'

export const FilterActionByItemAction = styled.div`
display:flex;
align-items:center;
margin-top:30px;
.dropdown {
  border-left:1px solid #4F4F4F;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  position: relative;
  padding:.5em 4em .5em 1em;
}

.dropdown .icon__action {
  margin-left: 10px;
}

.dropdown ul {
  border-radius: 4px;
  background-color: #FFFFFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  display: none;
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 100%;
  left: 0;
  list-style-type: none;
  background: #FFFFFF;
  width: 100%;
  z-index: 99;
}

.dropdown.open ul {
  display: block;
}

.dropdown ul li {
  margin: 10px 0;
}

`