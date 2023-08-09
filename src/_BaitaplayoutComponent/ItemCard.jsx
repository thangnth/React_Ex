import React from "react";

export default function ItemCard() {
  return (
    <>
      <div className="col-lg-6 col-xxl-3 mb-5">
        <div className="card bg-light border-0 h-100">
          <div className="card-header text-center">Card Header</div>
          <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
              <i className="bi bi-collection" />
            </div>
            <h2 className="fs-4 fw-bold text-center">Card title</h2>
            <p className="mb-0 text-center">
              With Bootstrap 5, we've created a fresh new layout for this
              template!
            </p>
          </div>
          <div className="card-footer">
            <a class="btn btn-primary btn-lg" href="#!">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
