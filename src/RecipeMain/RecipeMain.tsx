import { gql, useMutation, useQuery } from "@apollo/client";
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RecipeType } from "../models/RecipeType";
import { RootState } from "../store";
import RecipeMainWrapper, { RecipeMainWrapperStatus, RecipeMainStatus } from "./components/RecipeMain.wrapper/RecipeMain.wrapper";
import RecipeMainBody from "./components/RecipeMainBody/RecipeMainBody";
import RecipeMainHeader from "./components/RecipeMainHeader/RecipeMainHeader";

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

const EDIT_RICIPE = gql`
    mutation editRecipeMutation(
        $ricipeId: ID!
        $ricipeNewName: String
        $recipeNewBody: String
    ) {
        editRecipe(
            id: $ricipeId
            newName: $ricipeNewName
            newBody: $recipeNewBody
        ) {
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

    const [onEditMutator] = useMutation(EDIT_RICIPE);

    useEffect(() => {
        setRecipeCaption(caption);
        setRecipeBody(body);
    }, [caption, body]);

    useEffect(() => {
        if (editMode) {
            console.log("edit");
            onEditMutator({
                variables: {
                    ricipeId: selectedId,
                    ricipeNewName: recipeCaption,
                    recipeNewBody: recipeBody,
                },
            });
            setEditMode(false);
        }
    }, [recipeCaption, recipeBody, editMode]);

    const headerChange = (caption: string) => setRecipeCaption(caption);

    const editHandler = (isEdit: boolean) => setEditMode(isEdit);

    const bodyChange = (body: string) => setRecipeBody(body);

    const recipeStatus: RecipeMainWrapperStatus = { 
        type: RecipeMainStatus.RECIPE
    };

    if (!selectedId) {
        recipeStatus.type = RecipeMainStatus.START_PAGE;
    } else if (error) {
        recipeStatus.type = RecipeMainStatus.ERROR;
    } else if (loading) {
        recipeStatus.type = RecipeMainStatus.LOADING;
    }

    return <RecipeMainWrapper caption={recipeCaption}
        body={recipeBody}
        status={recipeStatus}
        captionHandler={headerChange}
        bodyHandler={bodyChange} 
        editModeHandler={editHandler}/>
};

export default RecipeMain;
