// import "./NavFuture.css";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// // get our fontawesome imports
// import "@fortawesome/free-solid-svg-icons";
// import Freetiles from "./FreeTiles";
// function App() {
//   const [navToggle, setavToggle] = useState(false);
//   const toggleNav = () => {
//     document.getElementById("wrapperbody").dataset.nav =
//       document.getElementById("wrapperbody").dataset.nav === "true"
//         ? "false"
//         : "true";
//     document.getElementById("test").dataset.nav =
//       document.getElementById("test").dataset.nav === "true" ? "false" : "true";
//   };
//   useEffect(() => {
//     const menu = document.getElementById("menu");
//     Array.from(document.getElementsByClassName("menu-item")).forEach(
//       (item, index) => {
//         item.onmouseover = () => {
//           menu.style.setProperty("--active-index", index);
//         };
//       }
//     );
//   }, [navToggle]);

//   return (
//     <>
//       <div id="wrapperbody">
//         <div id="menu">
//           <div id="menu-items">
//             {" "}
//             <div className="menu-item">
//               {" "}
//               <Link to="/" style={{ color: "white" }} onClick={toggleNav}>
//                 Home{" "}
//               </Link>
//             </div>{" "}
//             <div className="menu-item">
//               {" "}
//               <Link to="/free" style={{ color: "white" }} onClick={toggleNav}>
//                 Tools{" "}
//               </Link>
//             </div>
//             <div className="menu-item">
//               <Link to="/links" style={{ color: "white" }} onClick={toggleNav}>
//                 Links
//               </Link>
//             </div>
//             <div className="menu-item">Music</div>
//           </div>
//           <div class="scanlines"></div>
//           <div id="menu-background-pattern"></div>
//           <div id="menu-background-image"></div>

//           <p class="subtitle">dev life</p>
//           {/* <Freetiles />{" "} */}
//         </div>
//       </div>
//       <div id="test">
//         <button id="nav-toggle" type="button" onClick={toggleNav}>
//           <i className="open fa fa-close"></i>{" "}
//           <i className="close fa fa-bars"></i>
//         </button>
//       </div>
//     </>
//   );
// }

// export default App;
