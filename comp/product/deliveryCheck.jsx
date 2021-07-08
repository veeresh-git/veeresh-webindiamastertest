import React from "react";

const ChekDeliver = () => {
  return (
    <div className="card">
      <div className="prodDeliveryDsk">
        <div className="card-body">
          <div className="prodDetCheckDeliveryDsk">
            <span className="d-block pb-12-px">
              Check Delivery Date &amp; Availability{" "}
            </span>
            <form>
              <div className="form-group d-inline-block chkinput">
                <input
                  type="text"
                  defaultValue={201301}
                  className="form-control-sm"
                />
                <input type="submit" defaultValue="Check" className="btn" />
              </div>
              <div className="form-group d-inline-block">
                <button type="submit" className="pinButton pl-1">
                  Change Pin
                </button>
              </div>
            </form>
            <span className="d-block afddiv greenText">
              Available. Free Delivery.
            </span>
            <span className="d-block afddiv">
              Product will be delivered by 31st May’ 21
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChekDeliver;
