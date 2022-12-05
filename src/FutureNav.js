import "./NavFuture.css";
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
// get our fontawesome imports
import "@fortawesome/free-solid-svg-icons";

function App() {
  const [navToggle, setavToggle] = useState(false);
  const toggleNav = () => {
    document.getElementById("wrapperbody").dataset.nav =
      document.getElementById("wrapperbody").dataset.nav === "true"
        ? "false"
        : "true";
  };
  useEffect(() => {
    const menu = document.getElementById("menu");
    Array.from(document.getElementsByClassName("menu-item")).forEach(
      (item, index) => {
        item.onmouseover = () => {
          menu.style.setProperty("--active-index", index);
        };
      }
    );
  }, [navToggle]);

  return (
    <>
      <div id="wrapperbody">
        <div id="menu">
          <div id="menu-items">
            <Link to="/">
              {" "}
              <div className="menu-item">Home</div>
            </Link>
            <Link to="/free">
              {" "}
              <div className="menu-item">Tools</div>
            </Link>
            <Link to="/Page1">
              {" "}
              <div className="menu-item">Music</div>
            </Link>

            <div className="menu-item"> Links</div>
          </div>

          <div id="menu-background-pattern"></div>
          <div id="menu-background-image"></div>
        </div>
      </div>{" "}
      <button id="nav-toggle" type="button" onClick={toggleNav}>
        <i className="open fa fa-car"></i>
        <i className="close fa fa-book"></i>
      </button>
    </>
  );
}

export default App;
