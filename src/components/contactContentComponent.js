import React from "react";

class ContactContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="overlay"></div>
        <main id="contact">
          <h1 className="lg-heading">
            Contact
            <span className="text-secondary"> Me</span>
          </h1>
          <div className="boxes">
              <div>
                  <span className="text-secondary">
                      Email:
                  </span> Ermano.Claude@cix.csi.cuny.edu
              </div>
              <div>
                  <span className="text-secondary">
                      Phone:
                  </span> +1 (347) 938-6189
              </div>
              <div>
                  <span className="text-secondary">
                      Address:
                  </span> 259 Oder Ave, Staten Island New York 10304
              </div>
          </div>
        </main>
      </div>
    );
  }
}
export default ContactContent;
