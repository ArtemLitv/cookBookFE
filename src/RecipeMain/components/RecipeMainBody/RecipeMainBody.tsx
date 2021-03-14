import React, { FC, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
// import { isEditModeInVar } from "../../../cache";
import "./RecipeMainBody.scss";

type RecipeMainBodyProps = {
  body: string;
  isEdit: boolean;
  bodyChange: (body: string) => void;
};

const RecipeMainBody: FC<RecipeMainBodyProps> = (props) => {
  const { body, isEdit, bodyChange } = props;
  const editMode = useSelector((state: RootState) => state.editMode.editMode);

  const inputHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    bodyChange(event.target.value);
  };

  const content = <p>{body}</p>;
  const editContent = <textarea value={body} onInput={inputHandler}></textarea>;

  return <>{editMode ? editContent : content}</>;
};

export default RecipeMainBody;
