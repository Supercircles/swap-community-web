import React, { Component } from "react";
import axios from "axios";
import "../css/CoinData.css";

export default class CoinData extends Component {
  interval = null;
  constructor(props) {
    super(props);
    this.state = {
      hashrate: "",
      difficulty: "",
      coinbase: "",
      blocknumber: "",
      price: "",
      priceSats: "",
      volume: "",
      usdPrice: "",
      usdVolume: "",
      blockReward: "",
    };
  }
  componentDidMount() {
    this.interval = setInterval(this.getData, 60000);
    this.getData();
  }
  getData = () => {  
    axios
      .all([
        axios.get("https://explorer.xwp.one/api/networkinfo"),
        axios.get("https://explorer.xwp.one/api/emission"),
        axios.get("https://tradeogre.com/api/v1/ticker/BTC-XWP"),
        axios.get("https://blockchain.info/ticker"),
      ])
      .then((responseArr) => {
        this.setState({ hashrate: responseArr[0].data.data.hash_rate });
        this.setState({
          difficulty: responseArr[0].data.data.difficulty,
        });
        this.setState({ coinbase: responseArr[1].data.data.coinbase });
        this.setState({ blocknumber: responseArr[1].data.data.blk_no });
        this.setState({ price: responseArr[2].data.price });
        this.setState({ priceSats: responseArr[2].data.price });
        this.setState({ volume: responseArr[2].data.volume });
        this.setState({ usdPrice: responseArr[3].data.USD.last });
        this.setState({ usdVolume: responseArr[3].data.USD.last })
        console.log(responseArr[4]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const {
      hashrate,
      difficulty,
      coinbase,
      blocknumber,
      price,
      priceSats,
      volume,
      usdPrice,
      usdVolume,
    } = this.state;
    return (
      <div className="columns coinStats">
        <div class="column is-flex"></div>
        <div class="column is-2">
          <div class="column">
            <div>Network</div>
            <div class="coinStatsContent">
              {(hashrate / 32).toFixed(2)}&nbsp;Kgps
            </div>
          </div>
          <div class="column">
            <div>Difficulty</div>
            <div class="coinStatsContent">
              {Intl.NumberFormat().format(difficulty)}
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="column">
            <div>Circulation</div>
            <div class="coinStatsContent">
              {Intl.NumberFormat().format(
                (coinbase / 1000000000000).toFixed(0)
              )}
            </div>
          </div>
          <div class="column">
            <div>Block</div>
            <div class="coinStatsContent">
              {Intl.NumberFormat().format(blocknumber)}
            </div>
          </div>
        </div>
        <div class="column is-2">
          <div class="column">
            <div>Price</div>
            <div class="coinStatsContent">
              {Intl.NumberFormat().format((priceSats * 100000000).toFixed(0))}&nbsp;Sats &#8644; &#36;
              {(price * usdPrice).toFixed(2)}
            </div>
          </div>
          <div class="column">
            <div>24hr Volume</div>
            <div class="coinStatsContent">
              &#36;{Intl.NumberFormat().format((volume * usdVolume).toFixed(0))}
            </div>
          </div>
        </div>
        <div class="column is-flex"></div>
      </div>
    );
  }
}
