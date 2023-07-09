"use client";
import listActionBarStyles from "@/styles/ListActionBar.module.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Input from ".//form/input";
import { useState } from "react";

export default function ListActionBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

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
    </div>
  );
}
