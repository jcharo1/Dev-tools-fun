import { useEffect } from "react";
import "./Home.scss";
function Freetiles() {
  useEffect(() => {}, []);

  return (
    <div style={{ background: "white" }}>
      {" "}
      <div class="buttons">
        <button class="btn lg red neu">
          <i class="fa fa-heart"></i>
        </button>
        <button class="btn lg neu">
          <i class="fa fa-backward"></i>
        </button>
        <button class="btn lg neu">
          <i class="fa fa-play"></i>
        </button>
        <button class="btn lg neu">
          <i class="fa fa-forward"></i>
        </button>
      </div>
      <div class="track neu">
        <div></div>
      </div>
    </div>
  );
}

export default Freetiles;
