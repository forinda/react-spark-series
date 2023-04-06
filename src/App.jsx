import React from "react";
import "./App.css"

const App = () => {
  // const imageLink = "https://v1.tailwindcss.com/img/card-top.jpg"
  return (
    <div className="page-wrapper">
      <div className="card-component">
        <img
          src="https://v1.tailwindcss.com/img/card-top.jpg"
          alt=""
          className="card-image"
        />
        <div className="card-content">
          <h1>The coldest sunset</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            magnam! Consequatur soluta accusamus dolores reprehenderit similique
            error quae quasi quibusdam eum impedit quas est aut, magnam dolorum
            in saepe harum?
          </p>
          <div className="tags">
            <span className="tag">#photograpy</span>
            <span className="tag">#travel</span>
            <span className="tag">#winter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
