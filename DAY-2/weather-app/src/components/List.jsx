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

          {this.props.cites.map((city) => {
            return (
              <div className="weather-card">
                <h2>{city.name}</h2>
                <p className="country">[ {city.sys.country} ]</p>
                <p className="temp">{city.main.temp}°C</p>

                <button className="delete-btn">
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default List;
