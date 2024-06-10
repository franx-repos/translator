import React from "react";
import useFetchData from "./UseFetchData";

function Translator() {
  return (
    <>

      <h1>Translator</h1>

      <header>
        <h1>Simple Dictionary</h1>
        <p>make your vocabulary strong and know more about the World of Words</p>
      </header>

      <div>
        <input type="text" />
        <button>Click</button>
      </div>

      <div>
        <h3>Meanings & Definition:</h3>
        <h3>Examples:</h3>
        <h3>Noun:</h3>
        <h3>Verb:</h3>
        <h3>Adjective:</h3>
      </div>

      <footer>
        <p>copy write reserved @ xyz.dictionary 2024</p>
      </footer>

    </>
  );
}

export default Translator;
