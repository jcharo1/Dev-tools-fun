import { useEffect } from "react";
import "./Home.scss";
import { useToast } from "./ToastProvider";

function Freetiles() {
  useEffect(() => {}, []);
  const { addToast } = useToast();

  const handleClick = () => {
    addToast("This is a toast message!");
  };
  return (
    <div style={{ background: "white" }}>
      <button onClick={handleClick}>Show Toast</button>{" "}
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
