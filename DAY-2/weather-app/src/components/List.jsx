import { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
  }

  removeFromList = (index) => {
    let _newList = [...this.props.cites];
    _newList.splice(index, 1);
    this.props.setCites(_newList);
  };

  render() {
    return (
      <>
        {this.props.cites.length ? (
          <>
            {/* <!-- Weather Cards --> */}
            <div className="card-container">
              {/* <!-- Card --> */}

              {this.props.cites.map((city, index) => {
                return (
                  <div className="weather-card" key={city.id}>
                    <h2>{city.name}</h2>
                    <p className="country">[ {city.sys.country} ]</p>
                    <p className="temp">{city.main.temp}°C</p>

                    <button
                      className="delete-btn"
                      onClick={() => this.removeFromList(index)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p className="center">Search your city.</p>
        )}
      </>
    );
  }
}

export default List;
