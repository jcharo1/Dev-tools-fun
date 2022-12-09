import "./Links.scss";
import { useEffect } from "react";
import FutureNav from "./NavFuture";
import pic from "./img/navmenu.png";
import readRobot from "./img/read-robot.png";
import genRobot from "./img/robot-gen.png";
import robotTools from "./img/robot-tools.png";
function Home() {
  /* -- Carousel Navigation -- */

  let activeIndex = 0;

  const slides = document.getElementsByTagName("article");

  const handleLeftClick = () => {
    const nextIndex =
      activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = document.querySelector(
        `[data-index="${activeIndex}"]`
      ),
      nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "after";

    nextSlide.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };

  const handleRightClick = () => {
    const nextIndex =
      activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(
        `[data-index="${activeIndex}"]`
      ),
      nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before";

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };

  /* -- Mobile Nav Toggle -- */

  const nav = document.querySelector("nav");

  const handleNavToggle = () => {
    let nav = document.querySelector("nav");
    console.log(nav);
    nav.dataset.transitionable = "true";

    nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
  };

  window.matchMedia("(max-width: 800px)").onchange = (e) => {
    let nav = document.querySelector("nav");
    nav.dataset.transitionable = "false";

    nav.dataset.toggled = "false";
  };
  useEffect(() => {}, []);

  return (
    <div>
      <div className="container-3">
        <nav data-toggled="false" data-transitionable="false">
          <div id="nav-logo-section" class="nav-section">
            <a href="/">
              <img
                style={{ width: "50px", backgroundColor: "red" }}
                src={pic}
              ></img>
            </a>
          </div>
          <div id="nav-mobile-section">
            <div id="nav-link-section" className="nav-section">
              <a href="https://leetcode.com/">LeetCode</a>
              <a href="https://cssbattle.dev/">CSSBattle</a>
            </div>
            <div id="nav-social-section" class="nav-section">
              {/* <a href="#">
                <i class="fa fa-twitter"></i>
              </a> */}
              <a href="https://www.youtube.com" target="_blank">
                <i class="fa fa-youtube"></i>
              </a>
              <a href="#">
                <i class="fa  fa-codepen"></i>
              </a>
            </div>
            <div id="nav-contact-section" class="nav-section">
              <a href="https://justin.charo.gg">GET IN TOUCH</a>
            </div>
          </div>
          <button
            id="nav-toggle-button1"
            type="button"
            onClick={handleNavToggle}
          >
            <span>Menu</span>
            <i class="fa fa-bars"></i>
          </button>
        </nav>

        <main>
          <article data-index="0" data-status="active">
            <div
              id="mycustomhover"
              class="article-image-section article-section"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "contain",
                backgroundImage: `url(${genRobot})`,
              }}
            ></div>

            <div class="article-description-section article-section">
              <a href="https://bgjar.com/">
                <h3>Svg Background Generator</h3>
              </a>
              <br></br>
              <a href="https://www.fontsquirrel.com/tools/webfont-generator">
                <h3>WebKit FontGenerator</h3>
              </a>
            </div>
            <div class="article-title-section article-section">
              <h2>CSS Generators</h2>
              {/* <i class="fa fa-plus"></i> */}
            </div>
            <div class="article-nav-section article-section">
              <button
                class="article-nav-button"
                type="button"
                onClick={handleLeftClick}
              >
                <i class="fa fa-arrow-left"></i>
              </button>
              <button
                class="article-nav-button"
                type="button"
                onClick={handleRightClick}
              >
                <i class="fa fa-arrow-right"></i>
              </button>
            </div>
          </article>
          <article data-index="1" data-status="inactive">
            <div
              id="mycustomhover"
              class="article-image-section article-section"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "contain",
                backgroundImage: `url(${robotTools})`,
              }}
            ></div>
            <div class="article-description-section article-section">
              <a href="https://imagecolorpicker.com/color-code/8b0000">
                <h3> Color Combos</h3>
              </a>
              <br></br>
              <a href="https://pixlr.com/remove-background/">
                <h3>BG Remover</h3>
              </a>
            </div>
            <div class="article-title-section article-section">
              <h2>CSS Color Tools</h2>
              {/* <i class="fa fa-plus"></i> */}
            </div>
            <div class="article-nav-section article-section">
              <button
                class="article-nav-button"
                type="button"
                onClick={handleLeftClick}
              >
                <i class="fa fa-arrow-left"></i>
              </button>
              <button
                class="article-nav-button"
                type="button"
                onClick={handleRightClick}
              >
                <i class="fa fa-arrow-right"></i>
              </button>
            </div>
          </article>
          <article data-index="2" data-status="inactive">
            <div
              id="mycustomhover"
              class="article-image-section article-section"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                backgroundSize: "contain",
                backgroundImage: `url(${readRobot})`,
              }}
            ></div>
            <div class="article-description-section article-section">
              <a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units">
                <h3>CSS Values and Units</h3>
              </a>
              <br></br>
              <a href="https://css-tricks.com/a-complete-guide-to-css-media-queries/">
                <h3>CSS Media Queries</h3>
              </a>{" "}
              <br></br>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/z-index">
                <h3>Z-Index</h3>
              </a>
              <br></br>
              <a href="https://evanminto.com/blog/intrinsically-responsive-css-grid-minmax-min/">
                <h3>Grid Min-max</h3>
              </a>
            </div>
            <div class="article-title-section article-section">
              <h2>CSS Articles</h2>
              {/* <i class="fa fa-plus"></i> */}
            </div>
            <div class="article-nav-section article-section">
              <button
                class="article-nav-button"
                type="button"
                onClick={handleLeftClick}
              >
                <i class="fa fa-arrow-left"></i>
              </button>
              <button
                class="article-nav-button"
                type="button"
                onClick={handleRightClick}
              >
                <i class="fa fa-arrow-right"></i>
              </button>
            </div>
          </article>
          {/* <article data-index="3" data-status="inactive">
            <div class="article-image-section article-section"></div>
            <div class="article-description-section article-section">
              <p>hello</p>
            </div>
            <div class="article-title-section article-section">
              <h2>CSS LINKS</h2>
              <i class="fa fa-plus"></i>
            </div>
            <div class="article-nav-section article-section">
              <button
                class="article-nav-button"
                type="button"
                onClick={handleLeftClick}
              >
                <i class="fa fa-arrow-left"></i>
              </button>
              <button
                class="article-nav-button"
                type="button"
                onClick={handleRightClick}
              >
                <i class="fa fa-arrow-right"></i>
              </button>
            </div>
          </article> */}
        </main>
        {/* <nav>
          <div id="nav-logo-section" className="nav-section">
            <a href="#">
              <i className="fa fa-book"></i>
            </a>
          </div>
          <div id="nav-links-section" className="nav-section">
            <a href="#">ABOUT</a>
            <a href="#">WORK</a>
          </div>
          <div id="nav-social-section" className="nav-section">
            <a href="#">
              <i className="fa fa-close"></i>
            </a>
            <a href="#">
              <i className="fa fa-car"></i>
            </a>
          </div>
          <div id="nav-contact-section" className="nav-section">
            <a href="#">Contact Me</a>
          </div>
        </nav>
        <main>
          <article>
            <div className="article-image-section article-section">hellow</div>

            <div className="article-title-section article-section"></div>
            <div className="article-description-section article-section">
              <p> Descriptive Content will be </p>
            </div>
            <div className="article-nav-section article-section"></div>
          </article>
          <article>
            {" "}
            <div className="article-image-section article-section">hellow</div>
            <div className="article-description-section article-section"></div>
            <div className="article-title-section article-section"></div>
            <div className="article-nav-section article-section"></div>
          </article>
          <article>
            {" "}
            <div className="article-image-section article-section">hellow</div>
            <div className="article-description-section article-section"></div>
            <div className="article-title-section article-section"></div>
            <div className="article-nav-section article-section"></div>
          </article>
          <article>
            {" "}
            <div className="article-image-section article-section">hellow</div>
            <div className="article-description-section article-section"></div>
            <div className="article-title-section article-section"></div>
            <div className="article-nav-section article-section"></div>
          </article>
        </main> */}
      </div>
    </div>
  );
}
export default Home;
