import React from "react";
import { Link } from "react-router-dom";
import {
  AppSvg,
  ProfessionalWomenSvg,
  TeamSvg,
  PersonalGrowth,
  DrumSetSvg,
} from "../../../assets/Images";

/* Assets Import */
const Home = () => {
  return (
    <main className="grid-homepage padding-sml">
      <div className="grid-homepage-hero grid-col-1 pc-grid-col-2--50-50">
        <div className="flex-center">
          <div className="padding-lrg text-align-center">
            <h1 className="fs-lrg">Vault</h1>
            <p>There is always one more thing to learn</p>
          </div>
        </div>
        <div>
          <Link to="">
            <img
              className="image-resp"
              src={ProfessionalWomenSvg}
              alt="Business Girl Wearing Glasses"
            />
          </Link>
        </div>
      </div>
      <div className="grid-homepage-nav courses-category grid-center grid-col-4 padding-sml mob-grid-2-50-50 mob-grid-col-1">
        <div className="courses-category-image-container">
          <img
            className="image-resp min-width-120px"
            src={TeamSvg}
            alt="team"
          />
          <a
            href="./screens/product-listing-page/index.html"
            className="pos-abs-bottom light-txt-dark-bg"
          >
            Business
          </a>
        </div>
        <div className="courses-category-image-container">
          <img
            className="image-resp min-width-120px"
            src={DrumSetSvg}
            alt="instruments"
          />
          <a
            href="./screens/product-listing-page/index.html"
            className="pos-abs-bottom light-txt-dark-bg"
          >
            Music
          </a>
        </div>
        <div className="courses-category-image-container">
          <img
            className="image-resp min-width-120px"
            src={AppSvg}
            alt="brainstorming ideas"
          />
          <a
            href="./screens/product-listing-page/index.html"
            className="pos-abs-bottom light-txt-dark-bg"
          >
            Development
          </a>
        </div>
        <div className="courses-category-image-container">
          <img
            className="image-resp min-width-120px"
            src={PersonalGrowth}
            alt="brainstorming ideas"
          />
          <a
            href="./screens/product-listing-page/index.html"
            className="pos-abs-bottom light-txt-dark-bg"
          >
            Personal Growth
          </a>
        </div>
      </div>

      <div className="grid-homepage-card-one flex-f-start padding-sml curved-border box-shadow-uni">
        <div className="card-showcase curved-border">
          <div className="image-container">
            <img
              className="image-resp curved-border-top"
              src="https://codingindian.com/wp-content/uploads/2021/06/1_uZ094Kxwv_qLih3tn9AZ6Q.jpeg"
              alt="Quincy Larson"
            />
            <div className="overlay-wrapper curved-border-top fs-lrg">
              <a href="#" className="btn-icon-outlined">
                <i className="fas fa-play-circle"></i>
              </a>
            </div>
            <span className="text-badge pos-abs-top-left blip-animation">
              30%<span className="fs-sml"> off</span>
            </span>
          </div>
          <div className="fi-btn-container flex-spc-arnd curved-border-bottom">
            <button>
              <span className="btn-icon-outlined">
                <i className="fas fa-heart"></i>
              </span>
            </button>
            <button>
              <span className="btn-icon-outlined">
                <i className="fas fa-bookmark"></i>
              </span>
            </button>
            <button>
              <span className="btn-icon-outlined">
                <i className="fas fa-share"></i>
              </span>
            </button>
          </div>
        </div>
        <div>
          <h2 className="headline-typography">Modern JavaScript</h2>
          <h3 className="card-subtitle">By-Jordan Walke</h3>
          <div className="rating">
            <span className="rating-positive">
              <i className="fas fa-star"></i>
            </span>
            <span className="rating-positive">
              <i className="fas fa-star"></i>
            </span>
            <span className="rating-positive">
              <i className="fas fa-star"></i>
            </span>
            <span className="rating-positive">
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span className="fs-sml card-subtitle">4.0(300)</span>
          </div>
          <div className="fi-btn-container flex-f-start flex-gap-mdm">
            <button className="btn btn-cta light-text-color">
              <span>Enroll</span>
            </button>
            <button className="btn btn-outlined">About</button>
          </div>
        </div>
      </div>
      <div className="grid-homepage-card-two flex-f-start padding-sml curved-border box-shadow-uni">
        <div className="card-showcase curved-border">
          <div className="image-container">
            <img
              className="image-resp curved-border-top"
              src="https://c1.wallpaperflare.com/preview/875/115/662/board-graphic-chalk-marketing-schema-chart.jpg"
              alt="Market Growth"
            />
            <div className="overlay-wrapper curved-border-top fs-lrg">
              <a href="#" className="btn-icon-outlined">
                <i className="fas fa-play"></i>
              </a>
            </div>
            <span className="text-badge pos-abs-top-left">Bestseller</span>
          </div>
          <div className="fi-btn-container flex-spc-arnd curved-border-bottom">
            <button>
              <span className="btn-icon-outlined">
                <i className="fas fa-heart"></i>
              </span>
            </button>
            <button>
              <span className="btn-icon-outlined">
                <i className="fas fa-bookmark"></i>
              </span>
            </button>
            <button>
              <span className="btn-icon-outlined">
                <i className="fas fa-share"></i>
              </span>
            </button>
          </div>
        </div>
        <div>
          <h2 className="headline-typography">Marketing Best Practices</h2>
          <h3 className="card-subtitle">By Neil Patel</h3>
          <div className="rating">
            <span className="rating-positive">
              <i className="fas fa-star"></i>
            </span>
            <span className="rating-positive">
              <i className="fas fa-star"></i>
            </span>
            <span className="rating-positive">
              <i className="fas fa-star"></i>
            </span>
            <span className="rating-positive">
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-star"></i>
            </span>
            <span className="fs-sml card-subtitle">4.0(300)</span>
          </div>
          <div className="fi-btn-container flex-f-start flex-gap-mdm">
            <button className="btn btn-cta light-text-color">
              <span>Enroll</span>
            </button>
            <button className="btn btn-outlined">About</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
