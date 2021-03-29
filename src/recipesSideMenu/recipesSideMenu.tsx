import React, { FC, useCallback } from "react";
import { gql, useQuery } from "@apollo/client";
import RecipeSideMenu from "./components/recipeSideMenu/recipeSideMenu";
import "./recipesSideMenu.scss";
import { RecipeType } from "../models/RecipeType";

const ALL_RECIPES = gql`
    query Query {
        recipes {
            succsess
            message
            recipes {
                id
                caption
            }
        }
    }
`;

type RecipesProps = {};

const RecipesSideMenu: FC<RecipesProps> = () => {
    const { data, loading, error } = useQuery(ALL_RECIPES);

    const addClickHandler = useCallback(() => {
        console.log("add click");
    }, []);

    return (
        <div className="recipies-side-menu">
            <button
                className="recipies-side-menu__add-button"
                onClick={addClickHandler}
            >
                Add Recipe
            </button>
            {data?.recipes?.recipes?.map((recipe: RecipeType) => (
                <RecipeSideMenu
                    id={recipe.id}
                    caption={recipe.caption}
                    key={recipe.id}
                />
            ))}
        </div>
    );
};

export default RecipesSideMenu;
