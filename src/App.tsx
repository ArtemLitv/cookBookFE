import React, { FC } from "react";

import RecipesSideMenu from "./recipesSideMenu/recipesSideMenu";
import RecipeMain from "./RecipeMain/RecipeMain";

type AppProps = {};

const App: FC<AppProps> = () => {
  const selectedRecipe = undefined;

  return (
    <div className="index-greed">
      <RecipesSideMenu />
      <RecipeMain selectedRecipe={selectedRecipe} />
    </div>
  );
};

export default App;
