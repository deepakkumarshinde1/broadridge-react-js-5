import { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {/* <!-- Weather Cards --> */}
        <div className="card-container">
          {/* <!-- Card --> */}
          <div className="weather-card">
            <h2>Nashik</h2>
            <p className="country">[ IN ]</p>
            <p className="temp">28°C</p>

            <button className="delete-btn">
              <i className="fa fa-trash"></i>
            </button>
          </div>

          {/* <!-- Card --> */}
          <div className="weather-card">
            <h2>Mumbai</h2>
            <p className="country">[ IN ]</p>
            <p className="temp">28°C</p>

            <button className="delete-btn">
              <i className="fa fa-trash"></i>
            </button>
          </div>

          {/* <!-- Card --> */}
          <div className="weather-card">
            <h2>Pune</h2>
            <p className="country">[ IN ]</p>
            <p className="temp">28°C</p>

            <button className="delete-btn">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default List;
