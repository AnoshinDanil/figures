import { useState } from "react";
import "./HeaderFilter.css";

interface IProps {
  checkboxChanges: (typeFilter: number) => void;
}

export const HeaderFilter = ({ checkboxChanges }: IProps) => {
  const [checkboxSquare, setCheckboxSquare] = useState(false);
  const [checkboxCircle, setCheckboxCircle] = useState(false);

  console.log("checkboxSquare", checkboxSquare);
  console.log("checkboxCircle", checkboxCircle);

  return (
    <label>
      <span className="inputTitle">Квадраты</span>
      <input
        type="checkbox"
        checked={checkboxSquare}
        onClick={() => {
          console.log("checkboxSquare", checkboxSquare);
          const statusChecked = !checkboxSquare;
          setCheckboxSquare(statusChecked);
          checkboxChanges(checkboxCircle ? 0 : 1);
        }}
      />
      <span className="inputTitle">Круги</span>
      <input
        type="checkbox"
        checked={checkboxCircle}
        onChange={() => {
          const statusChecked = !checkboxCircle;
          setCheckboxCircle(statusChecked);
          checkboxChanges(checkboxSquare ? 0 : 2);
        }}
      />
    </label>
  );
};
