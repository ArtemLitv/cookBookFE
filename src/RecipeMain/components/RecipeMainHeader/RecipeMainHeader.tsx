import React, { FC, ChangeEvent, MouseEvent, useState } from "react";
import PenIcon from "../../../public/icons/Pen";
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

  const onValueInput = (event: ChangeEvent<HTMLInputElement>) => {
    setHeaderValue(event.target.value);
  };

  const onEditClick = () => {
    setIsEdit((currentState) => !currentState);
    if (isEdit) {
      headerChange(headerValue);
    }
    editHandler(isEdit);
  };

  return (
    <div className="recipe-main-header__wrapper">
      <h1>{isEdit.toString()}</h1>

      <div className={`recipe-main-header__container ${isEdit && "_hide"}`}>
        <h1 className="recipe-main-header__header">{headerValue}</h1>
        <button className="recipe-main-header__button" onClick={onEditClick}>
          <PenIcon
            className="recipe-main-header__icon"
            width="16"
            height="16"
          />
        </button>
      </div>

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
          <PenIcon
            className="recipe-main-header__icon"
            width="16"
            height="16"
          />
        </button>
      </div>
    </div>
  );
};

export default RecipeMainHeader;
