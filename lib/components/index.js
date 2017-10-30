import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const mountNode = document.getElementById('root');

class App extends Component {
  state = {
    answer: 43
  }
  asyncFunc = () => {
    return Promise.resolve(37);
  }
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  render() {
    return (
      <h2>Hello Class Components -- {this.state.answer}</h2>
    );
  }
}

export default App;

ReactDOM.render(<App />, mountNode);