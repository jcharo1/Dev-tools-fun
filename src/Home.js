import "./Home.css";
import { useEffect } from "react";
import FutureNav from "./FutureNav";
function Home() {
  useEffect(() => {}, []);

  return (
    <div>
      <div class="container">
        <h1>
          UPDOG
          <small>?</small>
        </h1>
      </div>
      <FutureNav />{" "}
    </div>
  );
}
export default Home;
