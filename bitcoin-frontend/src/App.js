import React from "react";
import axios from "axios";
import './App.scss';

class App extends React.Component {
  state = {
    blockCount: "0",
    peerInfo: "0"
  };
  componentDidMount() {
    this.getBlockCount();
    this.getPeerInfo();
  }

  getBlockCount = () => {
    axios
      .get(`/api/getblockcount`)
      .then(res => {
        this.setState({ blockCount: res.data.result });
      })
      .catch(err => console.log(err));
  };

  getPeerInfo = () => {
    axios
      .get(`/api/getpeerinfo`)
      .then(res => {
        this.setState({ peerInfo: res.data.result });
      })
      .catch(err => console.log(err));

  };
  render() {
    return (
      <div className="main">
        <div id="content">
          <div className="title">Bitcoin RPC API</div>
          <br></br>
          <br></br>
          <p>Número de blocs: {this.state.blockCount}</p>
          <p>Número de nodes: {this.state.peerInfo.length}</p>
          <p>Creat per: Terminal379</p>
        </div>
      </div>
    );
  }
}

export default App;