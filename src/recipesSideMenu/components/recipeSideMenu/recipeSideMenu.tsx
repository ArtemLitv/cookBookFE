import React from "react";
import './recipeSideMenu.scss';
import {RecipeType} from '../../../models/RecipeType';

type RecipeSideMenuProps = RecipeType;

const RecipeSideMenu: React.FC<RecipeSideMenuProps> = ({id, caption}: RecipeSideMenuProps) => {
  return <div className="recipe-side-menu">{caption}</div>;
};

export default RecipeSideMenu;
