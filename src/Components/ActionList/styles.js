import styled from 'styled-components'

export const ActionListStyled = styled.div`
  align-items:center;
  display:flex;

  .container__action {
    display: flex;
    flex-direction:column;
    padding:.5em 1em ;
    text-align:left;
    max-width:18em
  };

  .content__back_title {
    width: 100%;
    display: flex;
    justify-content: start;

    & h5{
      margin: 0;
      display: flex;
      align-items: center;
    }
  };

  .ActionList__Order_icons {
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
};

.ActionList__Order_icons:hover {
	background: #EFEFEF;
};

ActionList__Order_icons_item {
  height: 100%;
  width: 100%
};

`