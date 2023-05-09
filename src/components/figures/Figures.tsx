import { useState, useEffect } from "react";
import axios from "axios";

import "./Figures.css";
import { IFigure } from "../../interfaces/IFigures";
import { FigureItem } from "./components/figureItem/FigureItem";
import { HeaderFilter } from "../headerFilter/HeaderFilter";
import { Navbar } from "../navigationBar/Navbar";

function Figures() {
  const [data, setData] = useState<IFigure[]>([]);
  const [filterData, setFilterData] = useState<IFigure[]>([]);

  const filterItems = (typeFilter: number) => {
    switch (typeFilter) {
      case 0:
        return setFilterData(data);
      case 1:
        return setFilterData(data.filter((item) => item.form === "square"));
      case 2:
        return setFilterData(data.filter((item) => item.form === "circle"));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/dataBase.json");
      setData(result.data);
      setFilterData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <HeaderFilter checkboxChanges={filterItems} />
      <div className="block">
        {filterData.map((item, index) => (
          <FigureItem key={index} figureItem={item} id={index} />
        ))}
      </div>
    </div>
  );
}

export default Figures;
