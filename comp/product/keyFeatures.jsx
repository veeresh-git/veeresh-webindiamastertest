import React from "react";

const KeyFeatures = () => {
  const features = [
    "Bluetooth Connect",
    "Schedule Timer",
    "World Timer",
    "Phone Finder",
    "Tough Solar",
    "Non-Reflective Coating",
  ];
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
          <h5 className="mb-0">Key Features</h5>
        </a>
      </div>
      <div
        id="collapseOne3"
        className="collapse show"
        role="tabpanel"
        aria-labelledby="headingOne3"
        data-parent="#accordionEx"
      >
        <div className="card-body prodDetKeyfeaturesDsk">
          <div className="list-group d-flex flex-row flex-wrap">
            {features.map((item) => (
              <div
                className="list-group-item list-group-item-action"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
