import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    blockchainInfo: [],
    miningInfo: {},
    peerInfo: []
  };
  componentDidMount() {
    this.getBlockchainInfo();
    this.getMiningInfo();
    this.getPeerInfo();
  }
  getBlockchainInfo = () => {
    axios
      .get(`/api/getblockcount`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ blockchainInfo: result });
        console.log(this.state.blockchainInfo)
      })
      .catch(err => console.log(err));
  };
  getMiningInfo = () => {
    axios
      .get(`/api/getmininginfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ miningInfo: result });
      })
      .catch(err => console.log(err));
  };
  getPeerInfo = () => {
    axios
      .get(`/api/getpeerinfo`)
      .then(res => {
        const data = res.data;
        const result = data.result;
        this.setState({ peerInfo: result });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="App">
        <h1>Bitcoin API</h1>
        <p>Number of blocks: {this.state.blockchainInfo.result}</p>
        <p>Mining Difficulty: {this.state.miningInfo.difficulty}</p>
        <p>Number of Peers: {this.state.peerInfo.length}</p>
      </div>
    );
  }
}

export default App;