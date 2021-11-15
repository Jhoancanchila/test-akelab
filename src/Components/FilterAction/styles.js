import styled from 'styled-components'

export const FilterActionByItemAction = styled.div`
display:flex;
align-items:center;
margin-top:30px;
font-size: 12px;


p{
   border-left:1px solid #4F4F4F;
   margin :0;
   padding:.5em 0 .5em 5px;
}
.dropdown {
  cursor: pointer;
  text-align: center;
  position: relative;
  padding:.5em 8em .5em 1em;
}

.dropdown .icon__action img{
  transition: 0.5s;
}

.dropdown ul {
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12);
  display: none;
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 100%;
  left: -40%;
  list-style-type: none;
  background:#EFEFEF;
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