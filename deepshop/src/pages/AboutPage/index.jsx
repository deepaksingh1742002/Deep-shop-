import React from "react";
import Navbar from "../../Component/Navbar";

const AboutPage = () => {
  return (
    <div>
      {/* Navbar */}

      {/* About Us Heading */}
      <div className="bg-light py-5 text-center">
        <h1 className="display-4 font-weight-bold text-dark">About Us</h1>
      </div>

      {/* Introduction Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <p className="lead text-secondary mx-auto" style={{ maxWidth: "600px" }}>
            Welcome to our eCommerce platform! We are dedicated to providing 
            high-quality products at the best prices while ensuring a seamless 
            and enjoyable shopping experience.
          </p>
        </div>
      </section>

      {/* Details Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="h4 font-weight-semibold text-dark">Who We Are</h3>
            <p className="text-secondary mt-3">
              We are a passionate team committed to bringing you the best in 
              fashion, electronics, and lifestyle products. Our goal is to make 
              online shopping easy, secure, and enjoyable for everyone.
            </p>
          </div>
          <div className="col-md-6">
            <h3 className="h4 font-weight-semibold text-dark">Our Mission</h3>
            <p className="text-secondary mt-3">
              Our mission is to bridge the gap between quality and affordability, 
              ensuring that every purchase you make is worthwhile. We prioritize 
              customer satisfaction and continuously work to improve our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

