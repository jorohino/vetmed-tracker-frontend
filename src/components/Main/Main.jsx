import { React } from "react";
import "./Main.css";
import Header from "../Header/Header";
import FeaturedData from "../FeaturedData/FeaturedData";
import About from "../About/About";
import Modal from "../Modal/Modal";

function Main({}) {
  return (
    <>
      <Header />
      <main className="main">
        <FeaturedData />
        <About />
      </main>
      <Modal></Modal>
    </>
  );
}

export default Main;
