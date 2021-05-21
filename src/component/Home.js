import React, { Component } from "react";
import Navbar from "../component/Navbar";
import CoinData from "../component/CoinData";
import "../css/Home.css";

import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faChevronCircleRight);

export default class Home extends Component {
  render() {
    return (
      <div>
      <div
        className="hero parallax is-cover is-relative is-fullheight"
        data-background="assets/img/graphics/backgrounds/tropical_background1.jpg"
        data-color="#151933"
        data-color-opacity="0.9"
      >
        <Navbar />
        <div id="main-hero" className="hero-body ">
          <div className="container has-text-centered">
            <div className="columns is-vcentered">
              <div className="column is-6 is-offset-3 has-text-centered">
                <h1 className="parallax-hero-title light-text">
                  <img
                    src="assets/img/logos/logo/swap-logo-coloured.png"
                    alt="Swap Logo"
                  />
                </h1>
                <h2 className="subtitle is-5 light-text">
                  Secure &sdot; Private &sdot; Defi
                </h2>
                <br />
                <p className="has-text-centered">
                  <a
                    href="/wallets"
                    className="button button-cta btn-align primary-btn rounded raised z-index-2"
                  >
                    Get a Wallet
                    <FontAwesomeIcon
                      className="icon-space"
                      icon={faChevronCircleRight}
                    />
                  </a>
                </p>
              </div>
            </div>
            <CoinData />
          </div>
        </div>
      </div>
      <div id="services" class="section is-medium">
        <div class="container">
          <div class="section-title-wrapper has-text-centered">
            <div class="bg-number">
              <i class="im im-icon-Bird"></i>
            </div>
            <h2 class="section-title-landing">
              <i class="im im-icon-Security-Check"></i> Secure Private Defi
            </h2>
            <h4>Private Transactions &amp; Progressive Proof of Work</h4>
          </div>
          <div class="content-wrapper">
            <div class="columns is-vcentered is-multiline has-text-centered">
              <div class="column is-3">
                <div class="wavy-icon-box">
                  <div class="is-icon-reveal">
                    <i class="im im-icon-Mask"></i>
                  </div>
                  <div class="box-title">Private Transactions</div>
                  <p class="box-content is-tablet-padded">
                    Robust privacy features with CryptoNote, a peer-reviewed
                    protocol.
                  </p>
                </div>
              </div>
              <div class="column is-3">
                <div class="wavy-icon-box">
                  <div class="is-icon-reveal">
                    <i class="im im-icon-Bird"></i>
                  </div>
                  <div class="box-title">Progressive Proof of Work</div>
                  <p class="box-content is-tablet-padded">
                    Cuckoo Cycle is peer-reviewed, improves verification speed,
                    and secures the network against ASIC attacks.
                  </p>
                </div>
              </div>
              <div class="column is-3">
                <div class="wavy-icon-box">
                  <div class="is-icon-reveal">
                    <i class="im im-icon-Financial"></i>
                  </div>
                  <div class="box-title">Limited Supply</div>
                  <p class="box-content is-tablet-padded">
                    The total supply is 18,400,000&nbsp;XWP and the tail
                    emission begins November 2026.
                  </p>
                </div>
              </div>
              <div class="column is-3">
                <div class="wavy-icon-box">
                  <div class="is-icon-reveal">
                    <i class="im im-icon-Transform-3"></i>
                  </div>
                  <div class="box-title">Non-linear Emission Curve</div>
                  <p class="box-content is-tablet-padded">
                    Block rewards are lowered until 0.075&nbsp;XWP per block and
                    432&nbsp;XWP are mined per day.
                  </p>
                </div>
              </div>
            </div>
            <div class="has-text-centered pt-40 pb-40">
              <a href="#" class="button button-cta primary-btn rounded raised">
                Learn more
                <FontAwesomeIcon
                  className="icon-space"
                  icon={faChevronCircleRight}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section section-alt is-medium">
        <div className="container">
          <div className="container">
            <div className="section-title-wrapper has-text-centered">
              <div className="bg-number">
                <i className="im im-icon-Conference"></i>
              </div>
              <h2 className="section-title-landing">
                <i className="im im-icon-Conference"></i> Community Developed
              </h2>
              <h4>Fair Mining &amp; Fair Emission</h4>
            </div>
            <div className="content-wrapper">
              <div className="columns">
                <div className="column is-10 is-offset-1">
                  <div className="columns is-vcentered">
                    <div className="column is-6">
                      <div className="flex-card testimonial-card light-bordered padding-20">
                        <div className="testimonial-title">
                          Being peer-reviewed gives a measure of trust to the
                          software
                        </div>
                        <div className="testimonial-text">
                          However, because of the obfuscation and complexity in
                          the PoW used by Monero and other CryptoNote protocol
                          based coins, we felt that we needed to move from their
                          PoW and find something better. After all, their PoW is
                          not peer-reviewed.
                        </div>
                        <div className="user-id">
                          <img
                            alt="Seb Green"
                            src="assets/img/avatars/seb-green.png"
                          />
                          <div className="info">
                            <div className="name clean-text">Seb Green</div>
                            <div className="position">
                              Swap co-founder &amp; Developer
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-card testimonial-card light-bordered padding-20">
                        <div className="testimonial-title">
                          Swap is focused on stability, usability, and
                          decentralization
                        </div>
                        <div className="testimonial-text">
                          Many projects will claim the same, but will only pay
                          lip-service to any one of these, adding features that
                          breaks one or more of these tenets in some way.
                        </div>
                        <div className="user-id">
                          <img
                            alt="Long Huynh"
                            src="assets/img/avatars/long-hugh.png"
                          />
                          <div className="info">
                            <div className="name clean-text">Long Huynh</div>
                            <div className="position">
                              Swap co-founder &amp; Developer
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="column is-6">
                      <div className="flex-card testimonial-card light-bordered padding-20">
                        <div className="testimonial-title">
                          Cuckoo Cycle is the first graph-theoretic
                          proof-of-work
                        </div>
                        <div className="testimonial-text">
                          And the most memory bound, yet with instant
                          verification. Unlike Hashcash, Cuckoo Cycle is immune
                          from quantum speedup by Grover’s search algorithm.
                        </div>
                        <div className="user-id">
                          <img
                            alt="John Tromp"
                            src="assets/img/avatars/john-tromp.jpg"
                          />
                          <div className="info">
                            <div className="name clean-text">John Tromp</div>
                            <div className="position">Cuckoo Author</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-card testimonial-card light-bordered padding-20">
                        <div className="testimonial-title">
                          A fundamentally strong cryptocurrency
                        </div>
                        <div className="testimonial-text">
                          Swap takes its fundamental-focused approach to the
                          next level, creating the best example of what an ideal
                          cryptocurrency should be all about.
                        </div>
                        <div className="user-id">
                          <img
                            alt="01HODL"
                            src="assets/img/avatars/01hodl.jpg"
                          />
                          <div className="info">
                            <div className="name clean-text">01HODL</div>
                            <div className="position">Gem Finder</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-clients five-grid pt-80 pb-80">
                <div className="columns is-vcentered">
                  <div className="column is-hidden-mobile"></div>
                  <div className="column">
                    <a href="https://www.miningrigrentals.com/rigs/cuckoocycle29swap/">
                      <img
                        className="client"
                        src="assets/img/exchanges/mining-rig-rentals.svg"
                        alt="Mining Rig Rentals"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://tradeogre.com/exchange/BTC-XWP">
                      <img
                        className="client"
                        src="assets/img/exchanges/tradeogre.svg"
                        alt="TradeOgre Exchange"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://graviex.net/markets/xwpbtc">
                      <img
                        className="client"
                        src="assets/img/exchanges/graviex.svg"
                        alt="Graviex Exchange"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://www.cryptunit.com/coin/XWP">
                      <img
                        className="client"
                        src="assets/img/market-trackers/cryptunit.svg"
                        alt="CryptUnit"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://miningpoolstats.stream/swap">
                      <img
                        className="client"
                        src="assets/img/market-trackers/mining-pool-stats.svg"
                        alt="Mining Pool Stats"
                      />
                    </a>
                  </div>
                  <div className="column is-hidden-mobile"></div>
                </div>
                <div className="columns is-vcentered is-separator">
                  <div className="column is-hidden-mobile"></div>
                  <div className="column">
                    <a href="https://whattomine.com/coins/301-xwp-cuckaroo29s">
                      <img
                        className="client"
                        src="assets/img/market-trackers/what-to-mine.svg"
                        alt="What to Mine"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://coinmarketcap.com/currencies/swap/">
                      <img
                        className="client"
                        src="assets/img/market-trackers/coinmarketcap.svg"
                        alt="Coinmarketcap"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://www.coingecko.com/en/coins/swap">
                      <img
                        className="client"
                        src="assets/img/market-trackers/coingecko.svg"
                        alt="Coingecko"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://coin360.com/coin/swap-xwp">
                      <img
                        className="client"
                        src="assets/img/market-trackers/coin360.svg"
                        alt="Coin360"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://coinpaprika.com/coin/xwp-swap/">
                      <img
                        className="client"
                        src="assets/img/market-trackers/coinpaprika.svg"
                        alt="Coinpaprika"
                      />
                    </a>
                  </div>
                  <div className="column is-hidden-mobile"></div>
                </div>
                <div className="columns is-vcentered is-separator">
                  <div className="column is-hidden-mobile"></div>
                  <div className="column">
                    <a href="https://nomics.com/assets/xwp-swap">
                      <img
                        className="client"
                        src="assets/img/market-trackers/nomics.svg"
                        alt="Nomics"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://coinlib.io/coin/XWP/Swap">
                      <img
                        className="client"
                        src="assets/img/market-trackers/coinlib.svg"
                        alt="Coinlib"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://www.livecoinwatch.com/price/Swap-XWP">
                      <img
                        className="client"
                        src="assets/img/market-trackers/livecoinwatch.svg"
                        alt="Livecoinwatch"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://blockfolio.com/coin/XWP">
                      <img
                        className="client"
                        src="assets/img/market-trackers/blockfolio.svg"
                        alt="Blockfolio"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="https://delta.app/">
                      <img
                        className="client"
                        src="assets/img/market-trackers/delta.svg"
                        alt="Delta"
                      />
                    </a>
                  </div>
                  <div className="column is-hidden-mobile"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}