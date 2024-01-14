"use client";

import React, { useState } from "react";
import SearchBar from "./Searchbar";
import CustomFilter from "./CustomFilter";
import { fuels, yearsOfProduction } from "@/constants";

const SearchBox = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  return (
    <div className="home__filters">
      <SearchBar
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        model={model}
        setModel={setModel}
      />

      <div className="home__filter-container">
        <CustomFilter
          title="fuel"
          options={fuels}
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          model={model}
          setModel={setModel}
        />
        <CustomFilter
          title="year"
          options={yearsOfProduction}
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          model={model}
          setModel={setModel}
        />
      </div>
    </div>
  );
};

export default SearchBox;
