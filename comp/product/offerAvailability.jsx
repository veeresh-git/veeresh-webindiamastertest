import React from "react";

const OfferAvailablity = () => {
  return (
    <div className="card">
      <div className="card-header" role="tab" id="headingOne3">
        <a
          className="collapsed"
          data-toggle="collapse"
          data-parent="#accordionEx"
          href="#collapseOne3"
          aria-expanded="true"
          aria-controls="collapseOne3"
        >
          <h5 className="mb-0 blue-color">Offers Available</h5>
        </a>
      </div>
      <div className="prodOffersAvailableDsk">
        <div className="card-body">
          <div className="offerAvailableInn d-flex justify-content-between mr-17-px">
            <div className="tengah d-flex w-100 justify-content-start">
              <div>
                <p className="mb-0">
                  <span className="offerTile">
                    Get it for{" "}
                    <strong>
                      <i className="fas fa-rupee-sign" />
                      7,986
                    </strong>
                  </span>
                  Get upto Extra 10% Off on Edifice Collection.*
                </p>
              </div>
            </div>
            <div className="couponCodeBxDsk">
              <div className="icon-container h-100">
                <div className="couponCodeBxIconDsk d-flex align-items-center flex-column justify-content-center h-100">
                  Use Code:
                  <br />
                  WATCHES
                </div>
              </div>
            </div>
          </div>
          <div className="offerAvailableInn d-flex justify-content-between">
            <div className="tengah d-flex w-100 justify-content-start">
              <div>
                <p className="mb-0">
                  <span className="offerTile">
                    <strong>Zero Cost EMI</strong>
                  </span>
                  Pay in easy monthly installments.
                  <br />
                  Choose from 3/6/9/12 months.*
                </p>
              </div>
            </div>
            <div className="couponCodeBxDsk">
              <div className="icon-container h-100">
                <div className="couponCodeBxIconDsk d-flex align-items-center flex-column justify-content-center h-100">
                  Use Code:
                  <br />
                  WATCHES
                </div>
              </div>
            </div>
          </div>
          <div className="mb-22-px clear">
            <a href className="offTacDsk float-left ml-6-px">
              View 1 more offer
            </a>{" "}
            <a href className="offTacDsk float-right">
              <strong>*Terms &amp; Conditions</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferAvailablity;
