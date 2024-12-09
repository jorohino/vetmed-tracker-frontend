import { React } from "react";
import "./Data.css";
import DataHeader from "../DataHeader/DataHeader";
import DataCardList from "../DataCardList/DataCardList";

function Data({ onCardClick }) {
  return (
    <>
      <DataHeader />
      <DataCardList onCardClick={onCardClick}></DataCardList>
    </>
  );
}

export default Data;
