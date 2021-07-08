import React, { useState } from "react";
import { Rate } from "antd";
import ChekDeliver from "./deliveryCheck";
import OfferAvailablity from "./offerAvailability";
import KeyFeatures from "./keyFeatures";

const ProductInfo = () => {
  const [color, setColor] = useState("/images/details/gallery.jpg");
  const [collapseColor, setCollapse] = useState(true);

  const colors = [
    "/images/product/GA-100BR-1A_JF.jpg",
    "/images/product/product-new-2.jpg",
    "/images/product/product-new-4.jpg",
  ];

  return (
    <div className="prodDetInfo">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <img src={color} alt="" />
          </div>
          <div className="col-lg-7">
            <h1 className="position-relative">
              EDIFICE EFR-569BL-2AVUDF-ED491{" "}
              <a href className="shareIconDsk">
                <img src="/images/share-icon.svg" alt="" />
              </a>
            </h1>
            <div className="prodDetTitleAotr pr-0">
              <span className="prodDetGender">
                Retrogarade Chronograph-Men's-Watch
              </span>
              <span className="prodDetPrice">
                <span className="prodDetSalePrice">
                  <i className="fas fa-rupee-sign" />
                  8,936
                </span>{" "}
                <span className="prodDetOldPrice">
                  <i className="fas fa-rupee-sign" /> 11,995
                </span>{" "}
                <span className="prodDetPercentagePrice">(30% off)</span>{" "}
              </span>
              <div className="ratingStarDsk">
                <Rate
                  allowHalf
                  value={2.5}
                  style={{ color: "#0066B2" }}
                  disabled
                />
              </div>
              <div
                className="accordion md-accordion prodDelAccordDsk"
                id="accordionEx"
                role="tablist"
                aria-multiselectable="true"
              >
                <KeyFeatures />
                <div className="card productSliderCoverDsk pt-0">
                  <div
                    className="card-header"
                    role="tab"
                    id="headingOne01"
                    onClick={() => {
                      setCollapse(!collapseColor);
                    }}
                  >
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      data-parent="#accordionEx"
                      href="#collapseOne01"
                      aria-expanded="true"
                      aria-controls="collapseOne01"
                    >
                      <h5 className="mb-0">
                        Colour Options{" "}
                        <img
                          src="/images/dtl-top-arrow.svg"
                          alt=""
                          className="dtlArrowDsk2"
                        />{" "}
                      </h5>
                    </a>
                  </div>
                  <div className="collapse d-block mt-3-px">
                    <div className="card-body mb-3-px">
                      <div className="container">
                        <div className="row">
                          <div
                            className="col-12"
                            style={{
                              display: collapseColor ? "none" : "block",
                            }}
                          >
                            <div className="scrolling-wrapperDsk">
                              {colors.map((item) => (
                                <div
                                  className="productCardDsk"
                                  key={item}
                                  onClick={() => setColor(item)}
                                >
                                  <div className="prodSingle">
                                    <div className="post_img">
                                      <div className="img_wrapDsk">
                                        <div className="imgWrapInner">
                                          <a href="#">
                                            <img src={item} alt="" />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ChekDeliver />
                <OfferAvailablity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
