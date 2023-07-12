"use client";
import listActionBarStyles from "@/styles/ListActionBar.module.css";
import {
  faSearch,
  faGlobeAmericas,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Input from ".//form/input";
import Select from ".//form/select";
import { useState } from "react";

export default function ListActionBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  const regions = [
    {
      value: "Africa",
    },
    {
      value: "Americas",
    },
    {
      value: "Antarctica",
    },
    {
      value: "Asia",
    },
    {
      value: "Europe",
    },
    {
      value: "Oceania",
    },
  ];

  return (
    <div className={listActionBarStyles.listActionBar}>
      <Input
        name="search"
        icon={faSearch}
        onChange={(e) => {
          props.getSearchTerm(e.target.value);
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
      >
        Search a country
      </Input>
      {/* <Select
        name="region"
        onChange={(e) => {
          props.getRegion(e.target.value);
          setRegion(e.target.value);
        }}
        value={region}
        icon={faGlobeAmericas}
        options={regions}
      >
        Region
      </Select> */}
    </div>
  );
}
