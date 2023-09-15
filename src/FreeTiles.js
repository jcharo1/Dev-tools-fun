import { useEffect } from "react";
import "./FreeTiles.scss";

const longLiveTheFunForLearning = "lets go 2023";

function Freetiles() {
  useEffect(() => {}, []);

  return (
    <>
      <div className="container-1">
        <div class="glitch" data-text="Justin Charo">
          Justin Charo
        </div>
        <div class="glow">Justin Charo</div>

        <div class="scanlines"></div>
      </div>
    </>
  );
}

export default Freetiles;
