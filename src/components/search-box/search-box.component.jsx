import React from "react";
import './search-box.styles.css'

export default function SearchBox({ className, placeholder, onChangeHandler }) {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}
