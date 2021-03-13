import React from "react";
import './recipeSideMenu.scss';
import {RecipeType} from '../../../models/RecipeType';
import { useDispatch } from "react-redux";
import {select} from '../../../slicers/menuSlice';

type RecipeSideMenuProps = RecipeType;

const RecipeSideMenu: React.FC<RecipeSideMenuProps> = ({id, caption}: RecipeSideMenuProps) => {
  const dispatch = useDispatch();
  return <div className="recipe-side-menu" onClick={()=> dispatch(select(id))}>{caption}</div>;
};

export default RecipeSideMenu;
