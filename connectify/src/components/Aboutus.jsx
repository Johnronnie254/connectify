import React from "react";

function Aboutus() {
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center mb-4">About Us</h2>

        <div className="row">
          <div className="col-md-6">
            <img
              src="https://suretyit.com.au/wp-content/uploads/2019/09/shutterstock_350999087.jpg"
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fringilla ex id fermentum accumsan. Fusce non hendrerit odio, vel
              vestibulum est. Integer vel enim nec lectus tincidunt congue.
            </p>
            <p>
              Vivamus auctor, velit eget bibendum laoreet, sem turpis dapibus
              risus, at ultricies nisl justo eu orci. Integer nec tristique leo.
              Phasellus in tellus et nulla gravida pharetra.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
