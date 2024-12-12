import { React } from "react";
import "./Main.css";
import Header from "../Header/Header";
import About from "../About/About";
import Modal from "../Modal/Modal";

function Main({ onCardClick }) {
  return (
    <>
      <Header />
      <main className="main">
        <About />
      </main>
      <Modal></Modal>
    </>
  );
}

export default Main;
