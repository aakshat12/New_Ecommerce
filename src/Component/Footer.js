import React from "react";

function Footer() {
  return (
    <div>
      <section  style={{backgroundcolor: "lightblue"}}>
        {/* <!-- Footer --> */}
        <footer
          className="text-center text-white"  style={{background:"aqua"}}
         
        >
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0" >
            {/* <!-- Section: CTA --> */}
            <section className="">
              <p className="d-flex justify-content-center align-items-center " >
                <span className="me-3">Register for free</span>
                <button type="button" className="btn btn-outline-dark btn-rounded">
                  Sign up!
                </button>
              </p>
            </section>
            {/* <!-- Section: CTA --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style={{color: "white",background:"black"}}
          >
            © 2020 Copyright:
            <a className="text-white m-2" href="" >
             Code with Akshat
            </a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </section>
      
    </div>
  );
}

export default Footer;
