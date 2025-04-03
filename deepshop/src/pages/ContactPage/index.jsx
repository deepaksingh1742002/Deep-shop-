import React from "react";
import Navbar from "../../Component/Navbar";

const ConnectPage = () => {
  return (
    <div>
      {/* <Navbar /> */}

      <section className="bg-white d-flex align-items-center" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <h2 className="h4 font-weight-bold mb-3">Let’s Connect</h2>
                  <p className="text-muted mb-4">
                    Whether you have a question, feedback, or just want to say hi — we’re all ears.
                    Reach out anytime!
                  </p>
                  <div className="text-left">
                    <p className="mb-2"><strong>Email:</strong> EShop@storee.com</p>
                    <p className="mb-2"><strong>Phone:</strong> +91 9876543210</p>
                    <p><strong>Support Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-muted small mt-3">
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConnectPage;
