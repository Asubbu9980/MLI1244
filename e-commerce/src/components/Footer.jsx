import React from "react";


const index = () => {
  return (
    <div>
      <footer className="text-center mb-0 text-lg-start bg-dark text-muted " >

        <section className="d-flex justify-content-center text-white justify-content-lg-between p-4 border-bottom">

          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div  >
            <a href="#!" className="me-4 ">
              <i className="bi bi-facebook text-warning "></i>
            </a>
            <a href="#!" className="me-4 link-secondary">
              <i className="bi bi-twitter text-warning"></i>
            </a>
            <a href="#!" className="me-4 link-secondary">
              <i className="bi bi-google text-warning"></i>
            </a>
            <a href="#!" className="me-4 link-secondary">
              <i className="bi bi-instagram text-warning"></i>
            </a>
            <a href="#!" className="me-4 link-secondary">
              <i className="bi bi-linkedin text-warning"></i>
            </a>
            <a href="#!" className="me-4 link-secondary">
              <i className="bi bi-github text-warning"></i>
            </a>
          </div>

        </section>

        <section className="text-white">
          <div className="container text-center text-md-start mt-5 ">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4 text-light ">
                  Company name :
                </h6>
                <p className="fw-bold ms-3 text-light">
                  <h5>Shopify</h5>
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4 text-light">Products </h6>
                <p>
                  <a href="#!" className="text-reset text-decoration-none text-light">
                    Fashion
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none text-light">
                    Grocerys
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none text-light">
                    Mobiles
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none text-light">
                    Home Meterials
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4 text-light">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset text-decoration-none text-light">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none text-light">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none text-light">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset text-decoration-none text-light">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4 text-light">Contact :</h6>
                <p>
                  <i className="bi bi-person-circle text-info "></i> <span className="text-light">Venkat Ram</span>
                </p>
                <p>
                  <i className="bi bi-envelope-fill text-info "></i> <span className="text-light" >venkataram@gmail.com</span>
                </p>
                <p>
                  <i className="bi bi-phone text-info"></i> <span className="text-light">+91 8074747172</span>
                </p>

              </div>

            </div>

          </div>
        </section>

        <div className="text-center text-muted p-1 pb-5 fs-4">© 2023 Copyright : <b>Shopify</b></div>

      </footer>

    </div>
  );
};

export default index;
