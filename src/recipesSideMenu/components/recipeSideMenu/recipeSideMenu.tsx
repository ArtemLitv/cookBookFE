import React from "react";
import "./recipeSideMenu.scss";
import { RecipeType } from "../../../models/RecipeType";
import { useDispatch } from "react-redux";
import { select } from "../../../slicers/menu.slice";
import { changeMode } from "../../../slicers/editMode.slice";

const RecipeSideMenu: React.FC<RecipeType> = (props: RecipeType) => {
  const { id, caption } = props;
  const dispatch = useDispatch();
  
  const clickHandler = () => {
    dispatch(select(id));
    dispatch(changeMode(false));
  };
  return (
    <div className="recipe-side-menu" onClick={clickHandler}>
      {caption}
    </div>
  );
};

export default RecipeSideMenu;
