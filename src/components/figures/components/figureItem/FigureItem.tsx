import React from "react";
import "./FigureItem.css";
import { IFigure } from "../../../../interfaces/IFigures";

interface IProps {
  figureItem: IFigure;
  id?: number;
}

export const FigureItem = ({ figureItem, id }: IProps) => {
  //console.log("figureItemIndex", id);
  const theme = figureItem.dark ? "dark" : "light";
  const figuresClass = figureItem.form + " " + figureItem.color + " " + theme;

  return (
    <div key={id} className="figure">
      <div>
        <div className={figuresClass}></div>
      </div>
    </div>
  );
};
