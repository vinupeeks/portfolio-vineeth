// src/components/PageNotFoundMinimal.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const PageNotFoundMinimal = () => {
  const navigate = useNavigate();

  const goBackHome = () => {
    navigate("/");
  };

  return (
    <div className="body404">
  <div id='notfound'>
      <div className='notfound'>
          <div className='notfound-404'>
              <h1 id='h1404'>404</h1>
              <h2 id='h2404'>Page not found</h2>

          </div>
          <a id='errorbutton' onClick={goBackHome} href="/">Return To Home</a>
      </div>
  </div>
  </div>
)
};

export default PageNotFoundMinimal;