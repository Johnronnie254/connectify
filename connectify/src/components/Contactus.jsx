import React from "react";

function Contactus() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Make your Complaints</h2>

      <form>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Issue</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Type your message here"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contactus;
