import { Component } from "react";
class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }
  inc = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidUpdate() {}

  render() {
    return (
      <>
        <h1>Hello {this.state.counter}</h1>
      </>
    );
  }
}
