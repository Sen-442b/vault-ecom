import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../global-context/product-context";

/* Assets Import */
import {
  AppSvg,
  ProfessionalWomenSvg,
  TeamSvg,
  PersonalGrowth,
  DrumSetSvg,
} from "../../../assets/Images";

const Home = () => {
  const { state } = useProducts();

  const { products } = state;

  const getFeaturedProducts = (productsArr, featType) => {
    if (featType === "high-discount") {
      return productsArr.reduce((acc, cv) =>
        ((cv.prevPrice - cv.price) / cv.prevPrice) * 100 >
        ((acc.prevPrice - acc.price) / acc.prevPrice) * 100
          ? cv
          : acc
      );
    } else if (featType === "high-rating") {
      return productsArr.find((item) => item.rating === 5);
    }
    return productsArr;
  };
  const featByDisc =
    products.length !== 0
      ? getFeaturedProducts(products, "high-discount")
      : {
          title: "",
          teacher: "",
          price: "",
          prevPrice: "",
          image: "",
          rating: "",
        };

  const featByRating =
    products.length !== 0
      ? getFeaturedProducts(products, "high-rating")
      : {
          title: "",
          teacher: "",
          price: "",
          prevPrice: "",
          image: "",
          rating: "",
        };
  const { title, teacher, price, prevPrice, image, rating } = featByDisc;
  return (
    <main className="grid-homepage padding-sml">
      <div className="grid-homepage-hero grid-col-1 pc-grid-col-2--50-50">
        <div className="flex-center">
          <div className="padding-lrg text-align-center">
            <h1 className="fs-lrg">Vault</h1>
            <p>There is always one more thing to learn</p>
            <button className="btn btn-cta">
              <Link to="/products">Explore</Link>
            </button>
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
          <Link
            to="/products"
            state={{ selectedCategory: "Writing" }}
            className="pos-abs-bottom light-txt-dark-bg"
          >
            Writing
          </Link>
        </div>
        <div className="courses-category-image-container">
          <img
            className="image-resp min-width-120px"
            src={DrumSetSvg}
            alt="instruments"
          />
          <Link
            to="/products"
            state={{ selectedCategory: "Music" }}
            className="pos-abs-bottom light-txt-dark-bg"
          >
            Music
          </Link>
        </div>
        <div className="courses-category-image-container">
          <img
            className="image-resp min-width-120px"
            src={AppSvg}
            alt="brainstorming ideas"
          />
          <Link
            to="/products"
            state={{ selectedCategory: "Development" }}
            className="pos-abs-bottom light-txt-dark-bg"
          >
            Development
          </Link>
        </div>
        <div className="courses-category-image-container">
          <img
            className="image-resp min-width-120px"
            src={PersonalGrowth}
            alt="brainstorming ideas"
          />
          <Link
            to="/products"
            state={{ selectedCategory: "Personal Growth" }}
            className="pos-abs-bottom light-txt-dark-bg"
          >
            Personal Growth
          </Link>
        </div>
      </div>

      {products.length !== 0 && (
        <div className="grid-homepage-card-one flex-f-start padding-sml curved-border box-shadow-uni grid-col-2--50-50">
          <div className="card-showcase curved-border">
            <div className="image-container">
              <img
                className="image-resp curved-border-top"
                src={image}
                alt={title}
              />
              <div className="overlay-wrapper curved-border-top fs-lrg">
                <a href="#" className="btn-icon-outlined">
                  <i className="fas fa-play-circle"></i>
                </a>
              </div>
              <span className="text-badge pos-abs-top-left blip-animation">
                {(((prevPrice - price) / prevPrice) * 100).toFixed(0)}%
                <span className="fs-sml"> off</span>
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
          <div className="text-align-left">
            <h2 className="headline-typography">{title}</h2>
            <h3 className="card-subtitle">By-{teacher}</h3>
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
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span>
                <i className="fas fa-star"></i>
              </span>
              <span className="fs-sml card-subtitle">{rating}</span>
            </div>
            <div className="fi-btn-container flex-f-start flex-gap-mdm flex-wrap">
              <button className="btn btn-cta light-text-color">
                Add to Cart
              </button>
              <button className="btn btn-outlined">About</button>
            </div>
          </div>
        </div>
      )}

      {products.length !== 0 && (
        <div className="grid-homepage-card-two flex-f-start padding-sml curved-border box-shadow-uni grid-col-2--50-50">
          <div className="card-showcase curved-border">
            <div className="image-container">
              <img
                className="image-resp curved-border-top"
                src={featByRating.image}
                alt="Market Growth"
              />
              <div className="overlay-wrapper curved-border-top fs-lrg">
                <a href="#" className="btn-icon-outlined">
                  <i className="fas fa-play"></i>
                </a>
              </div>
              <span className="text-badge pos-abs-top-left">Best Rated</span>
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
          <div className="text-align-left">
            <h2 className="headline-typography">{featByRating.title}</h2>
            <h3 className="card-subtitle">By{featByRating.teacher}</h3>
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
              <span className="rating-positive">
                <i className="fas fa-star"></i>
              </span>
              <span className="fs-sml card-subtitle">
                {featByRating.rating}
              </span>
            </div>
            <div className="fi-btn-container flex-f-start flex-gap-mdm flex-wrap">
              <button className="btn btn-cta light-text-color">
                <span>Add to Cart</span>
              </button>
              <button className="btn btn-outlined">About</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;

//NOT A REDUNDANT COMMENT

/*     
     {getFeaturedProducts(products, "high-discount") &&
        getFeaturedProducts(products, "high-discount")?.map((item) => {
          const { title, teacher, price, prevPrice, image, rating } = item;
          return (
            <div className="grid-homepage-card-one flex-f-start padding-sml curved-border box-shadow-uni">
              <div className="card-showcase curved-border">
                <div className="image-container">
                  <img
                    className="image-resp curved-border-top"
                    src={image}
                    alt={title}
                  />
                  <div className="overlay-wrapper curved-border-top fs-lrg">
                    <a href="#" className="btn-icon-outlined">
                      <i className="fas fa-play-circle"></i>
                    </a>
                  </div>
                  <span className="text-badge pos-abs-top-left blip-animation">
                    {((price / prevPrice) * 100).toFixed(0)}
                    <span className="fs-sml"> off</span>
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
              <div className="text-align-left">
                <h2 className="headline-typography">{title}</h2>
                <h3 className="card-subtitle">By-{teacher}</h3>
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
                  <span className="fs-sml card-subtitle">{rating}</span>
                </div>
                <div className="fi-btn-container flex-f-start flex-gap-mdm">
                  <button className="btn btn-cta light-text-color">
                    Add to Cart
                  </button>
                  <button className="btn btn-outlined">About</button>
                </div>
              </div>
            </div>
          );
        })}
*/
