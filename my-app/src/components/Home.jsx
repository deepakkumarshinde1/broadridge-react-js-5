import { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.state = { count: 100 };
  }

  incCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        Home {this.state.count}
        <button className="btn" onClick={this.incCount}>
          INC
        </button>
      </div>
    );
  }
}

export default Home;
