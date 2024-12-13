import { React } from "react";
import "./Main.css";
import Header from "../Header/Header";
import About from "../About/About";

function Main({}) {
  return (
    <>
      <Header />
      <main className="main">
        <About />
      </main>
    </>
  );
}

export default Main;
