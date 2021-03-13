import React, { FC, ChangeEvent, MouseEvent, useState } from "react";
import PenIcon from "../../../public/icons/Pen";
import "./RecipeMainHeader.scss";

type RecipeMainHeaderProps = {
  header: string;
  headerChange: (header: string) => void;
};

const RecipeMainHeader: FC<RecipeMainHeaderProps> = ({ header, headerChange }) => {
  const [headerValue, setHeaderValue] = useState(header);
  const [visibleEditor, setVisibleEditor] = useState(false);

  const onValueInput = (event: ChangeEvent<HTMLInputElement>) => {
    setHeaderValue(event.target.value);
  };

  const onEditClick = (event: any) => {
    setVisibleEditor((currentState) => !currentState);
    if (visibleEditor) {
        console.log('>>>', visibleEditor)
        headerChange(headerValue);
    }
  };

  const onBlurInput = () => {
      setVisibleEditor(false);
      console.log('>>>')
      headerChange(headerValue);
  }

  return (
    <div className="recipe-main-header__wrapper">
      <div
        className={`recipe-main-header__container ${!visibleEditor || "_hide"}`}
      >
        <h1 className="recipe-main-header__header">{headerValue}</h1>
        <button className="recipe-main-header__button" onClick={onEditClick}>
          <PenIcon
            className="recipe-main-header__icon"
            width="16"
            height="16"
          />
        </button>
      </div>

      <div
        className={`recipe-main-header__container ${visibleEditor || "_hide"}`}
      >
        <input
          className="recipe-main-header__header _input"
          value={headerValue}
          onInput={onValueInput}
          onBlur={onBlurInput}
        />
        <button className="recipe-main-header__button" onClick={onEditClick}>
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
