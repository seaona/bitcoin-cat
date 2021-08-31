import React from "react";
import axios from "axios";
import './App.scss';

class App extends React.Component {
  state = {
    blockCount: "0",
    peerInfo: "0",
    bestBlockHash: "0",
    difficulty: "0",
    blockHash: ""
  };

  componentDidMount() {
    this.getBlockCount();
    this.getPeerInfo();
    this.getBestBlockHash();
    this.getDifficulty();
    this.getBlockHash();

    // Update state every 5 seconds
    this.interval = setInterval(() => {
      this.getBlockCount();
      this.getPeerInfo();
      this.getBestBlockHash();
      this.getDifficulty();
      this.getBlockHash()
    }, 5000);
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

  getBestBlockHash = () => {
    axios
      .get(`/api/getbestblockhash`)
      .then(res => {
        this.setState({ bestBlockHash: res.data.result });
      })
      .catch(err => console.log(err));
  };  

  getDifficulty = () => {
    axios
      .get(`/api/getdifficulty`)
      .then(res => {
        this.setState({ difficulty: res.data.result });
      })
      .catch(err => console.log(err));
  };

  getBlockHash = (index) => {
    axios
      .get(`/api/getblock/:${index}`)
      .then(res => {
        this.setState({ blockHash: res.data.result });
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
          <h2>Blockchain RPCs</h2>
          <br></br>
          <p>Get Block Count: {this.state.blockCount}</p>
          <br></br>
          <p>Get Peer Info: {this.state.peerInfo.length}</p>
          <br></br>
          <p>Get Best Block Hash: {this.state.bestBlockHash.length}</p>
          <br></br>
          <p>Get Difficulty: {this.state.difficulty}</p>
          <br></br>
          <p>Get Block Hash: {this.state.blockHash}</p>
          <form>
            <input type="text" className="input-field" placeholder="<<Block height>>"></input>
          </form>
          <br></br>
          <p>Get Block: {this.state.blockHash}</p>
          <br></br>

          <h2>Control RPCs</h2>
          <br></br>

          <p>Creat per: Terminal379</p>
        </div>
      </div>
    );
  }
}

export default App;