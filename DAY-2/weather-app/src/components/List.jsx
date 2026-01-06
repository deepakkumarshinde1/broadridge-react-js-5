import { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("comp mount");
  } // only per lifecycle

  componentWillUnmount() {
    console.log("comp unmount");
  } // only per lifecycle

  componentDidUpdate() {
    console.log("comp was updated");
  }

  // shouldComponentUpdate() {
  //   if (this.state.count < 0) {
  //     return false;
  //   }
  //   return true;
  // }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        List {this.props.text}
        <button onClick={this.inc}>Inc {this.state.count}</button>
        <button>Dec</button>
      </div>
    );
  }
}

export default List;
