import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container-fluid text-center d-none d-lg-block">
        <div className="row ">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">produkty</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">název</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">cena</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">počet</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">odstranit</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">celkem</p>
          </div>
        </div>
      </div>
    );
  }
}
