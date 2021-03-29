import React, { FC, useEffect, useState } from "react";
import RecipeMainBody from "./components/RecipeMainBody/RecipeMainBody";
import RecipeMainHeader from "./components/RecipeMainHeader/RecipeMainHeader";
import "./RecipeMainWrapper.scss";

type RecipeMainWrapperProps = {
    caption: string;
    body: string;
    status: RecipeMainWrapperStatus;
};

type RecipeMainWrapperStatus = {
    type: RecipeMainStatus;
    metaInfo?: any;
};

enum RecipeMainStatus {
    LOADING = "LOADING",
    ERROR = "ERROR",
    START_PAGE = "START_PAGE",
}

const RecipeMainWrapper: FC<RecipeMainWrapperProps> = (props: RecipeMainWrapperProps) => {
    const { caption, body, status } = props;

    const [recipeCaption, setRecipeCaption] = useState(caption);
    const [recipeBody, setRecipeBody] = useState(body);
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setRecipeCaption(caption);
        setRecipeBody(body);
    }, [caption, body]);

    const headerChange = (caption: string) => setRecipeCaption(caption);

    const editHandler = (isEdit: boolean) => setEditMode(isEdit);

    const bodyChange = (body: string) => setRecipeBody(body);

    if (status.type === RecipeMainStatus.START_PAGE) {
        return <h1 className="recipe-main-wrapper__header">Start Page</h1>;
    }

    if (status.type === RecipeMainStatus.LOADING) {
        return <>Loading...</>;
    }

    if (status.type === RecipeMainStatus.ERROR) {
        return <>Error</>;
    }

    return (
        <div className="recipe-main-wrapper__wrapper">
            <RecipeMainHeader header={recipeCaption} headerChange={headerChange} editHandler={editHandler} />
            <RecipeMainBody body={recipeBody} bodyChange={bodyChange} isEdit={editMode} />
        </div>
    );
};

export default RecipeMainWrapper;
