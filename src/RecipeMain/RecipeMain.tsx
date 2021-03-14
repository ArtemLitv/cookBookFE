import { gql, useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RecipeType } from "../models/RecipeType";
import { RootState } from "../store";
import RecipeMainBody from "./components/RecipeMainBody/RecipeMainBody";
import RecipeMainHeader from "./components/RecipeMainHeader/RecipeMainHeader";
import "./RecipeMain.scss";

const RESIPIE = gql`
  query RESIPE_FULL_DATA($recipeId: ID!) {
    recipe(id: $recipeId) {
      succsess
      message
      recipe {
        id
        caption
        body
      }
    }
  }
`;

const UPDATE_RECIPE_CAPTION = gql`
  mutation RenameRicipeMutation(
    $renameRicipeId: ID!
    $renameRicipeNewName: String!
  ) {
    renameRicipe(id: $renameRicipeId, newName: $renameRicipeNewName) {
      succsess
      message
      recipe {
        id
        caption
        body
      }
    }
  }
`;

type RecipeMainProps = {
  selectedRecipe?: RecipeType;
};

const RecipeMain: FC<RecipeMainProps> = () => {
  const selectedId = useSelector((state: RootState) => state.menu.id);

  const { data, loading, error } = useQuery(RESIPIE, {
    variables: { recipeId: selectedId },
  });

  const caption = data?.recipe?.recipe?.caption;
  const body = data?.recipe?.recipe?.body;

  const [recipeCaption, setRecipeCaption] = useState(caption);
  const [recipeBody, setRecipeBody] = useState(body);
  const [editMode, setEditMode] = useState(false);

  const [onRenameMutator] = useMutation(UPDATE_RECIPE_CAPTION);

  useEffect(() => {
    setRecipeCaption(caption);
    setRecipeBody(body);
  }, [caption, body]);

  useEffect(() => {
    if (editMode) {
      onRenameMutator({
        variables: {
          renameRicipeId: selectedId,
          renameRicipeNewName: recipeCaption,
        },
      });
    }
  }, [recipeCaption, recipeBody]);

  const headerChange = (caption: string) => setRecipeCaption(caption);

  const editHandler = (isEdit: boolean) => setEditMode(isEdit);

  const bodyChange = (body: string) => setRecipeBody(body);

  if (!selectedId) {
    return <h1 className="recipe-main__header">Start Page</h1>;
  }

  if (recipeCaption && body) {
    return (
      <div className="recipe-main__wrapper">
        <RecipeMainHeader
          header={recipeCaption}
          headerChange={headerChange}
          editHandler={editHandler}
        />
        <RecipeMainBody
          body={recipeBody}
          bodyChange={bodyChange}
          isEdit={editMode}
        />
      </div>
    );
  }

  return <>Loading...</>;
};

export default RecipeMain;
