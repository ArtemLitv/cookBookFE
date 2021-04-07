import React, { FC, useEffect, useState } from "react";
import RecipeMainBody from "../RecipeMainBody/RecipeMainBody";
import RecipeMainHeader from "../RecipeMainHeader/RecipeMainHeader";
import "./RecipeMain.wrapper.scss";

type RecipeMainWrapperProps = {
    caption: string;
    body: string;
    status: RecipeMainWrapperStatus;
    captionHandler: (caption: string) => void;
    bodyHandler: (body: string) => void;
    editModeHandler: (isEdit: boolean) => void;
};

export type RecipeMainWrapperStatus = {
    type: RecipeMainStatus;
    metaInfo?: any;
};

export enum RecipeMainStatus {
    LOADING = "LOADING",
    ERROR = "ERROR",
    START_PAGE = "START_PAGE",
    RECIPE = 'RECIPE'
}

const RecipeMainWrapper: FC<RecipeMainWrapperProps> = (props: RecipeMainWrapperProps) => {
    const { caption, body, status, captionHandler, bodyHandler, editModeHandler } = props;

    const [recipeCaption, setRecipeCaption] = useState(caption);
    const [recipeBody, setRecipeBody] = useState(body);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setRecipeCaption(caption);
        setRecipeBody(body);
    }, [caption, body]);

    const headerChange = (caption: string) => captionHandler(caption);
    const bodyChange = (body: string) => bodyHandler(body);
    const editHandler = (isEdit: boolean) => editModeHandler(isEdit);


    switch (status.type) {
        case RecipeMainStatus.START_PAGE:
            return <h1 className="recipe-main-wrapper__header">Start Page</h1>;
        case RecipeMainStatus.LOADING:
            return <>Loading...</>;
        case RecipeMainStatus.ERROR:
            return <>Error</>;
        default:
            return <div className="recipe-main-wrapper__wrapper">
                <RecipeMainHeader header={recipeCaption} headerChange={headerChange} editHandler={editHandler} />
                <RecipeMainBody body={recipeBody} bodyChange={bodyChange} isEdit={editMode} />
            </div>
    }
};

export default RecipeMainWrapper;
