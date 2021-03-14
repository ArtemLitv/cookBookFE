import React, { FC, ChangeEvent } from "react";
// import { isEditModeInVar } from "../../../cache";
import "./RecipeMainBody.scss";

type RecipeMainBodyProps = {
  body: string;
  isEdit: boolean
  bodyChange: (body: string) => void;
};

const RecipeMainBody: FC<RecipeMainBodyProps> = (props) => {
  const { body, isEdit, bodyChange } = props;

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    bodyChange(event.target.value);
  };

  if (isEdit) {
    return (
      <>
        <h2>{isEdit.toString()}</h2>
        <input type="textarea" onInput={inputHandler} />
      </>
    );
  }

  return (
    <>
      <h2>{isEdit.toString()}</h2>
      <p>{body}</p>
    </>
  );
};

export default RecipeMainBody;
