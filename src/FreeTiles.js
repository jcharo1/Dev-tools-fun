import "./FreeTiles.scss";
import { useEffect } from "react";

function Freetiles() {
  useEffect(() => {}, []);

  return (
    <>
      {" "}
      <div class="container">
        <div class="glitch" data-text="ELISABÉTH">
          ELISABÉTH
        </div>
        <div class="glow">ELISABÉTH</div>
        <p class="subtitle">IMPRACTICAL DEVELOPER</p>
      </div>
      <div class="scanlines"></div>
    </>
  );
}

export default Freetiles;
