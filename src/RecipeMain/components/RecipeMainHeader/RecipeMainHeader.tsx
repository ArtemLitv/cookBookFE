import React, { FC, ChangeEvent, MouseEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PenIcon from "../../../public/icons/Pen";
import { changeMode } from "../../../slicers/editMode.slice";
import "./RecipeMainHeader.scss";

type RecipeMainHeaderProps = {
  header: string;
  headerChange: (header: string) => void;
  editHandler: (isEdit: boolean) => void;
};

const RecipeMainHeader: FC<RecipeMainHeaderProps> = (props) => {
  const { header, headerChange, editHandler } = props;
  const [headerValue, setHeaderValue] = useState(header);
  const [isEdit, setIsEdit] = useState(false);

  const dispatch = useDispatch();

  // TODO: why it called 3 time if select 1 -> 2 -> 1 at last change?
  // console.log("header", header);
  // console.log("headerValue", headerValue);
  useEffect(() => {
    setHeaderValue(header);
  }, [header]);

  const onValueInput = (event: ChangeEvent<HTMLInputElement>) => {
    setHeaderValue(event.target.value);
  };

  const onEditClick = () => {
    setIsEdit((currentState) => !currentState);
    if (isEdit) {
      headerChange(headerValue);
    }
    editHandler(isEdit);
    dispatch(changeMode(!isEdit));
  };

  const content = (
    <div className={`recipe-main-header__container ${isEdit && "_hide"}`}>
      <h1 className="recipe-main-header__header">{headerValue}</h1>
      <button className="recipe-main-header__button" onClick={onEditClick}>
        <PenIcon className="recipe-main-header__icon" width="16" height="16" />
      </button>
    </div>
  );

  const editContent = (
    <div className={`recipe-main-header__container ${!isEdit && "_hide"}`}>
      <input
        className="recipe-main-header__header _input"
        value={headerValue}
        onInput={onValueInput}
      />
      <button
        className="recipe-main-header__button _no-hide"
        onClick={onEditClick}
      >
        <PenIcon className="recipe-main-header__icon" width="16" height="16" />
      </button>
    </div>
  );

  return (
    <div className="recipe-main-header__wrapper">
      {isEdit ? editContent : content}
    </div>
  );
};

export default React.memo(RecipeMainHeader);
