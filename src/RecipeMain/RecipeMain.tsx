import React, { FC } from "react";
import { RecipeType } from "../models/RecipeType";
import "./RecipeMain.scss";

type RecipeMainProps = {
  selectedRecipe?: RecipeType;
};

const RecipeMain: FC<RecipeMainProps> = ({ selectedRecipe }) => {
  if (!selectedRecipe) {
    return <h1 className="recipe-main__header">Start Page</h1>;
  }

  return <h1 className="recipe-main__header">{selectedRecipe?.caption}</h1>;
};

export default RecipeMain;
