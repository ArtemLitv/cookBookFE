import React from "react";
import { gql, useQuery } from "@apollo/client";

export const RECIPE = gql`
  query Query($recipeId: ID!) {
    recipe(id: $recipeId) {
      succsess
      message
      recipe {
        id
        caption
      }
    }
  }
`;

type RecipeProps = {};

const Recipe: React.FC<RecipeProps> = () => {
  const result = useQuery(RECIPE, {
    variables: {
      recipeId: "8",
    },
  });

  console.log(">>>", result);

  const { data, loading, error } = result;
  console.log(">>>>", data?.recipe?.succsess);

  if (error || !data?.recipe?.succsess) {
    return (
      <div>
        Somthig went wrong 
        <em>{data?.recipe?.message}</em>
      </div>
    );
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{data?.recipe?.recipe?.caption}</div>;
};

export default Recipe;
